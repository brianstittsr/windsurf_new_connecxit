const { getSession } = require('@/lib/neo4j');

async function executeQuery(query: string, params: any) {
  let session = null;
  try {
    session = await getSession();
    const result = await session.run(query, params);
    return result.records;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  } finally {
    if (session) {
      await session.close();
    }
  }
}

module.exports = {
  executeQuery
};
