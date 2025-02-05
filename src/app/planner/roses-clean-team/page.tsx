import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot, faClock, faPhone, faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons';
import VendorActions from '@/components/VendorActions';

export default function RosesCleanTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <div className="w-40 h-40 relative flex-shrink-0 rounded-full overflow-hidden border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=500&auto=format&fit=crop"
                alt="Rose's Clean Team Inc"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Rose&apos;s Clean Team Inc</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-emerald-600 font-medium">Great 4.7</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : i < 4.7 ? 'text-yellow-200' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-500">(514 reviews)</span>
              </div>
              <div className="mt-4 flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
                  <span>Boston, MA</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
                  <span>Responds in about 4 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-2 space-y-8">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600">
                Rose&apos;s Clean Team Inc is a professional cleaning service based in Boston, specializing in residential and commercial cleaning. 
                With over 1,136 successful projects on ConnecXit and 319 similar jobs in your area, we have the experience and expertise to 
                deliver exceptional cleaning services that exceed your expectations.
              </p>
            </section>

            {/* Services Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Regular House Cleaning',
                  'Deep Cleaning',
                  'Move-in/Move-out Cleaning',
                  'Office Cleaning',
                  'Post-Construction Cleaning',
                  'Window Cleaning',
                  'Carpet Cleaning',
                  'Green Cleaning Options'
                ].map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviews</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className="w-4 h-4 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="font-medium">Tinika M.</span>
                  </div>
                  <p className="text-gray-600">
                    &quot;I couldn&apos;t be happier with the amazing job these ladies did for our home. 
                    Our home now looks move in ready thanks to Rose&apos;s Clean Team Inc. They were thorough, 
                    professional, and paid attention to every detail.&quot;
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900">$190</div>
                <div className="text-gray-500">Starting price</div>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-orange-500 text-white font-medium py-3 px-6 rounded hover:bg-orange-600 transition-colors">
                  Contact Now
                </button>
                <div className="flex items-center justify-center gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                    <span>Call</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                    <span>Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Actions */}
      <div className="py-16 bg-gray-50">
        <VendorActions isLoggedIn={false} />
      </div>
    </div>
  );
}
