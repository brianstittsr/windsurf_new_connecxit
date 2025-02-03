import neo4j from 'neo4j-driver';

let driver;
let driverInitPromise;

async function initNeo4j() {
  if (driverInitPromise) {
    return driverInitPromise;
  }

  driverInitPromise = (async () => {
    const uri = process.env.NEO4J_URI || 'bolt://localhost:7687';
    const user = process.env.NEO4J_USER || 'neo4j';
    const password = process.env.NEO4J_PASSWORD || 'password';

    // Configuration specifically for browser environment
    const config = {
      maxConnectionPoolSize: 50,
      connectionAcquisitionTimeout: 30000,
      maxTransactionRetryTime: 30000,
      disableLosslessIntegers: true,
      useBigInt: false,
      logging: {
        level: 'info',
        logger: (level, message) => {
          console.log(`[Neo4j ${level}] ${message}`);
        }
      }
    };

    try {
      if (driver) {
        await driver.close();
      }

      driver = neo4j.driver(uri, neo4j.auth.basic(user, password), config);
      
      // Test the connection
      await driver.verifyConnectivity();
      console.log('Successfully connected to Neo4j');
      
      return driver;
    } catch (error) {
      console.error('Failed to create Neo4j driver:', error);
      driverInitPromise = null;
      throw error;
    }
  })();

  return driverInitPromise;
}

async function getDriver() {
  if (!driver) {
    await initNeo4j();
  }
  return driver;
}

async function getSession() {
  const driver = await getDriver();
  return driver.session();
}

async function closeDriver() {
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
