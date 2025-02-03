'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import AccountSettings from '@/components/AccountSettings';
import { useRouter } from 'next/navigation';
import { Session } from 'next-auth';

interface CustomSession extends Session {
  user: {
    id: string;
    role: string;
    firstName: string;
    lastName: string;
    email?: string | null;
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
  } & {
    [key: string]: string | string[] | null | undefined;
  };
}

export default function ProfilePage() {
  console.log('ProfilePage - Component mounted');
  const { data: session, status } = useSession() as { data: CustomSession | null, status: string };
  const router = useRouter();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    bio: '',
    location: '',
    website: '',
    company: '',
    title: '',
    skills: [] as string[],
    interests: [] as string[]
  });

  useEffect(() => {
    console.log('ProfilePage - Session/status changed:', { 
      status,
      sessionExists: !!session,
      sessionUser: session?.user,
      sessionKeys: session?.user ? Object.keys(session.user) : []
    });

    if (session?.user) {
      console.log('ProfilePage - Setting user data from session:', {
        firstName: session.user.firstName,
        lastName: session.user.lastName,
        email: session.user.email,
        phone: session.user.phone,
        timezone: session.user.timezone,
        bio: session.user.bio,
        location: session.user.location,
        website: session.user.website,
        company: session.user.company,
        title: session.user.title,
        skills: session.user.skills,
        interests: session.user.interests
      });

      setUserData({
        firstName: session.user.firstName || '',
        lastName: session.user.lastName || '',
        email: session.user.email || '',
        phone: session.user.phone || '',
        timezone: session.user.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
        bio: session.user.bio || '',
        location: session.user.location || '',
        website: session.user.website || '',
        company: session.user.company || '',
        title: session.user.title || '',
        skills: Array.isArray(session.user.skills) ? session.user.skills : [],
        interests: Array.isArray(session.user.interests) ? session.user.interests : []
      });
    }
  }, [session, status]);

  const handleSave = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    timezone: string;
    bio?: string;
    location?: string;
    website?: string;
    company?: string;
    title?: string;
    skills?: string[];
    interests?: string[];
  }) => {
    if (session?.user?.id) {
      try {
        console.log('ProfilePage - Saving user data:', data);
        const response = await fetch(`/api/users/${session.user.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log('ProfilePage - User data saved successfully');
          router.refresh();
        } else {
          console.error('ProfilePage - Failed to save user data:', await response.text());
        }
      } catch (error) {
        console.error('ProfilePage - Error updating user data:', error);
      }
    }
  };

  const handleCancel = () => {
    router.refresh();
  };

  if (!session) {
    console.log('ProfilePage - No session, showing sign in message');
    return <div className="p-4">Please sign in to view your profile.</div>;
  }

  console.log('ProfilePage - Rendering with userData:', userData);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <AccountSettings
        firstName={userData.firstName}
        lastName={userData.lastName}
        email={userData.email}
        phone={userData.phone}
        timezone={userData.timezone}
        bio={userData.bio}
        location={userData.location}
        website={userData.website}
        company={userData.company}
        title={userData.title}
        skills={userData.skills}
        interests={userData.interests}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
}
