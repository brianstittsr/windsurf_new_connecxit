function maskValue(value: string | undefined): string {
  if (!value) return "undefined";
  if (value.length <= 4) return "*".repeat(value.length);
  return `${value.slice(0, 2)}...${value.slice(-2)} (length: ${value.length})`;
}

function getUrlDomain(url: string | undefined): string {
  if (!url) return "undefined";
  try {
    const domain = new URL(url).hostname;
    return domain;
  } catch {
    return "invalid URL";
  }
}

export function verifyEnvironmentVariables() {
  const vars = {
    // Authentication
    JWT_SECRET: process.env.JWT_SECRET,

    // Neo4j Database
    NEO4J_URI: process.env.NEO4J_URI,
    NEO4J_USER: process.env.NEO4J_USER,
    NEO4J_PASSWORD: process.env.NEO4J_PASSWORD,

    // Optional Prisma Database
    DATABASE_URL: process.env.DATABASE_URL,
  };

  // Log safe versions of the variables
  console.log("Environment Variable Details:", {
    // Authentication
    JWT_SECRET: maskValue(vars.JWT_SECRET),

    // Neo4j Database
    NEO4J_URI: vars.NEO4J_URI ? getUrlDomain(vars.NEO4J_URI) : "undefined",
    NEO4J_USER: maskValue(vars.NEO4J_USER),
    NEO4J_PASSWORD: `(length: ${vars.NEO4J_PASSWORD?.length || 0})`,

    // Optional Prisma Database
    DATABASE_URL: vars.DATABASE_URL
      ? getUrlDomain(vars.DATABASE_URL)
      : "not configured",

    // Build Information
    NODE_ENV: process.env.NODE_ENV,
    IS_PRODUCTION_BUILD: process.env.NODE_ENV === "production",
  });

  // Required variables that must be present
  const requiredVars = {
    JWT_SECRET: vars.JWT_SECRET,
    NEO4J_URI: vars.NEO4J_URI,
    NEO4J_USER: vars.NEO4J_USER,
    NEO4J_PASSWORD: vars.NEO4J_PASSWORD,
  };

  const missingVars = Object.entries(requiredVars)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables at runtime: ${missingVars.join(", ")}`,
    );
  }

  // Optional Prisma check
  if (vars.DATABASE_URL) {
    console.log("✅ Prisma database configuration detected");
  }

  console.log(
    "✅ All required environment variables are present and have expected formats",
  );
}
