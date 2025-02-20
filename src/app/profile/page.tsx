'use client';

import { useState, useEffect } from 'react';
import AccountSettings from '@/components/AccountSettings';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { User } from '@/lib/auth';

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
  const { user, status, update } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    timezone: '',
    bio: '',
    location: '',
    website: '',
    company: '',
    title: '',
    skills: [],
    interests: [],
    image: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin');
    }
  }, [status, router]);

  useEffect(() => {
    if (user) {
      setUserData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
        timezone: user.timezone || '',
        bio: user.bio || '',
        location: user.location || '',
        website: user.website || '',
        company: user.company || '',
        title: user.title || '',
        skills: user.skills || [],
        interests: user.interests || [],
        image: user.image || null,
      });
    }
  }, [user]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      // Handle image upload first if there's a new image
      if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);

        const uploadResponse = await fetch('/api/upload/profile-picture', {
          method: 'POST',
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error('Failed to upload profile picture');
        }

        const { imageUrl } = await uploadResponse.json();
        userData.image = imageUrl;
      }

      // Update profile data
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      
      // Update the auth state
      await update();

      setSuccessMessage('Profile updated successfully!');
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating profile:', err);
      setError(err instanceof Error ? err.message : 'Failed to update profile');
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                <div className="mt-1 flex items-center">
                  {(previewUrl || userData.image) && (
                    <Image
                      src={previewUrl || userData.image || '/default-avatar.png'}
                      alt="Profile"
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="ml-5"
                  />
                </div>
              </div>

              <AccountSettings
                userData={userData}
                setUserData={setUserData}
                isEditing={isEditing}
              />

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image
                src={userData.image || '/default-avatar.png'}
                alt="Profile"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>

            <AccountSettings
              userData={userData}
              setUserData={setUserData}
              isEditing={isEditing}
            />
          </div>
        )}
      </div>
    </div>
  );
}
