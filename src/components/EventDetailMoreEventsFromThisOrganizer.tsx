'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: {
    venue?: string;
    city: string;
    state: string;
  };
  price: string;
  imageUrl: string;
  organizer: {
    name: string;
    followers: number;
  };
}

interface EventDetailMoreEventsFromThisOrganizerProps {
  events: Event[];
  onLike?: (eventId: string) => void;
  onShare?: (eventId: string) => void;
}

export default function EventDetailMoreEventsFromThisOrganizer({
  events,
  onLike,
  onShare
}: EventDetailMoreEventsFromThisOrganizerProps) {
  const [likedEvents, setLikedEvents] = useState<Set<string>>(new Set());

  const handleLike = (eventId: string) => {
    const newLikedEvents = new Set(likedEvents);
    if (newLikedEvents.has(eventId)) {
      newLikedEvents.delete(eventId);
    } else {
      newLikedEvents.add(eventId);
    }
    setLikedEvents(newLikedEvents);
    onLike?.(eventId);
  };

  const handleShare = (eventId: string) => {
    onShare?.(eventId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          More events from this organizer
        </h2>

        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col md:flex-row gap-6 bg-white rounded-lg overflow-hidden border border-gray-200"
            >
              {/* Event Image */}
              <div className="md:w-80 h-48 relative">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  <Link href={`/events/${event.id}`}>
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-purple-600">
                      {event.title}
                    </h3>
                  </Link>

                  <p className="mt-2 text-red-600 font-medium">
                    {event.date} at {event.time}
                  </p>

                  <p className="mt-2 text-gray-600">
                    {event.location.venue && `${event.location.venue} • `}
                    {event.location.city}, {event.location.state}
                  </p>

                  <p className="mt-2 text-gray-600">{event.price}</p>

                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-600">
                      {event.organizer.name}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">
                      {event.organizer.followers.toLocaleString()} followers
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    onClick={() => handleLike(event.id)}
                    className="p-2 rounded-full hover:bg-gray-100"
                    aria-label="Like event"
                  >
                    <svg
                      className={`w-6 h-6 ${
                        likedEvents.has(event.id)
                          ? 'text-red-500 fill-current'
                          : 'text-gray-400'
                      }`}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare(event.id)}
                    className="p-2 rounded-full hover:bg-gray-100"
                    aria-label="Share event"
                  >
                    <svg
                      className="w-6 h-6 text-gray-400"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
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
