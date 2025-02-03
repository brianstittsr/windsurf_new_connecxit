'use client';

import PageLayout from '@/components/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About ConnecXit</h1>
          <p className="text-lg text-gray-600 mb-8">
            Learn about ConnecXit and our mission to revolutionize event planning and vendor connections.
          </p>
          
          <div className="prose prose-lg">
            <h2>Our Mission</h2>
            <p>
              At ConnecXit, we’re dedicated to making event planning seamless and efficient. 
              We connect event planners with trusted vendors, making it easy to create 
              memorable experiences.
            </p>

            <h2>Our Story</h2>
            <p>
              Founded with a vision to transform the event planning industry, ConnecXit 
              has grown into a trusted platform that brings together event professionals 
              and clients in a seamless marketplace.
            </p>

            <h2>Our Values</h2>
            <ul>
              <li>Trust and Transparency</li>
              <li>Quality Service</li>
              <li>Innovation</li>
              <li>Customer Success</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We’re on a mission to transform the event planning industry by connecting talented professionals with clients who need their services.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}