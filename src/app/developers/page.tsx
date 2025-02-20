"use client";

import PageLayout from "@/components/PageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBook,
  faLightbulb,
  faGears,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function DevelopersPage() {
  const [activeTab, setActiveTab] = useState("getting-started");

  const codeSnippet = `
const ConnecXit = require('connecxit-sdk');
const client = new ConnecXit({
  apiKey: 'your-api-key'
});

// Get available vendors
const vendors = await client.vendors.list({
  category: 'Photography',
  location: 'New York'
});
`;

  const tabs = [
    { id: "getting-started", label: "Getting Started" },
    { id: "api-reference", label: "API Reference" },
    { id: "sdks", label: "SDKs" },
    { id: "webhooks", label: "Webhooks" },
  ];

  const features = [
    {
      icon: faCode,
      title: "RESTful API",
      description:
        "Modern REST API with JSON responses and predictable resource-oriented URLs.",
    },
    {
      icon: faBook,
      title: "Documentation",
      description:
        "Comprehensive guides and API reference with interactive examples.",
    },
    {
      icon: faLightbulb,
      title: "Use Cases",
      description:
        "Example implementations and integration patterns for common scenarios.",
    },
    {
      icon: faGears,
      title: "SDKs & Tools",
      description: "Official SDKs for popular languages and frameworks.",
    },
  ];

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ConnecXit Developer Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build powerful event planning applications with our comprehensive
            suite of APIs and tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="w-6 h-6 text-orange-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Documentation Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-16">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === tab.id
                      ? "border-b-2 border-orange-500 text-orange-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">Example Request</span>
                <button
                  className="text-gray-400 hover:text-white"
                  onClick={() => navigator.clipboard.writeText(codeSnippet)}
                >
                  <FontAwesomeIcon icon={faCopy} className="w-4 h-4" />
                </button>
              </div>
              <pre className="text-gray-300 font-mono text-sm">
                <code>{codeSnippet}</code>
              </pre>
            </div>
            <div className="prose max-w-none">
              <h3>Quick Start Guide</h3>
              <p>
                Follow these steps to start integrating ConnecXit into your
                application:
              </p>
              <ol>
                <li>Sign up for a developer account</li>
                <li>Get your API keys from the dashboard</li>
                <li>Install the SDK for your platform</li>
                <li>Make your first API call</li>
              </ol>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Create a developer account and start building with ConnecXit today.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
            Sign Up for Free
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
