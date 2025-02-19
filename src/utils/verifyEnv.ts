import { logger } from './logger';

export function verifyEnvironmentVariables() {
  const requiredVars = {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEO4J_URI: process.env.NEO4J_URI,
    NEO4J_USER: process.env.NEO4J_USER,
    NEO4J_PASSWORD: process.env.NEO4J_PASSWORD,
  };

  logger.log('Verifying environment variables at runtime:', {
    NEXTAUTH_URL: !!process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET,
    NEO4J_URI: !!process.env.NEO4J_URI,
    NEO4J_USER: !!process.env.NEO4J_USER,
    NEO4J_PASSWORD: !!process.env.NEO4J_PASSWORD,
  });

  const missingVars = Object.entries(requiredVars)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables at runtime: ${missingVars.join(', ')}`);
  }

  logger.log('All required environment variables are present');
}
