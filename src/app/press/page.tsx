'use client';

import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNewspaper,
  faDownload,
  faEnvelope,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export default function PressPage() {
  const pressReleases = [
    {
      id: 1,
      title: 'ConnecXit Raises $50M Series B to Revolutionize Event Planning',
      date: 'January 15, 2025',
      description: 'Funding will accelerate product development and market expansion.',
      logo: '/images/press/techcrunch-logo.png',
      link: '#',
    },
    {
      id: 2,
      title: 'ConnecXit Launches AI-Powered Vendor Matching',
      date: 'December 1, 2024',
      description: 'New feature uses machine learning to match event planners with perfect vendors.',
      logo: '/images/press/forbes-logo.png',
      link: '#',
    },
    {
      id: 3,
      title: 'ConnecXit Expands to 25 New Markets',
      date: 'November 15, 2024',
      description: 'Platform now available in major cities across North America.',
      logo: '/images/press/business-insider-logo.png',
      link: '#',
    },
  ];

  const mediaFeatures = [
    {
      source: 'TechCrunch',
      logo: '/images/press/techcrunch-logo.png',
      title: 'How ConnecXit is Transforming the Event Planning Industry',
      link: '#',
    },
    {
      source: 'Forbes',
      logo: '/images/press/forbes-logo.png',
      title: 'ConnecXit Named in Top 50 StartUps to Watch',
      link: '#',
    },
    {
      source: 'Bloomberg',
      logo: '/images/press/business-insider-logo.png',
      title: 'Event Planning Platform ConnecXit Sees Explosive Growth',
      link: '#',
    },
  ];

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Press & Media</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the latest news and updates about ConnecXit's mission to transform the event planning industry.
          </p>
        </div>

        {/* Press Contact */}
        <div className="bg-orange-50 rounded-xl p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Press Contact</h2>
            <p className="text-gray-600 mb-6">
              For press inquiries, please contact our media relations team.
            </p>
            <button className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-2" />
              Contact Press Team
            </button>
          </div>
        </div>

        {/* Press Releases */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Latest Press Releases</h2>
            <button className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
              View All
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="grid gap-8">
            {pressReleases.map((release) => (
              <div key={release.title} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sm text-gray-500 mb-2">{release.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h3>
                <p className="text-gray-600 mb-4">{release.description}</p>
                <a href={release.link} className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Media Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">In the News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaFeatures.map((feature) => (
              <a
                key={feature.title}
                href={feature.link}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-12 mb-4">
                  <Image
                    src={feature.logo}
                    alt={feature.source}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <span className="text-gray-500">{feature.source}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Media Resources */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Media Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faNewspaper} className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Press Kit</h3>
                  <p className="text-gray-600">Company information, fact sheets, and FAQs</p>
                </div>
              </div>
              <button className="w-full inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                <FontAwesomeIcon icon={faDownload} className="w-5 h-5 mr-2" />
                Download Press Kit
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faDownload} className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Brand Assets</h3>
                  <p className="text-gray-600">Logos, screenshots, and brand guidelines</p>
                </div>
              </div>
              <button className="w-full inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                <FontAwesomeIcon icon={faDownload} className="w-5 h-5 mr-2" />
                Download Assets
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}