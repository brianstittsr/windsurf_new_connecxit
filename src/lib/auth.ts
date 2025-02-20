import * as jose from "jose";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  timezone?: string;
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

export async function generateToken(user: User): Promise<string> {
  const secret = new TextEncoder().encode(
    process.env.JWT_SECRET || "default-secret-key-change-in-production"
  );
  
  return await new jose.SignJWT({ user })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .setIssuedAt()
    .sign(secret);
}

export async function verifyToken(token: string): Promise<AuthToken> {
  try {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || "default-secret-key-change-in-production"
    );
    
    const { payload } = await jose.jwtVerify(token, secret);
    return payload as AuthToken;
  } catch (error) {
    console.error("Token verification error:", error);
    throw error;
  }
}

export function getTokenFromHeader(authHeader?: string): string {
  if (!authHeader) {
    throw new Error("No authorization header");
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2 || parts[0] !== "Bearer") {
    throw new Error("Invalid authorization header format");
  }

  return parts[1];
}


