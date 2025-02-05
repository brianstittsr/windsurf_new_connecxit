'use client';

interface EventDetailDescriptionProps {
  title: string;
  description: string;
}

export default function EventDetailDescription({
  title = 'ABOUT THIS CHARLOTTE JOB FAIR',
  description = 'Join us at the highly anticipated Charlotte Job Fair on February 5, 2025! If you\'re seeking exciting job opportunities in the Charlotte area, this is an event you won\'t want to miss. Best Hire Career Fairs has a proven track record of organizing exceptional hiring events nationwide for the past seven years. What sets us apart is our ability to identify the specific skills and experiences employers seek and connect them with top-notch candidates like yourself. Whether you\'re craving a fresh start or eager to take your career to new heights, this event is tailor-made for you. Mark your calendar and arrive early - doors open at 11 a.m. sharp until 2 p.m.'
}: EventDetailDescriptionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl">
        <h2 className="text-[32px] font-bold text-[#2E2C3D] mb-6">
          {title}
        </h2>
        <div className="prose prose-lg text-gray-600">
          <p className="text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
