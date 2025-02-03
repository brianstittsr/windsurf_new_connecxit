'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

const planners = [
  {
    id: 1,
    name: 'Sarah Johnson',
    specialty: 'Wedding Specialist',
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Michael Chen',
    specialty: 'Corporate Events',
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    specialty: 'Social Gatherings',
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'David Kim',
    specialty: 'Luxury Events',
    rating: 5.0,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Isabella Martinez',
    specialty: 'Cultural Celebrations',
    rating: 4.9,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'James Wilson',
    specialty: 'Music Festivals',
    rating: 4.7,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Sophia Lee',
    specialty: 'Tech Conferences',
    rating: 4.8,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Marcus Thompson',
    specialty: 'Sports Events',
    rating: 4.9,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  },
];

const HotEventPlanners = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemsPerPage = 4;
  const maxScroll = Math.max(0, planners.length - itemsPerPage);

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(maxScroll, prev + 1));
  };

  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Top Event Planners</h2>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className={`absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg ${
              scrollPosition === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            disabled={scrollPosition === 0}
            aria-label="Previous planners"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={scrollRight}
            className={`absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg ${
              scrollPosition >= maxScroll ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            disabled={scrollPosition >= maxScroll}
            aria-label="Next planners"
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6 text-gray-600" />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${scrollPosition * 25}%)` }}
            >
              {planners.map((planner) => (
                <div key={planner.id} className="w-full md:w-1/4 flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64">
                      <Image
                        src={planner.image}
                        alt={planner.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        priority={planner.id <= 4}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-1">{planner.name}</h3>
                      <p className="text-gray-600 mb-2">{planner.specialty}</p>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">
                          <FontAwesomeIcon icon={faStar} className="h-4 w-4" />
                        </span>
                        <span className="font-medium">{planner.rating}</span>
                        <span className="text-gray-500 ml-1">({planner.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotEventPlanners;
