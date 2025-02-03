import { NextResponse } from 'next/server';
import { getDriver } from '@/lib/neo4j';

export async function POST(req: Request) {
  try {
    const { query, params } = await req.json();
    const driver = getDriver();
    const session = driver.session();

    try {
      const result = await session.run(query, params);
      return NextResponse.json({ success: true, data: result.records });
    } finally {
      await session.close();
    }
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, error: 'Database operation failed' },
      { status: 500 }
    );
  }
}
