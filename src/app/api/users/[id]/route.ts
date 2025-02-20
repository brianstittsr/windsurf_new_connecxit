import { getServerUser } from '@/lib/auth-server';
import { getSession } from '@/lib/neo4j';


export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getServerUser();
    
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Not authenticated' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    let session = null;
    try {
      session = await getSession();
      const result = await session.run(
        `
        MATCH (u:User {id: $userId})
        RETURN u {
          .id,
          .firstName,
          .lastName,
          .email,
          .phone,
          .timezone,
          .role,
          .image,
          .bio,
          .location,
          .website,
          .company,
          .title,
          .skills,
          .interests,
          .createdAt,
          .updatedAt,
          connections: size((u)-[:CONNECTED]-()),
          isConnected: exists((u)-[:CONNECTED]-(:User {id: $currentUserId}))
        } as user
        `,
        {
          userId: params.id,
          currentUserId: user.id
        }
      );

      const targetUser = result.records[0]?.get('user');

      if (!targetUser) {
        return new Response(
          JSON.stringify({ error: 'User not found' }),
          { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
      }

      return new Response(JSON.stringify(targetUser), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } finally {
      if (session) {
        await session.close();
      }
    }
  } catch (error) {
    console.error('User fetch error:', error instanceof Error ? error.message : 'Unknown error occurred');
    return new Response(
      JSON.stringify({ error: 'Failed to fetch user' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getServerUser();
    
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Not authenticated' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (user.id !== params.id) {
      return new Response(
        JSON.stringify({ error: 'Not authorized to update this user' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const updates = await req.json();
    let session = null;

    try {
      session = await getSession();
      const result = await session.run(
        `
        MATCH (u:User {id: $userId})
        SET u += $updates
        RETURN u {
          .id,
          .firstName,
          .lastName,
          .email,
          .phone,
          .timezone,
          .role,
          .image,
          .bio,
          .location,
          .website,
          .company,
          .title,
          .skills,
          .interests,
          .createdAt,
          .updatedAt
        } as user
        `,
        {
          userId: params.id,
          updates: {
            ...updates,
            updatedAt: new Date().toISOString()
          }
        }
      );

      const updatedUser = result.records[0]?.get('user');

      if (!updatedUser) {
        return new Response(
          JSON.stringify({ error: 'User not found' }),
          { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
      }

      return new Response(JSON.stringify(updatedUser), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } finally {
      if (session) {
        await session.close();
      }
    }
  } catch (error) {
    console.error('User update error:', error instanceof Error ? error.message : 'Unknown error occurred');
    return new Response(
      JSON.stringify({ error: 'Failed to update user' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
