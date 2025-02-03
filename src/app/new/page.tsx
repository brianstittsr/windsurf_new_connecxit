'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage,
  faCalendarAlt,
  faMapMarkerAlt,
  faDollarSign,
  faInfoCircle,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';

export default function NewJobPage() {
  const [step, setStep] = useState(1);
  const [jobType, setJobType] = useState('');

  const jobTypes = [
    {
      id: 'photography',
      title: 'Photography',
      description: 'Professional photography services for events, portraits, or products',
      icon: '/images/icons/photography.svg',
    },
    {
      id: 'event-planning',
      title: 'Event Planning',
      description: 'Full-service event planning and coordination',
      icon: '/images/icons/event-planning.svg',
    },
    {
      id: 'catering',
      title: 'Catering',
      description: 'Food and beverage services for events',
      icon: '/images/icons/catering.svg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((number) => (
              <div key={number} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= number
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {number}
                </div>
                {number < 3 && (
                  <div
                    className={`w-24 h-1 mx-2 ${
                      step > number ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Job Type</span>
            <span>Details</span>
            <span>Review</span>
          </div>
        </div>

        {/* Step 1: Job Type Selection */}
        {step === 1 && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              What type of service do you need?
            </h1>
            <div className="grid gap-6">
              {jobTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setJobType(type.id)}
                  className={`flex items-start p-4 rounded-lg border-2 transition-colors ${
                    jobType === type.id
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-200'
                  }`}
                >
                  <img
                    src={type.icon}
                    alt={type.title}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="ml-4 text-left">
                    <h3 className="font-semibold text-gray-900">{type.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {type.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Job Details */}
        {step === 2 && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Tell us about your job
            </h1>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="e.g., Wedding Photography for 100 Guests"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your requirements in detail..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter location"
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget Range
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none">
                    <option value="">Select budget range</option>
                    <option value="0-500">$0 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2000">$1,000 - $2,000</option>
                    <option value="2000+">$2,000+</option>
                  </select>
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Attachments
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FontAwesomeIcon
                    icon={faUpload}
                    className="w-8 h-8 text-gray-400 mb-2"
                  />
                  <p className="text-gray-500">
                    Drag and drop files here, or{' '}
                    <span className="text-indigo-600 font-medium">browse</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Max file size: 10MB
                  </p>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Review Your Job Post
            </h1>
            <div className="space-y-6">
              {/* Summary would be populated with actual data */}
              <div className="border-b pb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Job Summary
                </h2>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Type:</span> Photography
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Title:</span> Wedding Photography for 100 Guests
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Date:</span> June 15, 2025
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Location:</span> Boston, MA
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Budget:</span> $2,000 - $3,000
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h2>
                <p className="text-gray-600">
                  Looking for an experienced photographer for our wedding...
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="text-yellow-400 mt-0.5 mr-3"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-yellow-800">
                      Before you post
                    </h3>
                    <p className="text-sm text-yellow-700 mt-1">
                      Make sure all the details are correct. Once posted, professionals will start submitting their proposals based on this information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Back
            </button>
          )}
          <button
            onClick={() => {
              if (step < 3) {
                setStep(step + 1);
              } else {
                // Handle job submission
                console.log('Submit job');
              }
            }}
            className="ml-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            {step === 3 ? 'Post Job' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
}
