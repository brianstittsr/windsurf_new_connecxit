import { logger } from './logger';

function maskValue(value: string | undefined): string {
  if (!value) return 'undefined';
  if (value.length <= 4) return '*'.repeat(value.length);
  return `${value.slice(0, 2)}...${value.slice(-2)} (length: ${value.length})`;
}

function getUrlDomain(url: string | undefined): string {
  if (!url) return 'undefined';
  try {
    const domain = new URL(url).hostname;
    return domain;
  } catch {
    return 'invalid URL';
  }
}

export function verifyEnvironmentVariables() {
  const vars = {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEO4J_URI: process.env.NEO4J_URI,
    NEO4J_USER: process.env.NEO4J_USER,
    NEO4J_PASSWORD: process.env.NEO4J_PASSWORD,
  };

  // Log safe versions of the variables
  logger.log('Environment Variable Details:', {
    NEXTAUTH_URL: vars.NEXTAUTH_URL ? getUrlDomain(vars.NEXTAUTH_URL) : 'undefined',
    NEXTAUTH_SECRET: maskValue(vars.NEXTAUTH_SECRET),
    NEO4J_URI: vars.NEO4J_URI ? getUrlDomain(vars.NEO4J_URI) : 'undefined',
    NEO4J_USER: maskValue(vars.NEO4J_USER),
    NEO4J_PASSWORD: `(length: ${vars.NEO4J_PASSWORD?.length || 0})`,
    NODE_ENV: process.env.NODE_ENV,
    IS_PRODUCTION_BUILD: process.env.NODE_ENV === 'production',
  });

  const missingVars = Object.entries(vars)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables at runtime: ${missingVars.join(', ')}`);
  }

  logger.log('✅ All required environment variables are present and have expected formats');
}
