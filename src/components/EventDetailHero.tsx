'use client';

import Image from 'next/image';

interface EventDetailHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function EventDetailHero({
  title = 'CHARLOTTE',
  subtitle = 'career fairs',
  backgroundImage = 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1600&auto=format&fit=crop'
}: EventDetailHeroProps) {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">

        {/* Title */}
        <h1 className="text-6xl font-bold text-white mb-2 tracking-wider [text-shadow:_2px_2px_8px_rgb(75_85_99_/_0.8)]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-white font-light tracking-wide [text-shadow:_1px_1px_4px_rgb(75_85_99_/_0.6)]">
          {subtitle}
        </p>
      </div>

      {/* Decorative curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-[60px] text-white fill-current"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,40 960,40 1440,0 L1440,60 L0,60 Z"
          />
        </svg>
      </div>
    </div>
  );
}
