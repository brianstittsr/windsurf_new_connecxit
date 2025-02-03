'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faLocationDot,
  faFilter,
  faStar,
  faCalendarAlt,
  faDollarSign,
  faMapMarkerAlt,
  faTag,
} from '@fortawesome/free-solid-svg-icons';

interface Job {
  id: number;
  title: string;
  location: string;
  budget: string;
  timeframe: string;
  description: string;
  status: 'open' | 'in_progress' | 'completed';
  postedDate: string;
  client: {
    name: string;
    rating: number;
    jobsPosted: number;
  };
}

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState<'available' | 'my_jobs'>('available');
  const [filterOpen, setFilterOpen] = useState(false);

  const jobs: Job[] = [
    {
      id: 1,
      title: "Wedding Photography - Summer Garden Event",
      location: "Boston, MA",
      budget: "$2,000-$3,000",
      timeframe: "June 15, 2025",
      description: "Looking for an experienced photographer for a garden wedding. Need coverage for 8 hours, including preparation and reception.",
      status: "open",
      postedDate: "2 hours ago",
      client: {
        name: "Sarah Johnson",
        rating: 4.8,
        jobsPosted: 5
      }
    },
    {
      id: 2,
      title: "Corporate Event Planning - Tech Conference",
      location: "Cambridge, MA",
      budget: "$5,000-$7,000",
      timeframe: "March 1-2, 2025",
      description: "Need an event planner for a two-day tech conference. Expected attendance: 200 people.",
      status: "open",
      postedDate: "1 day ago",
      client: {
        name: "TechCorp Inc.",
        rating: 4.9,
        jobsPosted: 12
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Jobs</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('available')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'available'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Available Jobs
              </button>
              <button
                onClick={() => setActiveTab('my_jobs')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'my_jobs'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                My Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            Filters
          </button>
        </div>

        {/* Filter Panel */}
        {filterOpen && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget Range
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                  <option>Any budget</option>
                  <option>$0 - $500</option>
                  <option>$500 - $1000</option>
                  <option>$1000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                  <option>All types</option>
                  <option>Photography</option>
                  <option>Event Planning</option>
                  <option>Catering</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Jobs List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 hover:text-indigo-600">
                    {job.title}
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                      {job.budget}
                    </span>
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                      {job.timeframe}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">{job.description}</p>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-gray-500">Posted by {job.client.name}</span>
                    <span className="mx-2">•</span>
                    <span className="text-yellow-500">★ {job.client.rating}</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-500">{job.client.jobsPosted} jobs posted</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                  <span className="text-sm text-gray-500">{job.postedDate}</span>
                  <button className="mt-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
