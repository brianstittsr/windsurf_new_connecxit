import React from 'react';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-600 mb-8">Last Updated: January 18, 2025</p>

      <div className="space-y-8">
        {/* Agreement to Terms */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing or using ConnecXit's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing ConnecXit.
          </p>
        </section>

        {/* Services Description */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
          <p className="text-gray-700 mb-4">
            ConnecXit provides a platform connecting service professionals with clients seeking their services. Our platform includes features for scheduling, payment processing, messaging, and review management.
          </p>
        </section>

        {/* User Accounts */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="text-gray-700">
              You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
          </div>
        </section>

        {/* Professional Service Providers */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Professional Service Providers</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Service providers must:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Maintain accurate profile information</li>
              <li>Provide services as described</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Maintain appropriate insurance coverage</li>
              <li>Respond to client communications in a timely manner</li>
            </ul>
          </div>
        </section>

        {/* Payments and Fees */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Payments and Fees</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              ConnecXit charges service providers a platform fee for using our services. All fees are clearly disclosed before any transaction. We reserve the right to modify our fee structure with appropriate notice.
            </p>
            <p className="text-gray-700">
              Payment processing is handled through secure third-party payment processors. Users agree to their terms of service when making payments through our platform.
            </p>
          </div>
        </section>

        {/* Reviews and Ratings */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Reviews and Ratings</h2>
          <p className="text-gray-700 mb-4">
            Reviews must be honest, accurate, and based on actual experiences. We reserve the right to remove reviews that violate our content guidelines or appear fraudulent.
          </p>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            The Service and its original content, features, and functionality are owned by ConnecXit and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            ConnecXit shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
          </p>
        </section>

        {/* Termination */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <p className="text-gray-700 mb-4">
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Service will immediately cease.
          </p>
        </section>

        {/* Changes to Terms */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify or replace these Terms at any time. Material changes will be notified to users at least 30 days before they become effective.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms, please contact us at legal@connecxit.com.
          </p>
        </section>
      </div>
    </div>
  );
}