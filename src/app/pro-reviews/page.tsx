import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faStar,
  faStarHalf,
  faThumbsUp,
  faComment,
  faSearch,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

export default function ProReviews() {
  const reviews = [
    {
      id: 1,
      providerName: "John Smith",
      providerImage: "/images/providers/john-smith.jpg",
      service: "Plumbing",
      rating: 5,
      reviewCount: 127,
      verifiedBookings: 156,
      topReviews: [
        {
          author: "Sarah M.",
          date: "January 15, 2025",
          rating: 5,
          content:
            "John was professional, punctual, and fixed our leaky faucet quickly. Highly recommend!",
          helpful: 24,
          replies: 1,
        },
        {
          author: "Mike R.",
          date: "January 12, 2025",
          rating: 5,
          content:
            "Great service! Fixed our water heater issue and explained everything clearly.",
          helpful: 18,
          replies: 2,
        },
      ],
    },
    {
      id: 2,
      providerName: "Emily Johnson",
      providerImage: "/images/providers/emily-johnson.jpg",
      service: "House Cleaning",
      rating: 4.8,
      reviewCount: 93,
      verifiedBookings: 112,
      topReviews: [
        {
          author: "David L.",
          date: "January 16, 2025",
          rating: 5,
          content:
            "Emily does an amazing job every time. Very detail-oriented and thorough.",
          helpful: 15,
          replies: 1,
        },
        {
          author: "Lisa K.",
          date: "January 14, 2025",
          rating: 4,
          content:
            "Reliable and professional service. Would recommend for regular cleaning.",
          helpful: 12,
          replies: 0,
        },
      ],
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          className="text-yellow-400"
        />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          key="half"
          icon={faStarHalf}
          className="text-yellow-400"
        />,
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStar}
          className="text-gray-300"
        />,
      );
    }

    return stars;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Pro Reviews</h1>
      <p className="text-gray-600 mb-8">
        Read verified reviews from real customers about our service providers.
      </p>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search reviews by service or provider name..."
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-orange-500"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>

        <div className="flex gap-4">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            Filter by Service
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FontAwesomeIcon icon={faStar} className="mr-2" />
            Rating
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-8">
        {reviews.map((provider) => (
          <div
            key={provider.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* Provider Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={provider.providerImage}
                    alt={provider.providerName}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-1">
                    {provider.providerName}
                  </h2>
                  <p className="text-gray-600 mb-2">{provider.service}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(provider.rating)}</div>
                    <span className="text-gray-600">
                      ({provider.reviewCount} reviews)
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {provider.verifiedBookings} verified bookings
                  </p>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            {/* Top Reviews */}
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Top Reviews</h3>
              <div className="space-y-6">
                {provider.topReviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-medium">{review.author}</span>
                        <span className="text-gray-500 text-sm ml-2">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex">{renderStars(review.rating)}</div>
                    </div>
                    <p className="text-gray-700 mb-3">{review.content}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <button className="flex items-center gap-1 hover:text-orange-500">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span>Helpful ({review.helpful})</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-orange-500">
                        <FontAwesomeIcon icon={faComment} />
                        <span>Reply ({review.replies})</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View All Reviews Button */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <button className="w-full text-center text-orange-500 hover:text-orange-600 font-medium">
                View all {provider.reviewCount} reviews
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 text-center">
        <button className="bg-white text-orange-500 px-6 py-3 rounded-lg border border-orange-500 hover:bg-orange-50 transition-colors">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}
