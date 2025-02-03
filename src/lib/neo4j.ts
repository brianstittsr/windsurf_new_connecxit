import neo4j, { Driver } from 'neo4j-driver';

let driver: Driver;

export function getDriver() {
  if (!driver) {
    const uri = process.env.NEO4J_URI;
    const user = process.env.NEO4J_USER;
    const password = process.env.NEO4J_PASSWORD;

    if (!uri || !user || !password) {
      throw new Error('Neo4j environment variables not set');
    }

    driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
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
process.on('SIGTERM', closeDriver);
process.on('SIGINT', closeDriver);
