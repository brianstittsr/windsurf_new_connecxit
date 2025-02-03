const neo4j = require('neo4j-driver');

let driver;

function initNeo4j() {
  const uri = process.env.NEO4J_URI || 'bolt://localhost:7687';
  const user = process.env.NEO4J_USER || 'neo4j';
  const password = process.env.NEO4J_PASSWORD || 'password';

  // Configuration specifically for browser environment
  const config = {
    maxConnectionPoolSize: 100,
    connectionAcquisitionTimeout: 60000,
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
    driver = neo4j.driver(uri, neo4j.auth.basic(user, password), config);
    
    // Test the connection
    driver.verifyConnectivity()
      .then(() => console.log('Successfully connected to Neo4j'))
      .catch(error => {
        console.error('Neo4j connection error:', error);
        throw error;
      });

    return driver;
  } catch (error) {
    console.error('Failed to create Neo4j driver:', error);
    throw error;
  }
}

function getDriver() {
  if (!driver) {
    return initNeo4j();
  }
  return driver;
}

async function closeDriver() {
  if (driver) {
    try {
      await driver.close();
      driver = null;
      console.log('Neo4j connection closed');
    } catch (error) {
      console.error('Error closing Neo4j connection:', error);
      throw error;
    }
  }
}

// Cleanup on process termination
process.on('SIGTERM', closeDriver);
process.on('SIGINT', closeDriver);

module.exports = {
  initNeo4j,
  getDriver,
  closeDriver
};
