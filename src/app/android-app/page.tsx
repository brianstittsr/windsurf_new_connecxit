import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendarAlt,
  faComments,
  faCreditCard,
  faChartLine,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function AndroidApp() {
  const features = [
    {
      icon: faBell,
      title: "Instant Notifications",
      description:
        "Get real-time updates about bookings, messages, and payments directly on your Android device.",
    },
    {
      icon: faCalendarAlt,
      title: "Smart Scheduling",
      description:
        "Manage your appointments and availability with our intuitive calendar interface.",
    },
    {
      icon: faComments,
      title: "Seamless Communication",
      description:
        "Chat with clients, share photos, and send updates all through the app.",
    },
    {
      icon: faCreditCard,
      title: "Secure Payments",
      description:
        "Process payments, track earnings, and manage your finances on the go.",
    },
    {
      icon: faChartLine,
      title: "Business Insights",
      description:
        "View analytics, track performance, and grow your business with detailed reports.",
    },
    {
      icon: faShieldAlt,
      title: "Enhanced Security",
      description:
        "Protect your account with fingerprint authentication and advanced security features.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ConnecXit Pro for Android
              </h1>
              <p className="text-lg mb-8">
                Manage your service business anywhere, anytime. Our powerful
                Android app puts everything you need right at your fingertips.
              </p>
              <div className="space-y-4">
                <a href="#" className="inline-block">
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                  />
                </a>
                <p className="text-sm opacity-80">
                  Requires Android 8.0 or later. Available on Google Play.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/android-app-preview.png"
                alt="ConnecXit Pro Android App"
                width={300}
                height={600}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need in Your Pocket
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-orange-500 w-8 h-8 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Pros Are Saying
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                &ldquo;The ConnecXit Android app is fantastic! The interface is
                smooth and intuitive, making it easy to manage my business on
                the go.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src="/images/testimonial-3.jpg"
                    alt="Michael R."
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Michael R.</p>
                  <p className="text-sm text-gray-500">
                    Electrician, Los Angeles
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                &ldquo;Being able to manage my schedule and process payments
                directly from my Android phone has been a game-changer for my
                business.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src="/images/testimonial-4.jpg"
                    alt="Rachel K."
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Rachel K.</p>
                  <p className="text-sm text-gray-500">Pet Groomer, Seattle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take Your Business Mobile?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of service professionals who are growing their
            business with ConnecXit Pro.
          </p>
          <a href="#" className="inline-block">
            <Image
              src="/images/google-play-badge.png"
              alt="Get it on Google Play"
              width={200}
              height={60}
            />
          </a>
        </div>
      </section>
    </div>
  );
}
