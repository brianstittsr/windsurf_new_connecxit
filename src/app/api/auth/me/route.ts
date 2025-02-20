import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { logger } from '@/utils/logger';

export async function GET() {
  try {
    const token = cookies().get('auth_token')?.value;

    if (!token) {
      return new Response(
        JSON.stringify({ error: 'Not authenticated' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const decoded = verifyToken(token);

    return new Response(
      JSON.stringify({ user: decoded.user }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    logger.error('Auth check error:', error);
    return new Response(
      JSON.stringify({ error: 'Not authenticated' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
