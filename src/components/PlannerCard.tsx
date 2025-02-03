import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

interface PlannerCardProps {
  id: string;
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
}

export default function PlannerCard({
  id,
  name,
  rating,
  reviewCount,
  hireCount,
  similarJobsCount,
  responseTime,
  testimonial,
  logoUrl,
  startingPrice,
}: PlannerCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start gap-6">
        {/* Logo */}
        <div className="w-24 h-24 relative flex-shrink-0">
          <Image
            src={logoUrl}
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-emerald-600 font-medium">Great {rating}</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={`w-4 h-4 ${
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
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">${startingPrice}</div>
              <div className="text-sm text-gray-500">Starting price</div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 space-y-2 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                <FontAwesomeIcon icon={faStar} className="w-3 h-3 text-blue-600" />
              </div>
              {hireCount} hires on ConnecXit
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3 text-blue-600" />
              </div>
              {similarJobsCount} similar jobs done near you
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                <FontAwesomeIcon icon={faClock} className="w-3 h-3 text-blue-600" />
              </div>
              Responds in about {responseTime}
            </div>
          </div>

          {/* Testimonial */}
          {testimonial && (
            <div className="mt-4">
              <p className="text-gray-600">
                {testimonial.author} says, &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="flex-shrink-0">
          <Link
            href={`/planner/${id}`}
            className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
