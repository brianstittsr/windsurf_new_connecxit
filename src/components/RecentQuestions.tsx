"use client";

import Link from "next/link";
import DefaultImage from "./DefaultImage";

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
    title: "How do I get started with event planning?",
    description: "Tips and best practices for beginning event planners.",
    imageUrl:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
    category: "Event Planning",
    author: {
      name: "Sarah Johnson",
      imageUrl:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    id: 2,
    title: "What are the best venues in the area?",
    description: "A comprehensive guide to local venues and their features.",
    imageUrl:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
    category: "Venues",
    author: {
      name: "Michael Chen",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    id: 3,
    title: "How to market your event effectively?",
    description: "Marketing strategies to increase event attendance.",
    imageUrl:
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=800&auto=format&fit=crop",
    category: "Marketing",
    author: {
      name: "Emily Davis",
      imageUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    },
  },
];

export default function RecentQuestions() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recent Questions
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn from our community&apos;s most frequently asked questions
            about event planning.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {questions.map((question) => (
            <article key={question.id} className="flex flex-col items-start">
              <Link href={`/articles/${question.id}`} className="w-full">
                <div className="relative w-full">
                  <DefaultImage
                    src={question.imageUrl}
                    alt={question.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    width={800}
                    height={450}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      Mar 16, 2020
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {question.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      {question.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {question.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <DefaultImage
                      src={question.author.imageUrl}
                      alt={question.author.name}
                      className="h-10 w-10 rounded-full bg-gray-100"
                      width={40}
                      height={40}
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {question.author.name}
                      </p>
                    </div>
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
