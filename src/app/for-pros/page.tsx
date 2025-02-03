'use client';

import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faCalendarCheck,
  faUserGroup,
  faShieldHalved,
  faArrowRight,
  faStar,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

interface Feature {
  icon: any;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export default function ForProsPage() {
  const features: Feature[] = [
    {
      icon: faChartLine,
      title: 'Grow Your Business',
      description: 'Access a large network of potential clients and expand your reach.',
    },
    {
      icon: faCalendarCheck,
      title: 'Easy Scheduling',
      description: 'Manage your bookings and calendar all in one place.',
    },
    {
      icon: faUserGroup,
      title: 'Client Management',
      description: 'Keep track of client communications and preferences.',
    },
    {
      icon: faShieldHalved,
      title: 'Secure Payments',
      description: 'Get paid safely and on time with our secure payment system.',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Owner',
      company: 'Elegant Events Photography',
      image: '/images/testimonials/sarah-johnson.jpg',
      quote: 'ConnecXit has transformed my business. I\'ve seen a 200% increase in bookings since joining.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Director',
      company: 'Golden Gate Catering',
      image: '/images/testimonials/michael-chen.jpg',
      quote: 'The platform makes it easy to showcase our services and connect with quality clients.',
      rating: 5,
    },
  ];

  const benefits = [
    'Access to thousands of potential clients',
    'Professional profile and portfolio',
    'Secure payment processing',
    'Client messaging system',
    'Calendar management',
    'Mobile app access',
    'Marketing tools',
    'Analytics dashboard',
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Grow Your Event Business with ConnecXit
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of successful event professionals who trust ConnecXit to grow their business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup-pro"
                  className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Get Started
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
                </Link>
                <button className="inline-flex items-center justify-center bg-white text-orange-500 px-8 py-4 rounded-lg font-medium border-2 border-orange-500 hover:bg-orange-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=1000&fit=crop"
                alt="Event Professional"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools and features you need to manage and grow your event business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={feature.icon} className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Benefits of Joining ConnecXit
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/features/dashboard-preview.jpg"
                alt="Benefits"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
          What Pros Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="w-5 h-5 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of successful event professionals on ConnecXit.
            </p>
            <Link
              href="/signup-pro"
              className="inline-flex items-center justify-center bg-white text-orange-500 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Sign Up Now
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}