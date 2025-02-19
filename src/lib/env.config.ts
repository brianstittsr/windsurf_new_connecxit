import { z } from 'zod';

const envSchema = z.object({
  // JWT Configuration
  JWT_SECRET: z.string().min(32),
  
  // Neo4j Configuration
  NEO4J_URI: z.string().url(),
  NEO4J_USER: z.string(),
  NEO4J_PASSWORD: z.string(),
  
  // Application Configuration
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NEXT_PUBLIC_API_URL: z.string().url().optional(),
});

export type EnvConfig = z.infer<typeof envSchema>;

function validateEnv(): EnvConfig {
  try {
    const env = envSchema.parse({
      JWT_SECRET: process.env.JWT_SECRET,
      NEO4J_URI: process.env.NEO4J_URI,
      NEO4J_USER: process.env.NEO4J_USER,
      NEO4J_PASSWORD: process.env.NEO4J_PASSWORD,
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    });
    return env;
  } catch (error) {
    console.error('❌ Invalid environment variables:', error);
    throw new Error('Invalid environment variables');
  }
}

export const env = validateEnv();
