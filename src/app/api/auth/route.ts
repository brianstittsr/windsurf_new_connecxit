import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getSession } from "@/lib/neo4j";
import { generateToken } from "@/lib/auth";
import type { User } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Please provide both email and password" },
      { status: 400 }
    );
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

    const user = result.records[0]?.get("user");

    if (!user) {
      console.error("User not found:", email);
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    if (!user.hashedPassword) {
      console.error("Invalid account configuration for user:", email);
      return NextResponse.json(
        { error: "Invalid account configuration" },
        { status: 401 }
      );
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      user.hashedPassword
    );

    if (!isCorrectPassword) {
      console.error("Invalid password for user:", email);
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    console.log("Successfully authenticated user:", email);

    // Remove sensitive data before returning
    const userWithoutPassword = { ...user };
    delete userWithoutPassword.hashedPassword;

    // Generate JWT token
    const token = await generateToken(userWithoutPassword as User);

    // Set the token in an HTTP-only cookie
    const response = NextResponse.json(
      { user: userWithoutPassword },
      { status: 200 }
    );
    
    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60, // 24 hours
    });

    return response;
  } catch (error) {
    console.error(
      "Authentication error:",
      error instanceof Error ? error.message : "Unknown error occurred"
    );
    return NextResponse.json(
      { error: "An error occurred during authentication" },
      { status: 500 }
    );
  } finally {
    if (session) {
      await session.close();
    }
  }
}

export async function PUT(request: NextRequest) {
  const { email, currentPassword, newPassword } = await request.json();

  if (!email || !currentPassword || !newPassword) {
    return NextResponse.json(
      { error: "Please provide email, current password, and new password" },
      { status: 400 }
    );
  }

  let session = null;
  try {
    session = await getSession();

    // First verify the current password
    const result = await session.run(
      `
      MATCH (u:User {email: $email})
      RETURN u.hashedPassword as hashedPassword
      `,
      { email }
    );

    const hashedPassword = result.records[0]?.get("hashedPassword");

    if (!hashedPassword) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const isCorrectPassword = await bcrypt.compare(
      currentPassword,
      hashedPassword
    );

    if (!isCorrectPassword) {
      return NextResponse.json(
        { error: "Current password is incorrect" },
        { status: 401 }
      );
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const newHashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the password in the database
    await session.run(
      `
      MATCH (u:User {email: $email})
      SET u.hashedPassword = $hashedPassword,
          u.updatedAt = datetime()
      `,
      { email, hashedPassword: newHashedPassword }
    );

    return NextResponse.json(
      { message: "Password updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Password update error:",
      error instanceof Error ? error.message : "Unknown error occurred"
    );
    return NextResponse.json(
      { error: "An error occurred while updating the password" },
      { status: 500 }
    );
  } finally {
    if (session) {
      await session.close();
    }
  }
}
