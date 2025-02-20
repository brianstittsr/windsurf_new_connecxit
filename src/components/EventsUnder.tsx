"use client";

import { useState } from "react";
import EventCard from "./EventCard";
import { eventsUnder } from "@/data/events";

export default function EventsUnder() {
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 4;
  const totalPages = Math.ceil(eventsUnder.length / eventsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentEvents = eventsUnder.slice(
    currentPage * eventsPerPage,
    (currentPage + 1) * eventsPerPage,
  );

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Events $30 and under
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={prevPage}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
              aria-label="Previous page"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextPage}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
              aria-label="Next page"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {currentEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id.toString()}
              title={event.title}
              date={`${event.date} at ${event.time}`}
              location={event.location.name || ""}
              imageUrl={event.backgroundImage}
              price={event.ticketInfo.price || ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
