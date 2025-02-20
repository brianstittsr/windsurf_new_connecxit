import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { getSession } from '@/lib/neo4j';


export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  timezone: string;
  role: string;
  image?: string;
  bio?: string;
  location?: string;
  website?: string;
  company?: string;
  title?: string;
  skills?: string[];
  interests?: string[];
  unreadMessages?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthToken {
  user: User;
  exp: number;
  iat: number;
}

export async function authenticateUser(email: string, password: string): Promise<{ user: User; token: string }> {
  if (!email || !password) {
    console.error('Missing credentials');
    throw new Error('Please provide both email and password');
  }

  let session = null;
  try {
    session = await getSession();
    console.log('Attempting to authenticate user:', email);

    const result = await session.run(
      `
      MATCH (u:User {email: $email})
      RETURN u {
        .id,
        .email,
        .firstName,
        .lastName,
        .phone,
        .timezone,
        .role,
        .image,
        .bio,
        .location,
        .website,
        .company,
        .title,
        .skills,
        .interests,
        .hashedPassword,
        .unreadMessages,
        .createdAt,
        .updatedAt
      } as user
      `,
      { email }
    );

    const user = result.records[0]?.get('user');

    if (!user) {
      console.error('User not found:', email);
      throw new Error('Invalid email or password');
    }

    if (!user.hashedPassword) {
      console.error('Invalid account configuration for user:', email);
      throw new Error('Invalid account configuration');
    }

    const isCorrectPassword = await bcrypt.compare(password, user.hashedPassword);

    if (!isCorrectPassword) {
      console.error('Invalid password for user:', email);
      throw new Error('Invalid email or password');
    }

    console.log('Successfully authenticated user:', email);

    // Remove sensitive data before returning
    const userWithoutPassword = { ...user };
    delete userWithoutPassword.hashedPassword;

    // Generate JWT token
    const token = generateToken(userWithoutPassword);

    return { user: userWithoutPassword, token };
  } catch (error) {
    console.error('Authentication error:', error instanceof Error ? error.message : 'Unknown error occurred');
    throw error;
  } finally {
    if (session) {
      await session.close();
    }
  }
}

export function generateToken(user: User): string {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not set');
  }

  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '7d', // Token expires in 7 days
  });
}

export function verifyToken(token: string): AuthToken {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not set');
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET) as AuthToken;
  } catch (error) {
    throw new Error('Invalid token');
  }
}

export function getTokenFromHeader(authHeader?: string): string {
  if (!authHeader) {
    throw new Error('No authorization header');
  }

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer' || !token) {
    throw new Error('Invalid authorization header');
  }

  return token;
}
