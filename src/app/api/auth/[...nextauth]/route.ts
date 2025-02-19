import NextAuth from "next-auth";
import { authOptions } from './auth.config';
import { logger } from '@/utils/logger';
import { verifyEnvironmentVariables } from '@/utils/verifyEnv';

// Verify environment variables before initializing NextAuth
verifyEnvironmentVariables();

logger.log('Initializing NextAuth handler with options:', {
  providers: authOptions.providers.map(p => p.id),
  hasSecret: !!authOptions.secret,
  sessionStrategy: authOptions.session?.strategy,
  hasCallbacks: !!authOptions.callbacks
});

// Initialize NextAuth handler
const handler = NextAuth(authOptions);

export const GET = async (req: Request) => {
  try {
    return await handler(req);
  } catch (error) {
    logger.error('NextAuth GET Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal authentication error' }),
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  try {
    return await handler(req);
  } catch (error) {
    logger.error('NextAuth POST Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal authentication error' }),
      { status: 500 }
    );
  }
};
