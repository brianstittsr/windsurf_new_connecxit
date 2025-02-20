import neo4j, { Driver } from "neo4j-driver";

let driver: Driver;

export function getDriver() {
  if (!driver) {
    const uri = process.env.NEO4J_URI;
    const user = process.env.NEO4J_USER;
    const password = process.env.NEO4J_PASSWORD;

    console.log("Neo4j Connection Attempt:", {
      hasUri: !!uri,
      hasUser: !!user,
      hasPassword: !!password,
      nodeEnv: process.env.NODE_ENV,
    });

    if (!uri || !user || !password) {
      const missingVars = [
        !uri && "NEO4J_URI",
        !user && "NEO4J_USER",
        !password && "NEO4J_PASSWORD",
      ].filter(Boolean);
      throw new Error(
        `Neo4j environment variables not set: ${missingVars.join(", ")}`,
      );
    }

    try {
      driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
      console.log("Neo4j driver created successfully");
    } catch (error) {
      console.error("Failed to create Neo4j driver:", error);
      throw error;
    }
  }
  return driver;
}

export function getSession() {
  const driver = getDriver();
  return driver.session();
}

export async function closeDriver() {
  if (driver) {
    await driver.close();
  }
}

// Cleanup on process termination
process.on("SIGTERM", closeDriver);
process.on("SIGINT", closeDriver);
