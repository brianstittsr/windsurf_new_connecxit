import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getSession } from "@/lib/neo4j";
import type { User } from "@/lib/auth";

// WARNING: This is a test endpoint and should be removed in production
export async function POST(request: NextRequest) {
  const { email, password, firstName, lastName } = await request.json();

  if (!email || !password || !firstName || !lastName) {
    return NextResponse.json(
      { error: "Please provide all required fields" },
      { status: 400 },
    );
  }

  let session = null;
  try {
    session = await getSession();

    // Check if user already exists
    const existingUser = await session.run(
      `
      MATCH (u:User {email: $email})
      RETURN u
      `,
      { email },
    );

    if (existingUser.records.length > 0) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const result = await session.run(
      `
      CREATE (u:User {
        id: randomUUID(),
        email: $email,
        firstName: $firstName,
        lastName: $lastName,
        hashedPassword: $hashedPassword,
        role: "user",
        createdAt: datetime(),
        updatedAt: datetime()
      })
      RETURN u {
        .id,
        .email,
        .firstName,
        .lastName,
        .role,
        .createdAt,
        .updatedAt
      } as user
      `,
      {
        email,
        firstName,
        lastName,
        hashedPassword,
      },
    );

    const user = result.records[0]?.get("user") as User;

    return NextResponse.json(
      { message: "Test user created successfully", user },
      { status: 201 },
    );
  } catch (error) {
    console.error("Test user creation error:", error);
    return NextResponse.json(
      { error: "An error occurred while creating test user" },
      { status: 500 },
    );
  } finally {
    if (session) {
      await session.close();
    }
  }
}

// WARNING: This is a test endpoint and should be removed in production
export async function DELETE(request: NextRequest) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json(
      { error: "Please provide email" },
      { status: 400 },
    );
  }

  let session = null;
  try {
    session = await getSession();

    await session.run(
      `
      MATCH (u:User {email: $email})
      DELETE u
      `,
      { email },
    );

    return NextResponse.json(
      { message: "Test user deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Test user deletion error:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting test user" },
      { status: 500 },
    );
  } finally {
    if (session) {
      await session.close();
    }
  }
}
