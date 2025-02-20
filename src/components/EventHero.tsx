"use client";

import { useState } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "TANGO",
    subtitle: "LESSONS",
    image:
      "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=800&auto=format&fit=crop",
    buttonText: "Book Lesson",
  },
  {
    id: 2,
    title: "SINGLES SPEED",
    subtitle: "DATING",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop",
    buttonText: "Join Event",
  },
  {
    id: 3,
    title: "SOULMATES OR FIRST DATES",
    subtitle: "WE'VE GOT JUST THE THING.",
    image:
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&auto=format&fit=crop",
    buttonText: "Plan Valentine's Day",
  },
];

export default function EventHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] bg-red-800 overflow-hidden">
      {/* Main carousel container */}
      <div className="relative w-full h-full">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-full relative flex items-center justify-center px-4"
            >
              <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
                    <h2 className="text-white font-bold text-4xl">
                      {slide.title}
                    </h2>
                    <p className="text-white text-2xl mt-2">{slide.subtitle}</p>
                    <button className="mt-4 px-6 py-2 bg-white text-red-800 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
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
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
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

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
