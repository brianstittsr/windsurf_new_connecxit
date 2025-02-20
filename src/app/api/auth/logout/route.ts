import { cookies } from 'next/headers';

export async function POST() {
  cookies().delete('auth_token');
  
  return new Response(JSON.stringify({ message: 'Logged out successfully' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
