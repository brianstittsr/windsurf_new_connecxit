import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faEnvelope,
  faPhone,
  faComments,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

export default function Help() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I create an account?",
          a: "Click the 'Sign Up' button in the top right corner and follow the registration process. You'll need to provide basic information and verify your email address.",
        },
        {
          q: "How do I find a service provider?",
          a: "Use the search bar on the homepage to enter the type of service you need. You can filter results by location, price range, and ratings.",
        },
        {
          q: "How do payments work?",
          a: "We process payments securely through our platform. You can pay using credit/debit cards or other supported payment methods. Funds are held until the service is completed.",
        },
      ],
    },
    {
      category: "For Service Providers",
      questions: [
        {
          q: "How do I become a service provider?",
          a: "Visit our 'For Pros' page and click 'Join as a Pro'. You'll need to complete your profile, verify your identity, and provide any required credentials.",
        },
        {
          q: "How much does it cost to join?",
          a: "Basic registration is free. We charge a small percentage fee on completed transactions. View our pricing details on the Pro Sign Up page.",
        },
        {
          q: "How do I receive payments?",
          a: "Set up your payment information in your profile. Payments are automatically transferred to your linked bank account after service completion.",
        },
      ],
    },
    {
      category: "Bookings & Services",
      questions: [
        {
          q: "How do I cancel a booking?",
          a: "Go to 'My Bookings' in your account, select the booking you want to cancel, and follow the cancellation process. Please note our cancellation policies.",
        },
        {
          q: "What if I'm not satisfied with the service?",
          a: "Contact the service provider first to resolve the issue. If needed, you can open a dispute through our platform, and our support team will assist you.",
        },
        {
          q: "How do I leave a review?",
          a: "After service completion, you'll receive a notification to leave a review. You can rate the service and provide detailed feedback.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Help Center</h1>
      <p className="text-gray-600 mb-8">
        Find answers to common questions or contact our support team for
        assistance.
      </p>

      {/* Search */}
      <div className="mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full p-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Quick Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Quick Links</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="#faqs"
            className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
          >
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="text-orange-500 w-6 h-6 mr-3"
            />
            <span className="text-gray-700 font-medium">FAQs</span>
          </a>
          <a
            href="#contact"
            className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-orange-500 w-6 h-6 mr-3"
            />
            <span className="text-gray-700 font-medium">Contact Support</span>
          </a>
          <a
            href="/pro-resources"
            className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
          >
            <FontAwesomeIcon
              icon={faBook}
              className="text-orange-500 w-6 h-6 mr-3"
            />
            <span className="text-gray-700 font-medium">Pro Resources</span>
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((faq, faqIdx) => (
                  <div
                    key={faqIdx}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  >
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      {faq.q}
                    </h4>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Contact Support</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-orange-500 w-6 h-6 mr-3"
              />
              <h3 className="text-xl font-medium">Phone Support</h3>
            </div>
            <p className="text-gray-700 mb-2">Available 24/7</p>
            <p className="text-gray-700">1-800-XXX-XXXX</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-orange-500 w-6 h-6 mr-3"
              />
              <h3 className="text-xl font-medium">Email Support</h3>
            </div>
            <p className="text-gray-700 mb-2">Response within 24 hours</p>
            <p className="text-gray-700">support@connecxit.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faComments}
                className="text-orange-500 w-6 h-6 mr-3"
              />
              <h3 className="text-xl font-medium">Live Chat</h3>
            </div>
            <p className="text-gray-700 mb-2">Available 9 AM - 9 PM ET</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
              Start Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
