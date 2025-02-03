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
    specialty: 'Festival Planning',
    rating: 4.8,
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const visiblePlanners = planners.slice(currentIndex, currentIndex + 4);
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex + 4 < planners.length;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex((prev) => Math.min(planners.length - 4, prev + 1));
    }
  };

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hot Event Planners
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Connect with our top-rated event planning professionals.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-white shadow-lg ${
              canScrollLeft ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-400 cursor-not-allowed'
            }`}
            disabled={!canScrollLeft}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
          </button>

          {/* Planners Grid */}
          <div className="grid grid-cols-4 gap-8">
            {visiblePlanners.map((planner) => (
              <div
                key={planner.id}
                className="flex flex-col items-center space-y-4 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-48 h-48 rounded-full overflow-hidden">
                  {!imageErrors[planner.id] ? (
                    <Image
                      src={planner.image}
                      alt={planner.name}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(planner.id)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex justify-center items-center">
                      <div className="text-lg font-bold">{planner.name.charAt(0)}</div>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{planner.name}</h3>
                  <p className="text-sm text-gray-600">{planner.specialty}</p>
                  <div className="flex items-center justify-center mt-2">
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium text-gray-900">{planner.rating}</span>
                    <span className="mx-1.5 text-sm text-gray-500">·</span>
                    <span className="text-sm text-gray-500">{planner.reviews} reviews</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-white shadow-lg ${
              canScrollRight ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-400 cursor-not-allowed'
            }`}
            disabled={!canScrollRight}
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotEventPlanners;
