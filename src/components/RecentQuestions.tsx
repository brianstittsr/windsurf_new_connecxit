'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const questions = [
  {
    id: 1,
    title: 'Florist & Decor Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/florist.jpg'
  },
  {
    id: 2,
    title: 'Catering Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/catering.jpg'
  },
  {
    id: 3,
    title: 'Photography Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/photography.jpg'
  },
  {
    id: 4,
    title: 'Live Entertainment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/entertainment.jpg'
  },
  {
    id: 5,
    title: 'DJ Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/dj.jpg'
  },
  {
    id: 6,
    title: 'Transportation Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/transportation.jpg'
  },
  {
    id: 7,
    title: 'Event Planning & Decor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/event-planning.jpg'
  },
  {
    id: 8,
    title: 'Venue and Location Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/venue.jpg'
  }
];

export default function RecentQuestions() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(questions.length / itemsPerPage);

  const showPrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const showNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const visibleQuestions = questions.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Popular Event Vendor Categories
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-4 gap-6">
            {visibleQuestions.map((question) => (
              <div key={question.id} className="relative">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Image
                    src={question.image}
                    alt={question.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={question.id <= 4}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{question.title}</h3>
                <p className="text-gray-600">{question.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={showPrevious}
            disabled={currentPage === 0}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 ${
              currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
            aria-label="Previous page"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={showNext}
            disabled={currentPage >= totalPages - 1}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 ${
              currentPage >= totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
            aria-label="Next page"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
