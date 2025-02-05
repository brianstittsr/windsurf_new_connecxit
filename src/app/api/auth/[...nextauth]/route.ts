import NextAuth from "next-auth";
import { authOptions } from './auth.config';

// Initialize NextAuth handler
const handler = NextAuth(authOptions);

// Handle GET and POST requests
export const GET = handler;
export const POST = handler;
