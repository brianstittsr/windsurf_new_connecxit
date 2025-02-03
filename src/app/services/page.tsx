'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrash,
  faPlus,
  faStar,
  faCheckCircle,
  faImage,
  faDollarSign,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  status: 'active' | 'inactive';
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'active' | 'drafts'>('active');

  const services: Service[] = [
    {
      id: 1,
      title: "Wedding Photography Package",
      category: "Photography",
      description: "Complete wedding photography coverage including engagement shoot, ceremony, and reception. Includes edited digital photos and prints.",
      price: "$2,500",
      duration: "8 hours",
      rating: 4.9,
      reviews: 28,
      image: "/images/services/wedding-photography.jpg",
      status: "active"
    },
    {
      id: 2,
      title: "Corporate Event Planning",
      category: "Event Planning",
      description: "Full-service corporate event planning including venue selection, catering coordination, and day-of management.",
      price: "$5,000",
      duration: "Varies",
      rating: 4.8,
      reviews: 15,
      image: "/images/services/corporate-event.jpg",
      status: "active"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">My Services</h1>
            <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add New Service
            </button>
          </div>
          <div className="mt-4 flex space-x-4">
            <button
              onClick={() => setActiveTab('active')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'active'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Active Services
            </button>
            <button
              onClick={() => setActiveTab('drafts')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'drafts'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Drafts
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h2>
                    <span className="inline-block mt-1 px-2 py-1 bg-indigo-100 text-indigo-700 text-sm rounded">
                      {service.category}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-indigo-600">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 line-clamp-2">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-gray-700">
                      <FontAwesomeIcon icon={faDollarSign} className="mr-1" />
                      {service.price}
                    </span>
                    <span className="flex items-center text-gray-700">
                      <FontAwesomeIcon icon={faClock} className="mr-1" />
                      {service.duration}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                    <span className="text-gray-700">{service.rating}</span>
                    <span className="text-gray-500 ml-1">({service.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                    <span>Active</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {services.length === 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <FontAwesomeIcon icon={faImage} className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No services yet
            </h3>
            <p className="text-gray-500 mb-4">
              Start by adding your first service to attract potential clients.
            </p>
            <button className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add New Service
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
