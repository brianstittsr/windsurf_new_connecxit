'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faStar,
  faMapMarkerAlt,
  faBriefcase,
  faEnvelope,
  faPhone,
  faGlobe,
  faCheckCircle,
  faEdit,
  faShield,
  faSave,
  faTimes,
  faMessage
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface Profile {
  id: string;
  name: string;
  title: string;
  location: string;
  bio: string;
  email: string;
  phone: string;
  website: string;
  company: string;
  image: string;
  skills: string[];
  interests: string[];
  unreadMessages: number;
}

type TabType = 'overview' | 'portfolio' | 'reviews' | 'messages' | 'settings';

const { updateUser } = require('@/services/userService');
const { getUnreadMessageCount } = require('@/services/messageService');

export default function ProfilePage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<Profile | null>(null);
  const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {
    if (session?.user) {
      // Fetch user profile
      fetch(`/api/users/${session.user.id}`)
        .then(res => res.json())
        .then(data => {
          setProfile(data);
          setEditedProfile(data);
        });

      // Fetch unread message count
      getUnreadMessageCount(session.user.id)
        .then(count => setUnreadMessages(count));
    }
  }, [session]);

  const handleSave = async () => {
    if (!editedProfile || !session?.user?.id) return;

    try {
      const updatedProfile = await updateUser(session.user.id, editedProfile);
      setProfile(updatedProfile);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden relative">
                <Image
                  src={profile.image || '/images/profile/avatar.jpg'}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700">
                  <FontAwesomeIcon icon={faCamera} />
                </button>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-between items-center">
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedProfile?.name}
                      onChange={e => setEditedProfile({ ...editedProfile!, name: e.target.value })}
                      className="text-2xl font-bold border rounded px-2 py-1"
                    />
                  ) : (
                    <h1 className="text-2xl font-bold">{profile.name}</h1>
                  )}
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedProfile?.title}
                      onChange={e => setEditedProfile({ ...editedProfile!, title: e.target.value })}
                      className="text-gray-600 border rounded px-2 py-1 mt-1"
                    />
                  ) : (
                    <p className="text-gray-600">{profile.title}</p>
                  )}
                </div>
                <div>
                  {isEditing ? (
                    <div className="space-x-2">
                      <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      >
                        <FontAwesomeIcon icon={faSave} className="mr-2" />
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setIsEditing(false);
                          setEditedProfile(profile);
                        }}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                      >
                        <FontAwesomeIcon icon={faTimes} className="mr-2" />
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                    >
                      <FontAwesomeIcon icon={faEdit} className="mr-2" />
                      Edit Profile
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`${
                  activeTab === 'overview'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`${
                  activeTab === 'portfolio'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Portfolio
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`${
                  activeTab === 'reviews'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Reviews
              </button>
              <Link
                href="/messages"
                className={`${
                  activeTab === 'messages'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                <FontAwesomeIcon icon={faMessage} className="mr-2" />
                Messages
                {unreadMessages > 0 && (
                  <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    {unreadMessages}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setActiveTab('settings')}
                className={`${
                  activeTab === 'settings'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Settings
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            {isEditing ? (
              <textarea
                value={editedProfile?.bio}
                onChange={e => setEditedProfile({ ...editedProfile!, bio: e.target.value })}
                className="w-full h-32 border rounded p-2"
              />
            ) : (
              <p className="text-gray-600">{profile.bio}</p>
            )}

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 w-5 h-5 mr-2" />
                    {isEditing ? (
                      <input
                        type="email"
                        value={editedProfile?.email}
                        onChange={e => setEditedProfile({ ...editedProfile!, email: e.target.value })}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      <span>{profile.email}</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-400 w-5 h-5 mr-2" />
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editedProfile?.phone}
                        onChange={e => setEditedProfile({ ...editedProfile!, phone: e.target.value })}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      <span>{profile.phone}</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faGlobe} className="text-gray-400 w-5 h-5 mr-2" />
                    {isEditing ? (
                      <input
                        type="url"
                        value={editedProfile?.website}
                        onChange={e => setEditedProfile({ ...editedProfile!, website: e.target.value })}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      <span>{profile.website}</span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Skills</h3>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile?.skills.join(', ')}
                    onChange={e => setEditedProfile({ ...editedProfile!, skills: e.target.value.split(',').map(s => s.trim()) })}
                    className="w-full border rounded px-2 py-1"
                    placeholder="Enter skills separated by commas"
                  />
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
