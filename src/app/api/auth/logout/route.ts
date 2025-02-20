import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  // Clear the token cookie
  cookies().set("token", "", {
    expires: new Date(0),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return NextResponse.json({ message: "Logged out successfully" });
}
