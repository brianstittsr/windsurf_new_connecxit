"use client";

import Image from "next/image";
import { useState } from "react";

interface EventDetailOrganizedByProps {
  organizer: {
    name: string;
    image: string;
    followers: number;
    description?: string;
    totalEvents?: number;
    isFollowing?: boolean;
  };
  onFollow?: (following: boolean) => void;
}

export default function EventDetailOrganizedBy({
  organizer,
  onFollow,
}: EventDetailOrganizedByProps) {
  const [isFollowing, setIsFollowing] = useState(
    organizer.isFollowing || false,
  );
  const [followerCount, setFollowerCount] = useState(organizer.followers);

  const handleFollow = () => {
    const newFollowingState = !isFollowing;
    setIsFollowing(newFollowingState);
    setFollowerCount((prev) => (newFollowingState ? prev + 1 : prev - 1));
    onFollow?.(newFollowingState);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Organized by</h2>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-start space-x-6">
            {/* Organizer Image */}
            <div className="flex-shrink-0">
              <Image
                src={organizer.image}
                alt={organizer.name}
                width={120}
                height={120}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Organizer Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {organizer.name}
                  </h3>
                  <div className="mt-1 flex items-center">
                    <span className="text-sm text-gray-500">
                      {formatNumber(followerCount)} followers
                    </span>
                    {organizer.totalEvents && (
                      <>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">
                          {organizer.totalEvents} total events
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleFollow}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    isFollowing
                      ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
              </div>

              {organizer.description && (
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {organizer.description}
                </p>
              )}

              {/* Social Proof */}
              <div className="mt-6 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  Followed by people you know
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
