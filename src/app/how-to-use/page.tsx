'use client';

import PageLayout from '@/components/PageLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faListCheck,
  faComments,
  faCalendarCheck,
  faCirclePlay,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function HowToUsePage() {
  const steps = [
    {
      icon: faSearch,
      title: 'Search for Vendors',
      description: 'Browse through our extensive network of verified event vendors in your area.',
    },
    {
      icon: faListCheck,
      title: 'Compare Options',
      description: 'Review profiles, portfolios, pricing, and customer reviews to find the perfect match.',
    },
    {
      icon: faComments,
      title: 'Connect & Discuss',
      description: 'Message vendors directly through our platform to discuss your event details.',
    },
    {
      icon: faCalendarCheck,
      title: 'Book & Manage',
      description: 'Secure your booking and manage all event details through our platform.',
    },
  ];

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How To Use ConnecXit</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your step-by-step guide to finding and booking the perfect event vendors.
          </p>
        </div>

        {/* Quick Start Video */}
        <div className="mb-16">
          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <FontAwesomeIcon icon={faCirclePlay} className="w-20 h-20 text-white opacity-80" />
              </div>
              <Image
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&h=675&fit=crop"
                alt="How to use ConnecXit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-gray-200 transform translate-x-1/2" />
              )}
              <div className="relative bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={step.icon} className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pro Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Event Planners</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                  Start your search early to get the best vendors
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                  Read reviews and check portfolios thoroughly
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                  Be clear about your budget and requirements
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Vendors</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                  Keep your profile up to date
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                  Respond to inquiries promptly
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                  Showcase your best work in your portfolio
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}