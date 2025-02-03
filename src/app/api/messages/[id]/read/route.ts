import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth/[...nextauth]/route';
const { markMessageAsRead } = require('@/services/messageService');

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    await markMessageAsRead(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mark message as read error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
