import React from "react";

export default function DoNotSell() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Do Not Sell or Share My Personal Information
      </h1>
      <p className="text-gray-600 mb-8">Last Updated: January 18, 2025</p>

      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Privacy Choices</h2>
          <p className="text-gray-700 mb-4">
            Under California law, you have the right to opt-out of the sale or
            sharing of your personal information. This page explains your rights
            and how to exercise them.
          </p>
        </section>

        {/* What This Means */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What This Means</h2>
          <div className="space-y-4">
            <p className="text-gray-700">When you opt out, ConnecXit will:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Stop selling your personal information to third parties</li>
              <li>
                Stop sharing your personal information for cross-context
                behavioral advertising
              </li>
              <li>Maintain a record of your privacy choices</li>
              <li>Honor your request across all our platforms and services</li>
            </ul>
          </div>
        </section>

        {/* Opt-Out Form */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Submit Your Request</h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="optOutSale"
                    name="optOutSale"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="optOutSale" className="text-sm text-gray-700">
                    I want to opt out of the sale of my personal information
                  </label>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="optOutSharing"
                    name="optOutSharing"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor="optOutSharing"
                    className="text-sm text-gray-700"
                  >
                    I want to opt out of the sharing of my personal information
                    for cross-context behavioral advertising
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Submit Request
              </button>
            </div>
          </form>
        </section>

        {/* Additional Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Additional Information
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">After submitting your request:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>We will process your request within 15 business days</li>
              <li>You may receive a confirmation email</li>
              <li>We may need to verify your identity</li>
              <li>Your choices will be valid for 12 months</li>
            </ul>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
          <p className="text-gray-700 mb-4">
            If you have questions about this process or need assistance, please
            contact us:
          </p>
          <div className="text-gray-700">
            <p>Email: privacy@connecxit.com</p>
            <p>Phone: 1-800-XXX-XXXX</p>
            <p>Hours: Monday - Friday, 9:00 AM - 5:00 PM PT</p>
          </div>
        </section>
      </div>
    </div>
  );
}
