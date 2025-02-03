'use client';

import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileScreen,
  faLock,
  faBolt,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export default function GetAppPage() {
  const features = [
    {
      icon: faMobileScreen,
      title: 'Easy Booking',
      description: 'Book and manage event vendors directly from your phone.',
    },
    {
      icon: faLock,
      title: 'Secure Payments',
      description: 'Safe and encrypted payment processing for all transactions.',
    },
    {
      icon: faBolt,
      title: 'Real-time Updates',
      description: 'Get instant notifications about your event planning progress.',
    },
    {
      icon: faMessage,
      title: 'Direct Messaging',
      description: 'Communicate with vendors through our built-in messaging system.',
    },
  ];

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Get the ConnecXit App
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Plan your events on the go with our powerful mobile app. Available for iOS and Android devices.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="flex items-center justify-center bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
                  <FontAwesomeIcon icon={faApple} className="w-8 h-8 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </button>
                <button className="flex items-center justify-center bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
                  <FontAwesomeIcon icon={faGooglePlay} className="w-8 h-8 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={feature.icon} className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - App Preview */}
            <div className="relative h-[600px] lg:h-[700px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    alt="ConnecXit mobile app"
                    src="/images/app/mobile-app-showcase.jpg"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}