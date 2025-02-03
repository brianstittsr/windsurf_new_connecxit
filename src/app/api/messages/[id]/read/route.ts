import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { markMessageAsRead } from '@/services/messageService';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { id } = await params;
    await markMessageAsRead(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mark message as read error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
