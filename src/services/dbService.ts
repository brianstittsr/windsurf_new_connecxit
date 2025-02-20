import { getSession } from "@/lib/neo4j";
import { Record } from "neo4j-driver";

type QueryParams = Record<string, unknown>;

async function executeQuery(
  query: string,
  params: QueryParams,
): Promise<Record[]> {
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
