import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getUserById, updateUser } from '@/services/userService';
import { Session } from 'next-auth';

interface CustomSession extends Session {
  user: {
    id: string;
    role: string;
    email?: string | null;
    name?: string | null;
    image?: string | null;
  };
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions) as CustomSession | null;
    if (!session || !session.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { id } = await params;
    const user = await getUserById(id);
    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Get user error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions) as CustomSession | null;
    if (!session || !session.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { id } = await params;
    if (session.user.id !== id) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const body = await request.json();
    const updatedUser = await updateUser(id, body);

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Update user error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
