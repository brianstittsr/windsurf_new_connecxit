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

export default function FixAndGoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <div className="w-40 h-40 relative flex-shrink-0 rounded-full overflow-hidden border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=500&auto=format&fit=crop"
                alt="Fix&Go"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Fix&Go</h1>
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
                <span className="text-gray-500">(3 reviews)</span>
              </div>
              <div className="mt-4 flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
                  <span>Raleigh, NC</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
                  <span>Responds in about 5 min</span>
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
                Fix&Go is your one-stop solution for cleaning and maintenance
                services in Raleigh. We combine professional cleaning services
                with basic maintenance and repair work, offering a comprehensive
                service that keeps your home both clean and well-maintained.
                With 78 successful projects and growing, we pride ourselves on
                our quick response time and quality work.
              </p>
            </section>

            {/* Services Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Services
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "House Cleaning",
                  "Basic Home Repairs",
                  "Plumbing Maintenance",
                  "Deep Cleaning",
                  "Fixture Installation",
                  "Appliance Maintenance",
                  "Emergency Cleaning",
                  "Post-Repair Cleanup",
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
                    <span className="font-medium">Anna S.</span>
                  </div>
                  <p className="text-gray-600">
                    &quot;Roma did a great job, was punctual and left a clean
                    job behind. Helped me with a shower head that was leaking
                    after. Very professional and efficient service. Would
                    definitely use again!&quot;
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900">$90</div>
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
