'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import AccountSettings from '@/components/AccountSettings';
import { useRouter } from 'next/navigation';
import { Session } from 'next-auth';
import Image from 'next/image';

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
  };
}

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  timezone: string;
  bio: string;
  location: string;
  website: string;
  company: string;
  title: string;
  skills: string[];
  interests: string[];
  image: string | null;
}

export default function ProfilePage() {
  console.log('ProfilePage - Component mounted');
  const { data: session, status, update } = useSession() as { 
    data: CustomSession | null, 
    status: string, 
    update: (data?: Record<string, unknown>) => Promise<CustomSession | null> 
  };
  const router = useRouter();

  console.log('ProfilePage - Initial session data:', {
    status,
    session: session ? {
      ...session,
      user: session.user ? {
        id: session.user.id,
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
        interests: session.user.interests,
      } : null
    } : null
  });

  const [userData, setUserData] = useState<UserData>({
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
    skills: [],
    interests: [],
    image: null
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    console.log('ProfilePage - Session/status changed:', { 
      status,
      sessionExists: !!session,
      sessionUser: session?.user ? {
        id: session.user.id,
        firstName: session.user.firstName,
        lastName: session.user.lastName,
        email: session.user.email,
      } : null
    });

    const fetchUserData = async () => {
      if (status === 'authenticated' && session?.user?.id) {
        try {
          // Fetch fresh user data from Neo4j
          const response = await fetch(`/api/users/${session.user.id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const userData = await response.json();
          console.log('ProfilePage - Fetched fresh user data:', userData);

          // Update the form with fresh data
          setUserData({
            firstName: userData.firstName || '',
            lastName: userData.lastName || '',
            email: userData.email || '',
            phone: userData.phone || '',
            timezone: userData.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
            bio: userData.bio || '',
            location: userData.location || '',
            website: userData.website || '',
            company: userData.company || '',
            title: userData.title || '',
            skills: Array.isArray(userData.skills) ? userData.skills : [],
            interests: Array.isArray(userData.interests) ? userData.interests : [],
            image: userData.image || null
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Fall back to session data if fetch fails
          const user = session.user;
          setUserData({
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            email: user.email || '',
            phone: user.phone || '',
            timezone: user.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
            bio: user.bio || '',
            location: user.location || '',
            website: user.website || '',
            company: user.company || '',
            title: user.title || '',
            skills: Array.isArray(user.skills) ? user.skills : [],
            interests: Array.isArray(user.interests) ? user.interests : [],
            image: user.image || null
          });
        }
      }
    };

    fetchUserData();
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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    if (!session?.user?.email) {
      alert('Please sign in to upload a profile picture');
      return;
    }

    const file = e.target.files[0];
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      console.log('Uploading profile picture...');
      const response = await fetch('/api/upload/profile-picture', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      const data = await response.json();
      console.log('Upload response:', data);

      if (!response.ok) {
        throw new Error(data.details || data.error || 'Upload failed');
      }

      console.log('Upload successful, updating session and state...');
      
      // Update the local state
      setUserData(prev => ({
        ...prev,
        image: data.imageUrl
      }));

      // Update the session using next-auth's update method
      await update({
        ...session,
        user: {
          ...session?.user,
          image: data.imageUrl
        }
      });

      // Force a revalidation of the data
      router.refresh();

      // Force a reload of the page to ensure all components update
      window.location.reload();

    } catch (error) {
      console.error('Error uploading profile picture:', error);
      alert(error instanceof Error ? error.message : 'Failed to upload profile picture. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  if (!session) {
    console.log('ProfilePage - No session, showing sign in message');
    return <div className="p-4">Please sign in to view your profile.</div>;
  }

  console.log('ProfilePage - Rendering with userData:', userData);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
              <p className="mt-1 text-sm text-gray-500">
                Manage your profile information and preferences.
              </p>
            </div>

            {/* Profile Picture Section */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Profile Picture
              </label>
              <div className="flex items-center space-x-6">
                <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-100">
                  {userData.image ? (
                    <Image
                      src={userData.image}
                      alt={`${userData.firstName} ${userData.lastName}'s profile picture`}
                      fill
                      sizes="96px"
                      priority
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-orange-100 text-orange-600 text-2xl font-bold">
                      {userData.firstName?.[0]?.toUpperCase() || '?'}
                    </div>
                  )}
                  {uploading && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="profile-upload"
                    className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    {uploading ? 'Uploading...' : 'Change'}
                  </label>
                  <input
                    id="profile-upload"
                    name="profile-upload"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleImageUpload}
                    disabled={uploading}
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    JPG, PNG, or GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

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
        </div>
      </div>
    </div>
  );
}
