import { getServerUser } from '@/lib/auth-server';
import { getSession } from '@/lib/neo4j';


export async function GET(
  request: Request,
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

interface UserUpdates {
  firstName?: string;
  lastName?: string;
  phone?: string;
  timezone?: string;
  bio?: string;
  location?: string;
  website?: string;
  company?: string;
  title?: string;
  skills?: string[];
  interests?: string[];
}

export async function PUT(
  request: Request,
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

    const body = await request.json();
    
    // Only allow specific fields to be updated
    const updates: UserUpdates = {
      ...(body.firstName !== undefined && { firstName: body.firstName }),
      ...(body.lastName !== undefined && { lastName: body.lastName }),
      ...(body.phone !== undefined && { phone: body.phone }),
      ...(body.timezone !== undefined && { timezone: body.timezone }),
      ...(body.bio !== undefined && { bio: body.bio }),
      ...(body.location !== undefined && { location: body.location }),
      ...(body.website !== undefined && { website: body.website }),
      ...(body.company !== undefined && { company: body.company }),
      ...(body.title !== undefined && { title: body.title }),
      ...(Array.isArray(body.skills) && { skills: body.skills }),
      ...(Array.isArray(body.interests) && { interests: body.interests })
    };
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
