import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth.config';
import { getUserById, updateUser } from '@/services/userService';
import { Session } from 'next-auth';

interface CustomSession extends Session {
  user: {
    id: string;
    role: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    timezone?: string | null;
    name?: string | null;
    image?: string | null;
    bio?: string | null;
    location?: string | null;
    website?: string | null;
    company?: string | null;
    title?: string | null;
    skills?: string[];
    interests?: string[];
    emailVerified?: Date | null;
    createdAt?: string;
    updatedAt?: string;
  };
}

interface UpdateUserBody {
  firstName?: string;
  lastName?: string;
  email?: string;
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

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    console.log('GET /api/users/[id] - Start');
    const session = await getServerSession(authOptions) as CustomSession | null;
    console.log('Session:', session);
    
    if (!session || !session.user) {
      console.log('GET /api/users/[id] - Unauthorized');
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { id } = await params;
    console.log('Getting user by ID:', id);
    
    const user = await getUserById(id);
    console.log('User data from DB:', user);
    
    if (!user) {
      console.log('GET /api/users/[id] - User not found');
      return new NextResponse('User not found', { status: 404 });
    }

    console.log('GET /api/users/[id] - Success');
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
    console.log('PATCH /api/users/[id] - Start');
    const session = await getServerSession(authOptions) as CustomSession | null;
    console.log('Session:', session);
    
    if (!session || !session.user) {
      console.log('PATCH /api/users/[id] - Unauthorized');
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { id } = await params;
    console.log('Updating user ID:', id);
    
    if (session.user.id !== id) {
      console.log('PATCH /api/users/[id] - Forbidden');
      return new NextResponse('Forbidden', { status: 403 });
    }

    const body = await request.json() as UpdateUserBody;
    console.log('Update body:', body);
    
    const user = await getUserById(id);
    console.log('Current user data:', user);
    
    if (!user) {
      console.log('PATCH /api/users/[id] - User not found');
      return new NextResponse('User not found', { status: 404 });
    }

    const updatedUser = await updateUser(id, body);
    console.log('Updated user data:', updatedUser);
    
    console.log('PATCH /api/users/[id] - Success');
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Update user error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
