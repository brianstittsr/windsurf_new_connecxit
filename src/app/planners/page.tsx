import React from 'react';
import PlannerCard from '@/components/PlannerCard';

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
];

export default function PlannersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Top Event Planners</h1>
        <p className="mt-2 text-lg text-gray-600">Find the perfect event planner for your next occasion</p>
      </div>

      <div className="space-y-6">
        {planners.map((planner) => (
          <PlannerCard
            key={planner.id}
            {...planner}
          />
        ))}
      </div>
    </div>
  );
}
