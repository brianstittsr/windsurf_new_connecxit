import bcrypt from "bcryptjs";
import { getSession } from "@/lib/neo4j";
import { generateToken } from "@/lib/auth";
import type { User } from "@/lib/auth";

export async function authenticateUser(
  email: string,
  password: string,
): Promise<{ user: User; token: string }> {
  if (!email || !password) {
    console.error("Missing credentials");
    throw new Error("Please provide both email and password");
  }

  let session = null;
  try {
    session = await getSession();
    console.log("Attempting to authenticate user:", email);

    const result = await session.run(
      `
      MATCH (u:User {email: $email})
      RETURN u {
        .id,
        .email,
        .hashedPassword,
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
        .unreadMessages,
        .createdAt,
        .updatedAt
      }
      `,
      { email },
    );

    if (result.records.length === 0) {
      throw new Error("Invalid email or password");
    }

    const userData = result.records[0].get("u");
    const hashedPassword = userData.hashedPassword;

    if (!hashedPassword || !(await bcrypt.compare(password, hashedPassword))) {
      throw new Error("Invalid email or password");
    }

    delete userData.hashedPassword;

    const user: User = userData;
    const token = await generateToken(user);

    return { user, token };
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  } finally {
    if (session) {
      await session.close();
    }
  }
}

export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}
