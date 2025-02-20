import { createAuthMiddleware } from "@/lib/auth-simple";
import { NextResponse } from "next/server";

const authMiddleware = createAuthMiddleware();

export async function GET(req: Request) {
  // Check authentication
  const authResponse = await authMiddleware(req);
  if (authResponse) {
    return authResponse; // Return 401 if not authenticated
  }

  // If we get here, the user is authenticated
  return NextResponse.json({
    message: "You are authenticated!",
    timestamp: new Date().toISOString(),
  });
}
