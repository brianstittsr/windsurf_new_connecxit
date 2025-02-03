import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getUserMessages, createMessage } from '@/services/messageService';
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

export async function GET() {
  try {
    const session = await getServerSession(authOptions) as CustomSession | null;
    if (!session || !session.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const messages = await getUserMessages(session.user.id);
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Get messages error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions) as CustomSession | null;
    if (!session || !session.user) {
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
