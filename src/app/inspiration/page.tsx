'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faBookmark,
  faShare,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';

interface InspirationImage {
  id: number;
  src: string;
  title: string;
  category: string;
  likes: number;
  saves: number;
  photographer: string;
}

export default function InspirationPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All',
    'Wedding',
    'Corporate',
    'Birthday',
    'Decor',
    'Floral',
    'Lighting',
    'Food & Beverage',
  ];

  const images: InspirationImage[] = [
    {
      id: 1,
      src: '/images/inspiration/garden-wedding.jpg',
      title: 'Elegant Garden Wedding',
      category: 'Wedding',
      likes: 1245,
      saves: 892,
      photographer: 'Sarah Johnson',
    },
    {
      id: 2,
      src: '/images/inspiration/corporate-conference.jpg',
      title: 'Modern Corporate Conference',
      category: 'Corporate',
      likes: 892,
      saves: 156,
      photographer: 'Michael Chen',
    },
    {
      id: 3,
      src: '/images/inspiration/rustic-birthday.jpg',
      title: 'Rustic Birthday Celebration',
      category: 'Birthday',
      likes: 756,
      saves: 203,
      photographer: 'Emma Wilson',
    },
    {
      id: 4,
      src: '/images/inspiration/gala-dinner.jpg',
      title: 'Luxury Gala Dinner',
      category: 'Gala',
      likes: 1102,
      saves: 289,
      photographer: 'David Martinez',
    },
    {
      id: 5,
      src: '/images/inspiration/beach-wedding.jpg',
      title: 'Beach Wedding Reception',
      category: 'Wedding',
      likes: 934,
      saves: 267,
      photographer: 'Lisa Anderson',
    },
    {
      id: 6,
      src: '/images/inspiration/music-festival.jpg',
      title: 'Summer Music Festival',
      category: 'Festival',
      likes: 845,
      saves: 178,
      photographer: 'James Wilson',
    },
  ];

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Inspiration Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover beautiful event designs and get inspired for your next celebration.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Browse Categories</h2>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faFilter} className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images
            .filter((image) => selectedCategory === 'all' || image.category === selectedCategory)
            .map((image) => (
              <div key={image.id} className="group relative">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                      <p className="text-gray-200 text-sm mb-4">Photo by {image.photographer}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center text-white">
                            <FontAwesomeIcon icon={faHeart} className="w-5 h-5 mr-1" />
                            {image.likes}
                          </button>
                          <button className="flex items-center text-white">
                            <FontAwesomeIcon icon={faBookmark} className="w-5 h-5 mr-1" />
                            {image.saves}
                          </button>
                        </div>
                        <button className="text-white">
                          <FontAwesomeIcon icon={faShare} className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm font-medium text-orange-500">{image.category}</span>
                </div>
              </div>
            ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </PageLayout>
  );
}