import { authenticateUser } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    const { user, token } = await authenticateUser(email, password);

    // Set the auth token in an HTTP-only cookie
    cookies().set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    return NextResponse.json({ user });
  } catch (error) {
    console.error(
      "Login error:",
      error instanceof Error ? error.message : "Unknown error occurred",
    );

    if (error instanceof Error && error.message.includes("Invalid")) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
