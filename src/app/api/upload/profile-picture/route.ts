import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/auth.config';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { updateUser } from '@/services/userService';

interface CustomSession {
  user: {
    id?: string;
    email?: string;
    name?: string;
    image?: string;
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('Starting profile picture upload...');
    
    const session = await getServerSession(authOptions) as CustomSession | null;
    console.log('Session:', JSON.stringify(session, null, 2));
    
    if (!session?.user?.email) {
      console.log('No valid session found');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('Session found for user:', session.user.email);

    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      console.log('No file found in request');
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    console.log('File received:', {
      type: file.type,
      size: file.size,
      name: file.name
    });

    // Validate file type
    if (!file.type.startsWith('image/')) {
      console.log('Invalid file type:', file.type);
      return NextResponse.json({ error: 'File must be an image' }, { status: 400 });
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      console.log('File too large:', file.size);
      return NextResponse.json({ error: 'File size must be less than 10MB' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename using email instead of ID since we might not have an ID
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    const filename = `${session.user.email?.replace(/[^a-zA-Z0-9]/g, '_')}-${uniqueSuffix}${path.extname(file.name)}`;
    
    // Ensure the uploads directory exists
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'profile-pictures');
    console.log('Upload directory:', uploadDir);

    try {
      await mkdir(uploadDir, { recursive: true });
      console.log('Upload directory created/verified');
    } catch (error) {
      console.error('Error creating upload directory:', error);
      // Continue if directory exists
    }

    const filePath = path.join(uploadDir, filename);
    console.log('Writing file to:', filePath);

    await writeFile(filePath, buffer);
    console.log('File written successfully');

    // Return the URL for the uploaded image
    const imageUrl = `/uploads/profile-pictures/${filename}`;
    console.log('Image URL:', imageUrl);

    // Update user profile with new image URL
    if (session.user.id) {
      try {
        await updateUser(session.user.id, { image: imageUrl });
        console.log('User profile updated with new image URL');
      } catch (error) {
        console.error('Error updating user profile:', error);
        return NextResponse.json({ 
          error: 'Error updating user profile',
          details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
      }
    }

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    // Return more detailed error information
    return NextResponse.json({ 
      error: 'Error uploading file',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
