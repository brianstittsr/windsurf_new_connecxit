import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

interface PlannerCardProps {
  name: string;
  rating: number;
  reviewCount: number;
  hireCount: number;
  similarJobsCount: number;
  responseTime: string;
  testimonial?: {
    author: string;
    text: string;
  };
  logoUrl: string;
  startingPrice: number;
  specialFeatures: string[];
  type: string;
}

export default function PlannerCard({
  name,
  rating,
  reviewCount,
  hireCount,
  similarJobsCount,
  responseTime,
  testimonial,
  logoUrl,
  startingPrice,
  specialFeatures,
  type,
}: PlannerCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex items-start gap-6">
        {/* Logo */}
        <div className="w-28 h-28 relative flex-shrink-0 rounded-full overflow-hidden border-4 border-gray-100">
          <Image
            src={logoUrl}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-emerald-600 font-medium">Great {rating}</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={`w-3 h-3 ${
                        i < Math.floor(rating)
                          ? 'text-yellow-400'
                          : i < rating
                          ? 'text-yellow-200'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-500">({reviewCount})</span>
              </div>
              
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {specialFeatures.map((feature, index) => (
                  <div key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">${startingPrice}</div>
              <div className="text-sm text-gray-500">Starting price</div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 space-y-2 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-gray-400" />
              {hireCount} hires on ConnecXit
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-gray-400" />
              {similarJobsCount} similar jobs done near you
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-gray-400" />
              Online Now - responds in about {responseTime}
            </div>
          </div>

          {/* Testimonial */}
          {testimonial && (
            <div className="mt-4">
              <p className="text-gray-600 text-sm">
                <span className="font-medium">{testimonial.author}</span> says, &ldquo;{testimonial.text}&rdquo;
              </p>
              <button className="text-blue-600 text-sm mt-1 hover:underline">
                ...See more
              </button>
            </div>
          )}
        </div>

        {/* Price and Action Button */}
        <div className="flex-shrink-0 text-right">
          <div className="text-2xl font-bold text-gray-900">${startingPrice}</div>
          <div className="text-sm text-gray-500 mb-4">Starting price</div>
          <Link
            href={`/${type}/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            className="inline-block px-6 py-2.5 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition-colors"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
