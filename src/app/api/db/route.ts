import { NextResponse } from 'next/server';
const { getSession } = require('@/lib/neo4j');

export async function POST(req: Request) {
  let session = null;
  try {
    const { query, params } = await req.json();
    session = await getSession();

    try {
      const result = await session.run(query, params);
      return NextResponse.json({ success: true, data: result.records });
    } catch (error) {
      console.error('Database query error:', error);
      return NextResponse.json(
        { success: false, error: 'Database query failed' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, error: 'Database operation failed' },
      { status: 500 }
    );
  } finally {
    if (session) {
      await session.close();
    }
  }
}
