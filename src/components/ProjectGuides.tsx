'use client';

import Image from 'next/image';
import Link from 'next/link';

const guides = [
  {
    id: 1,
    title: 'Live Entertainment Guide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/guides/entertainment.jpg',
    href: '/guides/entertainment'
  },
  {
    id: 2,
    title: 'Transportation Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/guides/transportation.jpg',
    href: '/guides/transportation'
  },
  {
    id: 3,
    title: 'Event Planning & Decor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/guides/event-planning.jpg',
    href: '/guides/event-planning'
  }
];

export default function ProjectGuides() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#ff5722]">ConnecXit</span> project guides.
          </h2>
          <p className="text-gray-600 text-lg">
            Sometimes, getting started is the hardest part. That&apos;s why we created Project Guides full of advice from
            ConnecXit pros. Find out what things cost, how long they take and who you should hire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link key={guide.id} href={guide.href} className="group">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2">{guide.title}</h3>
                    <p className="text-sm text-gray-200">{guide.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/guides" 
            className="text-[#ff5722] hover:text-[#ff5722]/90 font-semibold text-lg inline-flex items-center"
          >
            View all guides
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
