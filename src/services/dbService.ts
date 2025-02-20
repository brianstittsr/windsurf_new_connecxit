import { getSession } from "@/lib/neo4j";
import type { Record as Neo4jRecord } from "neo4j-driver";

interface QueryParams {
  [key: string]: unknown;
}

async function executeQuery(
  query: string,
  params: QueryParams,
): Promise<Neo4jRecord[]> {
  let session = null;
  try {
    session = await getSession();
    const result = await session.run(query, params);
    return result.records;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  } finally {
    if (session) {
      await session.close();
    }
  }
}

export { executeQuery, type QueryParams };
