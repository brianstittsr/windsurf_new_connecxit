import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faChartPie,
  faHandshake,
  faLightbulb,
  faShieldAlt,
  faStore,
  faUserTie,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function VendorResourceCenter() {
  const resources = [
    {
      title: "Vendor Success Guide",
      icon: faLightbulb,
      description: "Learn how to maximize your success on ConnecXit",
      links: [
        { text: "Getting Started Guide", url: "/vendor-resource-center/getting-started" },
        { text: "Best Practices", url: "/vendor-resource-center/best-practices" },
        { text: "Success Stories", url: "/vendor-resource-center/success-stories" }
      ]
    },
    {
      title: "Business Tools",
      icon: faStore,
      description: "Essential tools for managing your vendor business",
      links: [
        { text: "Inventory Management", url: "/vendor-resource-center/inventory" },
        { text: "Order Processing", url: "/vendor-resource-center/orders" },
        { text: "Analytics Dashboard", url: "/vendor-resource-center/analytics" }
      ]
    },
    {
      title: "Partner Network",
      icon: faHandshake,
      description: "Connect with service providers and grow your network",
      links: [
        { text: "Find Partners", url: "/vendor-resource-center/find-partners" },
        { text: "Partnership Programs", url: "/vendor-resource-center/programs" },
        { text: "Networking Events", url: "/vendor-resource-center/events" }
      ]
    },
    {
      title: "Support & Safety",
      icon: faShieldAlt,
      description: "Resources for secure and compliant operations",
      links: [
        { text: "Safety Guidelines", url: "/vendor-resource-center/safety" },
        { text: "Compliance Guide", url: "/vendor-resource-center/compliance" },
        { text: "Support Center", url: "/vendor-resource-center/support" }
      ]
    }
  ];

  const features = [
    {
      icon: faChartPie,
      title: "Market Insights",
      description: "Access detailed market analysis and trends"
    },
    {
      icon: faUsers,
      title: "Customer Management",
      description: "Tools to manage and grow your customer base"
    },
    {
      icon: faBuilding,
      title: "Business Operations",
      description: "Streamline your business operations"
    },
    {
      icon: faUserTie,
      title: "Professional Services",
      description: "Access professional services and support"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Vendor Resource Center
          </h1>
          <p className="text-xl mb-8">
            Everything you need to grow and manage your vendor business on ConnecXit
          </p>
          <div className="flex gap-4">
            <Link
              href="/vendor-signup"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Become a Vendor
            </Link>
            <Link
              href="/vendor-resource-center/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Resources & Tools</h2>
            <p className="text-gray-600">
              Access everything you need to succeed as a vendor
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100">
                  <FontAwesomeIcon
                    icon={resource.icon}
                    className="text-blue-600 w-8 h-8 mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {resource.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.url}
                          className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                        >
                          <span className="mr-2">→</span>
                          {link.text}
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vendor Features</h2>
            <p className="text-gray-600">
              Powerful tools to help you grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-blue-600 w-8 h-8 mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of successful vendors who are growing their business with ConnecXit. Get access to our full suite of tools and resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/vendor-signup"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/vendor-resource-center/demo"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}