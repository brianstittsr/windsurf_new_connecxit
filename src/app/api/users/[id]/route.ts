import { getServerUser } from '@/lib/auth-server';
import { getSession } from '@/lib/neo4j';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getServerUser();
    
    if (!user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
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
        return NextResponse.json(
          { error: 'User not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(targetUser);
    } finally {
      if (session) {
        await session.close();
      }
    }
  } catch (error) {
    console.error('User fetch error:', error instanceof Error ? error.message : 'Unknown error occurred');
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
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
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getServerUser();
    
    if (!user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    if (user.id !== params.id) {
      return NextResponse.json(
        { error: 'Not authorized to update this user' },
        { status: 403 }
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
        return NextResponse.json(
          { error: 'User not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(updatedUser);
    } finally {
      if (session) {
        await session.close();
      }
    }
  } catch (error) {
    console.error('User update error:', error instanceof Error ? error.message : 'Unknown error occurred');
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}
