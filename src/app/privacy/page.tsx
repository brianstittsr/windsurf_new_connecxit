import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last Updated: January 18, 2025</p>

      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            ConnecXit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-2">Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Name and contact information</li>
              <li>Payment information</li>
              <li>Profile information</li>
              <li>Service preferences</li>
              <li>Communication history</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">Usage Information</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Device information</li>
              <li>Log data</li>
              <li>Location data</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <div className="space-y-4">
            <p className="text-gray-700">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Communicate with you</li>
              <li>Improve our services</li>
              <li>Protect against fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
        </section>

        {/* Information Sharing */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
          <p className="text-gray-700 mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Service providers and business partners</li>
            <li>Other users as part of the service functionality</li>
            <li>Law enforcement when required</li>
            <li>Third parties in connection with a business transaction</li>
          </ul>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational security measures to protect your information. However, no system is completely secure, and we cannot guarantee the absolute security of your information.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <div className="space-y-4">
            <p className="text-gray-700">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </div>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our services are not intended for users under the age of 18. We do not knowingly collect information from children under 18.
          </p>
        </section>

        {/* International Data Transfers */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
          <p className="text-gray-700 mb-4">
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
          </p>
        </section>

        {/* Changes to Privacy Policy */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Changes to Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            For questions about this Privacy Policy, please contact us at:
          </p>
          <div className="text-gray-700">
            <p>Email: privacy@connecxit.com</p>
            <p>Address: [Company Address]</p>
          </div>
        </section>
      </div>
    </div>
  );
}