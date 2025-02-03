import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PlannerCard from '@/components/PlannerCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';

// Sample data - in a real app, this would come from an API
const planners = [
  {
    id: '1',
    name: "Rose's Clean Team Inc",
    rating: 4.7,
    reviewCount: 504,
    hireCount: 1119,
    similarJobsCount: 318,
    responseTime: '3 min',
    testimonial: {
      author: 'Tinika M.',
      text: "I couldn't be happier with the amazing job these ladies did for our home. Our home now looks move in ready thanks to Rose's Clean Team Inc.",
    },
    logoUrl: '/images/planners/roses-clean-team.png',
    startingPrice: 190,
  },
  {
    id: '2',
    name: 'Elite Event Planning',
    rating: 4.9,
    reviewCount: 328,
    hireCount: 892,
    similarJobsCount: 245,
    responseTime: '5 min',
    testimonial: {
      author: 'Michael R.',
      text: 'Elite Event Planning made our wedding day absolutely perfect. Their attention to detail was outstanding.',
    },
    logoUrl: '/images/planners/elite-events.png',
    startingPrice: 250,
  },
  {
    id: '3',
    name: 'Luxe Events Boston',
    rating: 4.8,
    reviewCount: 423,
    hireCount: 967,
    similarJobsCount: 289,
    responseTime: '10 min',
    testimonial: {
      author: 'Sarah K.',
      text: 'Luxe Events Boston transformed our corporate event into an unforgettable experience. Highly recommended!',
    },
    logoUrl: '/images/planners/luxe-events.png',
    startingPrice: 300,
  },
];

export default function SearchResultsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Results Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Event Planners in Boston</h1>
            <p className="mt-2 text-lg text-gray-600">Found {planners.length} event planners matching your search</p>
          </div>

          {/* Filters and Sort */}
          <div className="flex justify-between items-center mb-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
              <FontAwesomeIcon icon={faFilter} className="w-4 h-4 text-gray-500" />
              <span>Filters</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
              <FontAwesomeIcon icon={faSort} className="w-4 h-4 text-gray-500" />
              <span>Sort by: Recommended</span>
            </button>
          </div>

          {/* Search Results */}
          <div className="space-y-6">
            {planners.map((planner) => (
              <PlannerCard
                key={planner.id}
                {...planner}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <button className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-blue-600">
                1
              </button>
              <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
