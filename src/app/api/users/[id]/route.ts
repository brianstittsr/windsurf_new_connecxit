import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
const { getUserById, updateUser } = require('@/services/userService');

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const user = await getUserById(params.id);
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
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (session.user.id !== params.id) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const body = await request.json();
    const updatedUser = await updateUser(params.id, body);

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Update user error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
