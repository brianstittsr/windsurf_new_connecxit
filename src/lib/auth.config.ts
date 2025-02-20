import { getSession } from "./neo4j";

import { verifyEnvironmentVariables } from "@/utils/verifyEnv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export type User = {
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  timezone?: string;
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
};

const JWT_SECRET = process.env.JWT_SECRET || "default-secret-key-change-in-production";
const TOKEN_EXPIRY = "24h";

export async function authenticate(
  email: string,
  password: string,
): Promise<{ user: User; token: string } | null> {
  verifyEnvironmentVariables();

  let session = null;
  try {
    session = await getSession();

    const result = await session.run(
      `
      MATCH (u:User {email: $email})
      RETURN u {
        .id,
        .role,
        .firstName,
        .lastName,
        .email,
        .phone,
        .timezone,
        .hashedPassword,
        .image,
        .bio,
        .location,
        .website,
        .company,
        .title,
        .skills,
        .interests,
        .unreadMessages,
        .createdAt,
        .updatedAt
      } as user
      `,
      { email },
    );

    const user = result.records[0]?.get("user");
    if (!user) {
      console.error("User not found:", email);
      return null;
    }

    const isValidPassword = await bcrypt.compare(password, user.hashedPassword);
    if (!isValidPassword) {
      console.error("Invalid password for user:", email);
      return null;
    }

    // Remove sensitive data
    const { hashedPassword: _, ...userWithoutPassword } = user;

    // Create JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: TOKEN_EXPIRY },
    );

    return {
      user: userWithoutPassword as User,
      token,
    };
  } catch (error) {
    console.error(
      "Authentication error:",
      error instanceof Error ? error.message : "Unknown error occurred",
    );
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
          .role,
          .firstName,
          .lastName,
          .email,
          .phone,
          .timezone,
          .image,
          .bio,
          .location,
          .website,
          .company,
          .title,
          .skills,
          .interests,
          .unreadMessages,
          .createdAt,
          .updatedAt
        } as user
        `,
        { userId: decoded.userId },
      );

      const user = result.records[0]?.get("user");
      return (user as User) || null;
    } finally {
      if (session) {
        await session.close();
      }
    }
  } catch (error) {
    console.error(
      "Token verification error:",
      error instanceof Error ? error.message : "Unknown error occurred",
    );
    return null;
  }
}

export function createAuthMiddleware() {
  return async function authMiddleware(req: Request) {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const token = authHeader.split(" ")[1];
    const user = await verifyToken(token);

    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
      });
    }

    return null; // Continue to next middleware/handler
  };
}
