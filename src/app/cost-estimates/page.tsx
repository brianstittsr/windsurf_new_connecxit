'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCalculator,
  faInfoCircle,
  faArrowRight,
  faCamera,
  faUtensils,
  faMusic,
  faChampagneGlasses,
} from '@fortawesome/free-solid-svg-icons';

interface ServiceCategory {
  id: string;
  name: string;
  icon: IconDefinition;
  priceRange: string;
  description: string;
}

interface CostGuide {
  title: string;
  description: string;
  factors: string[];
  averageCost: string;
}

export default function CostEstimatesPage() {
  const [eventType, setEventType] = useState('wedding');
  const [guestCount, setGuestCount] = useState('50-100');
  const [location, setLocation] = useState('');

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'photography',
      name: 'Photography',
      icon: faCamera,
      priceRange: '$1,000 - $3,000',
      description: 'Professional event photography services',
    },
    {
      id: 'catering',
      name: 'Catering',
      icon: faUtensils,
      priceRange: '$50 - $150 per person',
      description: 'Full-service catering and beverages',
    },
    {
      id: 'entertainment',
      name: 'Entertainment',
      icon: faMusic,
      priceRange: '$800 - $2,500',
      description: 'DJs, live bands, and performers',
    },
    {
      id: 'venue',
      name: 'Venue',
      icon: faChampagneGlasses,
      priceRange: '$2,000 - $10,000',
      description: 'Event spaces and venues',
    },
  ];

  const costGuides: CostGuide[] = [
    {
      title: 'Wedding Photography',
      description: 'Understanding wedding photography pricing and packages',
      factors: [
        'Hours of coverage',
        'Number of photographers',
        'Photo editing and retouching',
        'Digital files and prints',
      ],
      averageCost: '$2,500',
    },
    {
      title: 'Corporate Event Catering',
      description: 'Breakdown of corporate catering costs',
      factors: [
        'Menu selection',
        'Service style',
        'Staff requirements',
        'Equipment rentals',
      ],
      averageCost: '$75 per person',
    },
  ];

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cost Estimates</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get accurate cost estimates for your event services and make informed decisions.
          </p>
        </div>

        {/* Cost Calculator */}
        <div className="bg-orange-50 rounded-xl p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faCalculator} className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cost Calculator</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guest Count
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="1-50">1-50 guests</option>
                  <option value="50-100">50-100 guests</option>
                  <option value="100-200">100-200 guests</option>
                  <option value="200+">200+ guests</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter city or zip code"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Calculate Estimates
            </button>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Average Costs by Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category) => (
              <div key={category.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={category.icon} className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-lg font-bold text-orange-500">{category.priceRange}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Guides */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Cost Guides</h2>
            <button className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
              View All Guides
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {costGuides.map((guide) => (
              <div key={guide.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Cost Factors:</h4>
                  <ul className="space-y-2">
                    {guide.factors.map((factor) => (
                      <li key={factor} className="flex items-center text-gray-600">
                        <FontAwesomeIcon icon={faInfoCircle} className="w-4 h-4 text-orange-500 mr-2" />
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-gray-600">Average Cost:</span>
                  <span className="text-lg font-bold text-orange-500">{guide.averageCost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}