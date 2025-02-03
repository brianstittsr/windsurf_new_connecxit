'use client';

import React, { useState } from 'react';
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
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface Profile {
  name: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  completedJobs: number;
  bio: string;
  specialties: string[];
  email: string;
  phone: string;
  website: string;
  languages: string[];
  certifications: {
    name: string;
    issuer: string;
    year: string;
  }[];
  availability: {
    status: 'available' | 'busy' | 'unavailable';
    nextAvailable?: string;
  };
}

type TabType = 'overview' | 'portfolio' | 'reviews' | 'settings';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const profile: Profile = {
    name: "Michael Anderson",
    title: "Professional Photographer",
    location: "Boston, MA",
    rating: 4.9,
    reviews: 128,
    completedJobs: 245,
    bio: "Award-winning photographer with over 10 years of experience specializing in weddings, corporate events, and portrait photography. Known for capturing authentic moments and delivering exceptional quality.",
    specialties: ["Wedding Photography", "Corporate Events", "Portrait Sessions", "Product Photography"],
    email: "michael@example.com",
    phone: "(555) 123-4567",
    website: "www.mandersonphoto.com",
    languages: ["English", "Spanish"],
    certifications: [
      {
        name: "Professional Photography Certification",
        issuer: "Professional Photographers of America",
        year: "2022"
      },
      {
        name: "Adobe Certified Expert",
        issuer: "Adobe",
        year: "2021"
      }
    ],
    availability: {
      status: "available",
      nextAvailable: "Immediately"
    }
  };

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
                  src="/images/profile/avatar.jpg"
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700">
                <FontAwesomeIcon icon={faCamera} />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500" />
              </div>
              <p className="text-gray-600 mt-1">{profile.title}</p>
              <div className="flex items-center justify-center md:justify-start mt-2 space-x-4">
                <span className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                  {profile.location}
                </span>
                <span className="flex items-center text-yellow-500">
                  <FontAwesomeIcon icon={faStar} className="mr-1" />
                  {profile.rating} ({profile.reviews} reviews)
                </span>
                <span className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faBriefcase} className="mr-1" />
                  {profile.completedJobs} jobs completed
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <FontAwesomeIcon icon={faEdit} className="mr-2" />
                Edit Profile
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-8 flex space-x-8 border-b">
            {['overview', 'portfolio', 'reviews', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabType)}
                className={`pb-4 px-2 font-medium ${
                  activeTab === tab
                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="md:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">About</h2>
                <p className="text-gray-600">{profile.bio}</p>
              </div>

              {/* Specialties */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Specialties</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Certifications</h2>
                <div className="space-y-4">
                  {profile.certifications.map((cert) => (
                    <div key={cert.name} className="flex items-start">
                      <FontAwesomeIcon icon={faShield} className="text-indigo-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-medium">{cert.name}</h3>
                        <p className="text-sm text-gray-600">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 w-5 mr-3" />
                    <span className="text-gray-600">{profile.email}</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-400 w-5 mr-3" />
                    <span className="text-gray-600">{profile.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faGlobe} className="text-gray-400 w-5 mr-3" />
                    <span className="text-gray-600">{profile.website}</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Languages</h2>
                <div className="space-y-2">
                  {profile.languages.map((language) => (
                    <div key={language} className="text-gray-600">
                      {language}
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Availability</h2>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                  profile.availability.status === 'available'
                    ? 'bg-green-100 text-green-700'
                    : profile.availability.status === 'busy'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  <span className="w-2 h-2 rounded-full mr-2 bg-current"></span>
                  {profile.availability.status.charAt(0).toUpperCase() + profile.availability.status.slice(1)}
                </div>
                {profile.availability.nextAvailable && (
                  <p className="text-sm text-gray-600 mt-2">
                    Next available: {profile.availability.nextAvailable}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Other tabs content would go here */}
      </div>
    </div>
  );
}
