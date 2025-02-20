"use client";

import PageLayout from "@/components/PageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faChartLine,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function PartnerPage() {
  const benefits = [
    {
      icon: faHandshake,
      title: "Strategic Partnership",
      description:
        "Join forces with ConnecXit to expand your reach and grow your business.",
    },
    {
      icon: faChartLine,
      title: "Business Growth",
      description: "Access new markets and opportunities through our platform.",
    },
    {
      icon: faStar,
      title: "Quality Network",
      description: "Connect with top-tier event professionals and vendors.",
    },
    {
      icon: faUsers,
      title: "Community",
      description:
        "Be part of a thriving community of event planning professionals.",
    },
  ];

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Partner With Us
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Join forces with ConnecXit and grow your business in the event
            planning industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <FontAwesomeIcon
                      icon={benefit.icon}
                      className="w-6 h-6 text-orange-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Partner?
            </h2>
            <p className="text-gray-600 mb-6">
              Take the first step towards a successful partnership. Contact our
              team to discuss opportunities and learn more about how we can grow
              together.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
