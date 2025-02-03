'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faLocationDot,
  faStar,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

interface Vendor {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  location: string;
  verified: boolean;
  tags: string[];
}

export default function ServicesNearMePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const vendors: Vendor[] = [
    {
      id: 1,
      name: "Elite Photography Studio",
      category: "Photography",
      rating: 4.9,
      reviews: 128,
      image: "/images/services/photography.jpg",
      location: "New York, NY",
      verified: true,
      tags: ["Wedding", "Portrait", "Events"],
    },
    {
      id: 2,
      name: "Gourmet Catering Co.",
      category: "Catering",
      rating: 4.8,
      reviews: 95,
      image: "/images/services/catering.jpg",
      location: "New York, NY",
      verified: true,
      tags: ["Corporate", "Wedding", "Buffet"],
    },
    {
      id: 3,
      name: "Soundwave DJ Services",
      category: "DJ Services",
      rating: 4.7,
      reviews: 73,
      image: "/images/services/dj-services.jpg",
      location: "Brooklyn, NY",
      verified: true,
      tags: ["Wedding", "Corporate", "Party"],
    },
    {
      id: 4,
      name: "Bloom & Petal Florists",
      category: "Florist",
      rating: 4.9,
      reviews: 156,
      image: "/images/services/florist.jpg",
      location: "Queens, NY",
      verified: true,
      tags: ["Wedding", "Events", "Bouquets"],
    },
  ];

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <div className="bg-orange-50 rounded-xl p-8 mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Find Services Near You</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" 
              />
              <input
                type="text"
                placeholder="Search for services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon 
                icon={faLocationDot} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" 
              />
              <input
                type="text"
                placeholder="Enter your location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={vendor.image}
                  alt={vendor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-orange-500">{vendor.category}</span>
                  {vendor.verified && (
                    <span className="flex items-center text-green-600 text-sm">
                      <FontAwesomeIcon icon={faCheck} className="w-4 h-4 mr-1" />
                      Verified
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{vendor.name}</h3>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="font-medium text-gray-900">{vendor.rating}</span>
                  <span className="text-gray-500 ml-1">({vendor.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 mr-2" />
                  {vendor.location}
                </div>
                <div className="flex flex-wrap gap-2">
                  {vendor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}