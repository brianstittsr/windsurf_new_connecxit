'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

const Hero = () => {
  const words = [
    'Event Planning',
    'Event Photographers',
    'Event Transportation',
    'Event Flowers',
    "Event DJ's",
    'Event Caterers',
    'Event Entertainment'
  ];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomIndex = useCallback((currentIndex: number): number => {
    const newIndex = Math.floor(Math.random() * (words.length - 1));
    // If we randomly got the same index, shift by 1 to avoid repetition
    return newIndex >= currentIndex ? newIndex + 1 : newIndex;
  }, [words.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex(prevIndex => getRandomIndex(prevIndex));
        setIsAnimating(false);
      }, 500); // Half of the transition time
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [getRandomIndex]);

  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="circle-1 absolute w-[800px] h-[800px] rounded-full bg-orange-100/50 -top-[400px] -left-[200px]"></div>
        <div className="circle-2 absolute w-[600px] h-[600px] rounded-full bg-orange-200/50 top-[100px] -right-[300px]"></div>
        <div className="circle-3 absolute w-[500px] h-[500px] rounded-full bg-orange-300/30 bottom-[-200px] left-[10%]"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/icon-512.png"
              alt="ConnecXit Logo"
              width={192}
              height={192}
              className="rounded-full"
              priority
            />
          </div>
          
          {/* Heading with animated text */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="relative inline-block">
              <span
                className={`inline-block transition-transform duration-500 ${
                  isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}
                style={{
                  transformOrigin: 'center bottom'
                }}
              >
                {words[currentWordIndex]}
              </span>
              <span className="text-orange-500">,</span>
            </span>
            <br />
            made easy.
          </h1>
        </div>
      </div>

      {/* Add styles for the animations */}
      <style jsx>{`
        @keyframes slideUp {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        @keyframes slideDown {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes floatCircle1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(50px, 30px);
          }
        }
        @keyframes floatCircle2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, 40px);
          }
        }
        @keyframes floatCircle3 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }
        .circle-1 {
          animation: floatCircle1 12s ease-in-out infinite;
        }
        .circle-2 {
          animation: floatCircle2 15s ease-in-out infinite;
        }
        .circle-3 {
          animation: floatCircle3 13s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
