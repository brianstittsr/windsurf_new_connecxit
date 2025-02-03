import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faChartLine,
  faClock,
  faHandshake,
  faLightbulb,
  faShieldAlt,
  faTools,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ProResources() {
  const resources = [
    {
      category: "Getting Started",
      icon: faBook,
      items: [
        {
          title: "Complete Guide to ConnecXit",
          description: "Learn everything you need to know about using ConnecXit as a service provider.",
          link: "/pro-resources/complete-guide"
        },
        {
          title: "Setting Up Your Profile",
          description: "Tips and best practices for creating an attractive professional profile.",
          link: "/pro-resources/profile-setup"
        },
        {
          title: "Pricing Your Services",
          description: "Guidelines for setting competitive and profitable rates.",
          link: "/pro-resources/pricing-guide"
        }
      ]
    },
    {
      category: "Business Growth",
      icon: faChartLine,
      items: [
        {
          title: "Marketing Your Services",
          description: "Strategies to attract more clients and grow your business.",
          link: "/pro-resources/marketing"
        },
        {
          title: "Client Retention",
          description: "Tips for building long-term client relationships.",
          link: "/pro-resources/client-retention"
        },
        {
          title: "Expanding Your Business",
          description: "Guide to scaling your service business effectively.",
          link: "/pro-resources/expansion"
        }
      ]
    },
    {
      category: "Best Practices",
      icon: faLightbulb,
      items: [
        {
          title: "Service Excellence",
          description: "Guidelines for delivering outstanding service quality.",
          link: "/pro-resources/service-excellence"
        },
        {
          title: "Client Communication",
          description: "Effective communication strategies for service professionals.",
          link: "/pro-resources/communication"
        },
        {
          title: "Time Management",
          description: "Tips for optimizing your schedule and productivity.",
          link: "/pro-resources/time-management"
        }
      ]
    }
  ];

  const tools = [
    {
      icon: faClock,
      title: "Scheduling Tools",
      description: "Manage your availability and bookings efficiently"
    },
    {
      icon: faTools,
      title: "Business Tools",
      description: "Essential tools for running your service business"
    },
    {
      icon: faShieldAlt,
      title: "Safety Resources",
      description: "Guidelines and tools for maintaining safety"
    },
    {
      icon: faHandshake,
      title: "Client Management",
      description: "Tools for managing client relationships"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pro Resources
          </h1>
          <p className="text-xl mb-8">
            Everything you need to succeed as a service provider on ConnecXit
          </p>
          <div className="flex gap-4">
            <Link
              href="/pro-signup"
              className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/help"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Get Help
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Learning Paths</h2>
            <p className="text-gray-600">
              Choose your path and start learning at your own pace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100">
                  <FontAwesomeIcon
                    icon={category.icon}
                    className="text-orange-500 w-8 h-8 mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{category.category}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link
                          href={item.link}
                          className="block hover:bg-gray-50 -mx-6 px-6 py-3 transition-colors"
                        >
                          <h4 className="font-medium mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Tools</h2>
            <p className="text-gray-600">
              Access the tools you need to run your business effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={tool.icon}
                  className="text-orange-500 w-8 h-8 mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <FontAwesomeIcon
                  icon={faUserGraduate}
                  className="text-orange-500 w-12 h-12 mb-6"
                />
                <h2 className="text-3xl font-bold mb-4">
                  Professional Development
                </h2>
                <p className="text-gray-300 mb-6">
                  Take your skills to the next level with our professional development resources, training programs, and certification courses.
                </p>
                <Link
                  href="/pro-resources/training"
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Explore Training Programs
                </Link>
              </div>
              <div className="flex-1 text-center">
                <img
                  src="/images/professional-development.svg"
                  alt="Professional Development"
                  className="max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}