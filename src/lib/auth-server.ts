import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken, type User } from './auth';

export async function getServerUser(): Promise<User | null> {
  try {
    const token = cookies().get('auth_token')?.value;
    
    if (!token) {
      return null;
    }

    const decoded = verifyToken(token);
    return decoded.user;
  } catch (error) {
    return null;
  }
}

export async function requireAuth() {
  const user = await getServerUser();
  
  if (!user) {
    redirect('/signin');
  }
  
  return user;
}
