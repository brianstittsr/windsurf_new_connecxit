import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faUserCheck,
  faClipboardCheck,
  faExclamationTriangle,
  faPhone,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

export default function Safety() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Safety is Our Priority</h1>
      <p className="text-gray-600 mb-8">
        ConnecXit is committed to maintaining a safe and trusted environment for all users.
      </p>

      {/* Safety Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Safety Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faUserCheck} className="text-orange-500 w-6 h-6 mr-3" />
              <h3 className="text-xl font-medium">Identity Verification</h3>
            </div>
            <p className="text-gray-700">
              All service providers undergo a thorough verification process, including ID verification
              and background checks where applicable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faShieldAlt} className="text-orange-500 w-6 h-6 mr-3" />
              <h3 className="text-xl font-medium">Secure Payments</h3>
            </div>
            <p className="text-gray-700">
              All transactions are processed through our secure payment system with encryption
              and fraud protection.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faClipboardCheck} className="text-orange-500 w-6 h-6 mr-3" />
              <h3 className="text-xl font-medium">Verified Reviews</h3>
            </div>
            <p className="text-gray-700">
              Our review system only accepts feedback from verified customers who have
              actually used the service.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faLock} className="text-orange-500 w-6 h-6 mr-3" />
              <h3 className="text-xl font-medium">Data Protection</h3>
            </div>
            <p className="text-gray-700">
              Your personal and payment information is protected with industry-standard
              encryption and security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Safety Guidelines</h2>
        <div className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">For Clients</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Verify the service provider’s profile and reviews before booking
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Keep all communication and payments within the ConnecXit platform
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Clearly communicate your requirements and expectations
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Report any suspicious behavior immediately
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">For Service Providers</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Maintain accurate profile information and credentials
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Follow all safety protocols and industry standards
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Document all agreements and changes in the platform
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Carry appropriate insurance and licenses
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Emergency Information</h2>
        <div className="bg-red-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 w-6 h-6 mr-3" />
            <h3 className="text-xl font-medium">In Case of Emergency</h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">
              If you feel unsafe or encounter an emergency situation:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Call emergency services (911) if you’re in immediate danger</li>
              <li>Contact our 24/7 Trust & Safety team</li>
              <li>Document any relevant information or evidence</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Contact Our Safety Team</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faPhone} className="text-orange-500 w-6 h-6 mr-3" />
            <h3 className="text-xl font-medium">24/7 Support</h3>
          </div>
          <div className="space-y-2 text-gray-700">
            <p>Emergency Hotline: 1-800-XXX-XXXX</p>
            <p>Email: safety@connecxit.com</p>
            <p>In-app reporting available 24/7</p>
          </div>
        </div>
      </section>
    </div>
  );
}