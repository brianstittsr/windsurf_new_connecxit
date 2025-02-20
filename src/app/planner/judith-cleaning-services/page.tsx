import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faLocationDot,
  faClock,
  faPhone,
  faEnvelope,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import VendorActions from "@/components/VendorActions";

export default function JudithCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <div className="w-40 h-40 relative flex-shrink-0 rounded-full overflow-hidden border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=500&auto=format&fit=crop"
                alt="Judith Cleaning Services"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Judith Cleaning Services
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-emerald-600 font-medium">Great 5.0</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="w-4 h-4 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-500">(1 review)</span>
              </div>
              <div className="mt-4 flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
                  <span>Raleigh, NC</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
                  <span>Responds in about 16 min</span>
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
                Judith Cleaning Services provides professional and reliable
                cleaning services in the Raleigh area. With attention to detail
                and a commitment to customer satisfaction, we ensure your space
                is spotlessly clean and welcoming. Our personalized approach
                means we tailor our services to meet your specific needs and
                preferences.
              </p>
            </section>

            {/* Services Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Services
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Residential Cleaning",
                  "Deep Cleaning",
                  "Move-in/Move-out Cleaning",
                  "Recurring Cleaning Services",
                  "Bathroom Deep Cleaning",
                  "Kitchen Deep Cleaning",
                  "Customized Cleaning Plans",
                  "Eco-friendly Options",
                ].map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="w-4 h-4 text-green-500"
                    />
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
                    <span className="font-medium">Carmen F.</span>
                  </div>
                  <p className="text-gray-600">
                    &quot;She was on time, left my house really clean, I
                    couldn&apos;t even recognize it! Very professional and
                    thorough in her work. Would definitely recommend and hire
                    again.&quot;
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900">
                  Contact for price
                </div>
                <div className="text-gray-500">Customized quotes available</div>
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
