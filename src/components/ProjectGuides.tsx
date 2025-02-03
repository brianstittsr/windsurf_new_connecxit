'use client';

import Link from 'next/link';
import DefaultImage from './DefaultImage';

interface Guide {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
}

const guides: Guide[] = [
  {
    title: 'Event Planning',
    description: 'Learn how to plan and manage successful events.',
    href: '/guides/event-planning',
    imageUrl: '/images/guides/default-guide.jpg'
  },
  {
    title: 'Venue Management',
    description: 'Best practices for venue management and optimization.',
    href: '/guides/venue-management',
    imageUrl: '/images/guides/default-guide.jpg'
  },
  {
    title: 'Marketing Strategies',
    description: 'Effective marketing strategies for your business.',
    href: '/guides/marketing',
    imageUrl: '/images/guides/default-guide.jpg'
  }
];

export default function ProjectGuides() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Project Guides</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to make the most of our platform with these comprehensive guides.
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
                  <DefaultImage
                    src={guide.imageUrl}
                    alt={guide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="max-w-xl p-6">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      {guide.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{guide.description}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
