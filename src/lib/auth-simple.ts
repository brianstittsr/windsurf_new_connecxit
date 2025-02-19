import { getSession } from './neo4j';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { logger } from '@/utils/logger';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const TOKEN_EXPIRY = '24h';

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  // Add other user properties as needed
};

export async function signIn(email: string, password: string): Promise<{ token: string; user: User } | null> {
  let session = null;
  try {
    session = await getSession();
    logger.log('Attempting authentication for:', email);

    const result = await session.run(
      `
      MATCH (u:User {email: $email})
      RETURN u {
        .id,
        .email,
        .firstName,
        .lastName,
        .role,
        .hashedPassword
      } as user
      `,
      { email }
    );

    const user = result.records[0]?.get('user');
    if (!user) {
      logger.error('User not found:', email);
      return null;
    }

    const isValidPassword = await bcrypt.compare(password, user.hashedPassword);
    if (!isValidPassword) {
      logger.error('Invalid password for user:', email);
      return null;
    }

    // Create JWT token
    const token = jwt.sign(
      { 
        userId: user.id,
        email: user.email,
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: TOKEN_EXPIRY }
    );

    // Remove sensitive data before returning
    const { hashedPassword: _, ...userWithoutPassword } = user;
    return { 
      token,
      user: userWithoutPassword as User
    };
  } catch (error) {
    logger.error('Authentication error:', error);
    return null;
  } finally {
    if (session) {
      await session.close();
    }
  }
}

export async function verifyToken(token: string): Promise<User | null> {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    let session = null;
    
    try {
      session = await getSession();
      const result = await session.run(
        `
        MATCH (u:User {id: $userId})
        RETURN u {
          .id,
          .email,
          .firstName,
          .lastName,
          .role
        } as user
        `,
        { userId: decoded.userId }
      );

      const user = result.records[0]?.get('user');
      return user as User || null;
    } finally {
      if (session) {
        await session.close();
      }
    }
  } catch (error) {
    logger.error('Token verification error:', error);
    return null;
  }
}

export function createAuthMiddleware() {
  return async function authMiddleware(req: Request) {
    const authHeader = req.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const token = authHeader.split(' ')[1];
    const user = await verifyToken(token);
    
    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid token' }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return null; // Authentication successful
  };
}
