import React from 'react';
import PlannerCard from '@/components/PlannerCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

// Sample data - in a real app, this would come from an API
const planners = [
  {
    id: '1',
    name: "Elegant Events by Sarah",
    rating: 5.0,
    reviewCount: 48,
    hireCount: 150,
    similarJobsCount: 85,
    responseTime: '2 hrs',
    testimonial: {
      author: 'Emily & James',
      text: 'Sarah made our dream wedding come true! Her attention to detail and creative vision transformed our venue into a magical space.',
    },
    logoUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=500&auto=format&fit=crop',
    startingPrice: 2900,
    specialties: ['Full-Service Planning', 'Day-of Coordination', 'Destination Weddings'],
  },
  {
    id: '2',
    name: 'Perfect Day Planning',
    rating: 5.0,
    reviewCount: 32,
    hireCount: 120,
    similarJobsCount: 65,
    responseTime: '16 min',
    testimonial: {
      author: 'Rachel & Michael',
      text: 'Working with Perfect Day was the best decision we made. They handled everything flawlessly and made our day stress-free!',
    },
    logoUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=500&auto=format&fit=crop',
    startingPrice: 3500,
    specialties: ['Custom Design', 'Vendor Coordination', 'Budget Management'],
  },
  {
    id: '3',
    name: 'Luxe Celebrations',
    rating: 5.0,
    reviewCount: 28,
    hireCount: 85,
    similarJobsCount: 42,
    responseTime: '5 min',
    testimonial: {
      author: 'Sophie & David',
      text: 'The Luxe team went above and beyond to create our perfect wedding. Their vendor connections and expertise are unmatched!',
    },
    logoUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=500&auto=format&fit=crop',
    startingPrice: 4200,
    specialties: ['Luxury Weddings', 'Cultural Ceremonies', 'Entertainment Planning'],
  },
];

export default function SearchResultsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Results Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Top 3 matching wedding planners</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-600">Our criteria</span>
              <FontAwesomeIcon icon={faCircleInfo} className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Section Labels */}
          <div className="mb-4 space-x-2">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-700 font-medium rounded-full">
              Highly rated
            </div>
            <div className="inline-block px-4 py-1 bg-purple-50 text-purple-700 font-medium rounded-full">
              Full service
            </div>
            <div className="inline-block px-4 py-1 bg-pink-50 text-pink-700 font-medium rounded-full">
              Custom design
            </div>
          </div>

          {/* Search Results */}
          <div className="space-y-4">
            {planners.map((planner) => (
              <PlannerCard
                key={planner.id}
                {...planner}
                specialFeatures={planner.specialties}
                type="planner"
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
