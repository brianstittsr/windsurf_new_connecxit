import { NextRequest } from 'next/server';
import { authenticate } from '@/lib/auth.config';
import { logger } from '@/utils/logger';
import { verifyEnvironmentVariables } from '@/utils/verifyEnv';

// Verify environment variables before handling requests
verifyEnvironmentVariables();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email and password are required' }),
        { status: 400 }
      );
    }

    const result = await authenticate(email, password);
    if (!result) {
      return new Response(
        JSON.stringify({ error: 'Invalid credentials' }),
        { status: 401 }
      );
    }

    const { user, token } = result;
    return new Response(
      JSON.stringify({ user, token }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    logger.error('Authentication error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500 }
    );
  }
}
