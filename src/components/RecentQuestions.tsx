'use client';

import Link from 'next/link';
import DefaultImage from './DefaultImage';

interface Question {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  author: {
    name: string;
    imageUrl: string;
  };
}

const questions: Question[] = [
  {
    id: 1,
    title: 'How do I get started with event planning?',
    description: 'Tips and best practices for beginning event planners.',
    imageUrl: '/images/guides/default-guide.jpg',
    category: 'Event Planning',
    author: {
      name: 'Sarah Johnson',
      imageUrl: '/images/avatars/default-avatar.jpg'
    }
  },
  {
    id: 2,
    title: 'What are the best venues in the area?',
    description: 'A comprehensive guide to local venues and their features.',
    imageUrl: '/images/guides/default-guide.jpg',
    category: 'Venues',
    author: {
      name: 'Michael Chen',
      imageUrl: '/images/avatars/default-avatar.jpg'
    }
  },
  {
    id: 3,
    title: 'How to market your event effectively?',
    description: 'Marketing strategies to increase event attendance.',
    imageUrl: '/images/guides/default-guide.jpg',
    category: 'Marketing',
    author: {
      name: 'Emily Davis',
      imageUrl: '/images/avatars/default-avatar.jpg'
    }
  }
];

export default function RecentQuestions() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Questions</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Get answers to common questions from our community.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {questions.map((question) => (
            <article
              key={question.id}
              className="flex flex-col items-start justify-between hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
            >
              <Link href={`/questions/${question.id}`} className="w-full">
                <div className="relative w-full">
                  <div className="relative h-48 w-full">
                    <DefaultImage
                      src={question.imageUrl}
                      alt={question.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-700 backdrop-blur">
                      {question.category}
                    </span>
                  </div>
                </div>
                <div className="max-w-xl p-6">
                  <div className="flex items-center gap-x-4 text-xs mb-4">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden">
                      <DefaultImage
                        src={question.author.imageUrl}
                        alt={question.author.name}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <span className="text-gray-500">{question.author.name}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      {question.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {question.description}
                    </p>
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
