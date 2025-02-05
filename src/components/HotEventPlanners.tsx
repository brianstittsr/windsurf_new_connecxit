'use client';

import Image from 'next/image';
import Link from 'next/link';
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
    city: 'Charlotte',
    blogUrl: '/blog/planners/sarah-johnson',
  },
  {
    id: 2,
    name: 'Michael Chen',
    specialty: 'Corporate Events',
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    city: 'Raleigh',
    blogUrl: '/blog/planners/michael-chen',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    specialty: 'Social Gatherings',
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    city: 'Greensboro',
    blogUrl: '/blog/planners/emily-rodriguez',
  },
  {
    id: 4,
    name: 'David Kim',
    specialty: 'Luxury Events',
    rating: 5.0,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    city: 'Durham',
    blogUrl: '/blog/planners/david-kim',
  },
  {
    id: 5,
    name: 'Isabella Martinez',
    specialty: 'Cultural Celebrations',
    rating: 4.9,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=800&auto=format&fit=crop',
    city: 'Winston-Salem',
    blogUrl: '/blog/planners/isabella-martinez',
  },
  {
    id: 6,
    name: 'James Wilson',
    specialty: 'Festival Planning',
    rating: 4.8,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    city: 'Cary',
    blogUrl: '/blog/planners/james-wilson',
  },
  {
    id: 7,
    name: 'Sophia Lee',
    specialty: 'Tech Conferences',
    rating: 4.8,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop',
    city: 'Wilmington',
    blogUrl: '/blog/planners/sophia-lee',
  },
  {
    id: 8,
    name: 'Marcus Thompson',
    specialty: 'Sports Events',
    rating: 4.9,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    city: 'Asheville',
    blogUrl: '/blog/planners/marcus-thompson',
  },
];

const HotEventPlanners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4 >= planners.length ? 0 : prevIndex + 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 < 0 ? planners.length - 4 : prevIndex - 4));
  };

  const visiblePlanners = planners.slice(currentIndex, currentIndex + 4);

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Event Planners</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Work with the best event planners in North Carolina
          </p>
        </div>

        <div className="relative mt-16">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6 text-gray-600" />
          </button>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {visiblePlanners.map((planner) => (
              <Link key={planner.id} href={planner.blogUrl} className="group">
                <div className="flex flex-col items-center">
                  <div className="relative h-48 w-48 overflow-hidden rounded-full group-hover:shadow-lg transition-shadow duration-300">
                    {!imageErrors[planner.id] ? (
                      <Image
                        src={planner.image}
                        alt={planner.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={() => handleImageError(planner.id)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-400">
                          {planner.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">{planner.name}</h3>
                    <p className="text-sm text-gray-500">{planner.city}</p>
                    <p className="text-sm text-gray-600">{planner.specialty}</p>
                    <div className="flex items-center justify-center mt-2">
                      <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-600">{planner.rating} ({planner.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotEventPlanners;
