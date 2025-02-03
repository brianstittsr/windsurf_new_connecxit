import { getSession } from '@/lib/neo4j';
import { Record, SessionConfig } from 'neo4j-driver';

interface QueryParams {
  [key: string]: unknown;
}

async function executeQuery(
  query: string,
  params: QueryParams,
  sessionConfig?: SessionConfig
): Promise<Record[]> {
  let session = null;
  try {
    session = await getSession(sessionConfig);
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

export {
  executeQuery,
  type QueryParams
};
