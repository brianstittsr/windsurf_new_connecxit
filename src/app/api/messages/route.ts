import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
const { getUserMessages, createMessage } = require('@/services/messageService');

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const messages = await getUserMessages(session.user.id);
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Get messages error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    const message = await createMessage({
      ...body,
      fromUserId: session.user.id
    });

    return NextResponse.json(message);
  } catch (error) {
    console.error('Create message error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
