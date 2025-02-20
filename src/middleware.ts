import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

// Add paths that should be protected by authentication
const protectedPaths = [
  "/dashboard",
  "/profile",
  "/messages",
  "/connections",
  "/settings",
  // Add other protected paths here
];

// Add paths that should be accessible only to non-authenticated users
const authPaths = ["/signin", "/signup"];

// Add paths that should be excluded from authentication check
const publicPaths = ["/_next", "/static", "/api/auth", "/favicon.ico"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Skip authentication for public paths
  if (publicPaths.some((publicPath) => path.startsWith(publicPath))) {
    return NextResponse.next();
  }

  const token = request.cookies.get("token")?.value;
  let isValidToken = false;

  if (token) {
    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "default-secret-key-change-in-production"
      );
      await jose.jwtVerify(token, secret);
      isValidToken = true;
    } catch (error) {
      // Token is invalid or expired
      isValidToken = false;
    }
  }

  // Check if the path should be protected
  const isProtectedPath = protectedPaths.some((protectedPath) =>
    path.startsWith(protectedPath),
  );

  // Check if the path is for non-authenticated users
  const isAuthPath = authPaths.some((authPath) => path.startsWith(authPath));

  // If the path is protected and user is not authenticated
  if (isProtectedPath && !isValidToken) {
    const redirectUrl = new URL("/signin", request.url);
    redirectUrl.searchParams.set("callbackUrl", path);
    return NextResponse.redirect(redirectUrl);
  }

  // If the path is for non-authenticated users and user is authenticated
  if (isAuthPath && isValidToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
