import neo4j, { Driver, Session, SessionConfig } from 'neo4j-driver';

let driver: Driver | null = null;
let driverInitPromise: Promise<Driver> | null = null;

async function initNeo4j(): Promise<Driver> {
  if (driverInitPromise) {
    return driverInitPromise;
  }

  driverInitPromise = (async () => {
    const uri = process.env.NEO4J_URI || 'bolt://localhost:7687';
    const user = process.env.NEO4J_USER || 'neo4j';
    const password = process.env.NEO4J_PASSWORD || 'password';
    const database = process.env.NEO4J_DATABASE || 'neo4j';

    // Configuration specifically for AuraDB
    const config = {
      maxConnectionPoolSize: 50,
      connectionAcquisitionTimeout: 30000,
      maxTransactionRetryTime: 30000,
      disableLosslessIntegers: true,
      useBigInt: false,
      database: database, // Specify default database
      logging: {
        level: 'info',
        logger: (level: string, message: string) => {
          console.log(`[Neo4j ${level}] ${message}`);
        }
      }
    };

    try {
      if (driver) {
        await driver.close();
      }

      driver = neo4j.driver(uri, neo4j.auth.basic(user, password), config);
      
      // Test the connection with the specified database
      await driver.verifyConnectivity({ database });
      console.log('Successfully connected to Neo4j database:', database);
      
      return driver;
    } catch (error) {
      console.error('Failed to create Neo4j driver:', error);
      driverInitPromise = null;
      throw error;
    }
  })();

  return driverInitPromise;
}

async function getDriver(): Promise<Driver> {
  if (!driver) {
    await initNeo4j();
  }
  return driver!;
}

async function getSession(config?: SessionConfig): Promise<Session> {
  const driver = await getDriver();
  const database = process.env.NEO4J_DATABASE || 'neo4j';
  return driver.session({
    database,
    ...config
  });
}

async function closeDriver(): Promise<void> {
  if (driver) {
    try {
      await driver.close();
      driver = null;
      driverInitPromise = null;
      console.log('Neo4j driver closed successfully');
    } catch (error) {
      console.error('Error closing Neo4j driver:', error);
    }
  }
}

// Cleanup on process termination
process.on('SIGTERM', closeDriver);
process.on('SIGINT', closeDriver);

export {
  getDriver,
  getSession,
  closeDriver
};
