import React from 'react';
import Link from 'next/link';

export default function CaliforniaNotice() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">California Notice of Collection</h1>
      <p className="text-gray-600 mb-8">Last Updated: January 18, 2025</p>

      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-600 mb-4">
            This notice supplements ConnecXit&rsquo;s Privacy Policy and applies only to California residents.
          </p>
        </section>

        {/* Categories of Personal Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Categories of Personal Information We Collect</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Identifiers</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Name</li>
                <li>Email address</li>
                <li>Postal address</li>
                <li>Phone number</li>
                <li>IP address</li>
                <li>Account login credentials</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Commercial Information</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Service purchase history</li>
                <li>Service preferences</li>
                <li>Payment information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Internet Activity</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Browsing history</li>
                <li>Search history</li>
                <li>Interaction with our website</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Geolocation Data</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Physical location</li>
                <li>Service area preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Professional Information</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Business contact information</li>
                <li>Professional qualifications</li>
                <li>Work history</li>
                <li>Service provider credentials</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use of Personal Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Personal Information</h2>
          <p className="text-gray-700 mb-4">
            We use the personal information we collect for the following business purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Providing our services</li>
            <li>Processing payments</li>
            <li>Marketing and advertising</li>
            <li>Improving our services</li>
            <li>Security and fraud prevention</li>
            <li>Legal compliance</li>
          </ul>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights Under California Law</h2>
          <div className="space-y-4">
            <p className="text-gray-700">As a California resident, you have the following rights:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Right to know what personal information we collect</li>
              <li>Right to delete your personal information</li>
              <li>Right to correct inaccurate personal information</li>
              <li>Right to opt-out of the sale or sharing of personal information</li>
              <li>Right to limit use of sensitive personal information</li>
              <li>Right to non-discrimination for exercising your rights</li>
            </ul>
          </div>
        </section>

        {/* Exercising Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Exercising Your Rights</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              To exercise your rights under California law, you can:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Email us at privacy@connecxit.com</li>
              <li>Call us at 1-800-XXX-XXXX</li>
              <li>Visit our <Link href="/do-not-sell" className="text-orange-500 hover:text-orange-600">Do Not Sell My Personal Information</Link> page</li>
            </ul>
            <p className="text-gray-700">
              We will respond to your request within 45 days and may require additional information to verify your identity.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have questions about this notice or need to access it in an alternative format due to a disability, please contact:
          </p>
          <div className="text-gray-700">
            <p>ConnecXit Privacy Team</p>
            <p>Email: privacy@connecxit.com</p>
            <p>Phone: 1-800-XXX-XXXX</p>
            <p>Address: [Company Address]</p>
          </div>
        </section>
      </div>
    </div>
  );
}