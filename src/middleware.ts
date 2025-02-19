import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add paths that should be protected by authentication
const protectedPaths = [
  '/dashboard',
  '/profile',
  // Add other protected paths here
];

// Add paths that should be accessible only to non-authenticated users
const authPaths = [
  '/signin',
  '/signup',
];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const path = request.nextUrl.pathname;

  // Check if the path should be protected
  const isProtectedPath = protectedPaths.some(protectedPath => 
    path.startsWith(protectedPath)
  );

  // Check if the path is for non-authenticated users
  const isAuthPath = authPaths.some(authPath => 
    path.startsWith(authPath)
  );

  // If the path is protected and user is not authenticated
  if (isProtectedPath && !token) {
    const redirectUrl = new URL('/signin', request.url);
    redirectUrl.searchParams.set('callbackUrl', path);
    return NextResponse.redirect(redirectUrl);
  }

  // If the path is for non-authenticated users and user is authenticated
  if (isAuthPath && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
