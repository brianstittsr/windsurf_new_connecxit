'use client';

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faCheck,
  faClock,
  faUsers,
  faCrown,
  faGlobe,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';
import VendorActions from '@/components/VendorActions';

export default function LuxeCelebrationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1920&auto=format&fit=crop"
          alt="Luxe Celebrations"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">Luxe Celebrations</h1>
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 w-5 h-5 mr-1" />
                <span className="font-medium">5.0</span>
                <span className="ml-1 text-gray-300">(28 reviews)</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-green-400 w-5 h-5 mr-1" />
                <span>85 luxury weddings</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 mb-6">
                Luxe Celebrations is the premier choice for couples seeking an extraordinary 
                wedding experience. We specialize in luxury weddings, cultural ceremonies, and 
                high-end entertainment planning. Our extensive network of premium vendors and 
                unique venues allows us to create truly unforgettable celebrations.
              </p>
              
              {/* Specialties */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Specialties</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCrown} className="w-5 h-5 text-yellow-500" />
                  <span>Luxury Weddings</span>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 text-blue-500" />
                  <span>Cultural Ceremonies</span>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faMusic} className="w-5 h-5 text-purple-500" />
                  <span>Entertainment Planning</span>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faUsers} className="w-5 h-5 text-gray-400" />
                      <span>Full luxury planning</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-gray-400" />
                      <span>Premium vendor network</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faMusic} className="w-5 h-5 text-gray-400" />
                      <span>Entertainment curation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Starting Price</h3>
                  <p className="text-3xl font-bold text-gray-900">$4,200</p>
                  <p className="text-gray-500 text-sm">Luxury package</p>
                </div>
              </div>
            </section>

            {/* Reviews Section */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Review</h2>
              <div className="border-l-4 border-gray-200 pl-4">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">3 weeks ago</span>
                </div>
                <p className="text-gray-600 italic mb-2">
                  &quot;The Luxe team went above and beyond to create our perfect wedding. Their vendor 
                  connections and expertise are unmatched!&quot; They seamlessly blended our cultural 
                  traditions with modern luxury elements.&quot;
                </p>
                <p className="text-gray-900 font-medium">Sophie & David</p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
                <VendorActions isLoggedIn={false} />
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Response time</span>
                    <span className="font-medium">5 minutes</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Similar events</span>
                    <span className="font-medium">42</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Years of experience</span>
                    <span className="font-medium">6+</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
