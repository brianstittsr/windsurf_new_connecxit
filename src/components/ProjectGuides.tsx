"use client";

import Link from "next/link";
import Image from "next/image";
import DefaultGuide from "./DefaultGuide";
import { useState } from "react";

interface Guide {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
}

const guides: Guide[] = [
  {
    title: "Event Planning",
    description: "Learn how to plan and manage successful events.",
    href: "/guides/event-planning",
    imageUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Venue Management",
    description: "Best practices for venue management and optimization.",
    href: "/guides/venue-management",
    imageUrl:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Transportation Strategies",
    description: "Effective transportation planning for events and venues.",
    href: "/guides/transportation",
    imageUrl:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ProjectGuides() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (title: string) => {
    setImageErrors((prev) => ({ ...prev, [title]: true }));
  };

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Project Guides
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to make the most of our platform with these comprehensive
            guides.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.title}
              className="flex flex-col items-start justify-between hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
            >
              <Link href={guide.href} className="w-full">
                <div className="relative w-full h-48">
                  {!imageErrors[guide.title] ? (
                    <Image
                      src={guide.imageUrl}
                      alt={guide.title}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(guide.title)}
                    />
                  ) : (
                    <DefaultGuide
                      title={guide.title}
                      className="w-full h-full rounded-t-lg"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {guide.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
