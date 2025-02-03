import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faPinterest, faFacebook } from '@fortawesome/free-brands-svg-icons';

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title: string;
  subtitle?: string;
  links: FooterLink[];
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: 'ConnecXit',
      subtitle: 'Consider it done.',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Partner with us', href: '/partner' },
        { text: 'For developers', href: '/developers' },
        { text: 'Careers', href: '/careers' },
        { text: 'Press', href: '/press' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Customers',
      links: [
        { text: 'How to use ConnecXit', href: '/how-to-use' },
        { text: 'Get the app', href: '/app' },
        { text: 'Services near me', href: '/services' },
        { text: 'Cost estimates', href: '/cost-estimates' },
        { text: 'Vendor Resource Center', href: '/resource-center' },
        { text: 'Event Planner inspiration pictures', href: '/inspiration' },
      ],
    },
    {
      title: 'Pros',
      links: [
        { text: 'ConnecXit for pros', href: '/pros' },
        { text: 'Sign up as a pro', href: '/signup' },
        { text: 'Community', href: '/community' },
        { text: 'Pro Resources', href: '/resources' },
        { text: 'Pro reviews', href: '/reviews' },
        { text: 'iPhone app for pros', href: '/ios-app' },
        { text: 'Android app for pros', href: '/android-app' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Help', href: '/help' },
        { text: 'Safety', href: '/safety' },
        { text: 'Terms of Use', href: '/terms' },
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'CA Notice At Collection', href: '/ca-notice' },
        { text: 'Do not Sell or Share My Personal Information', href: '/privacy-choices' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {section.title}
              </h3>
              {section.subtitle && (
                <p className="mt-1 text-sm text-gray-500">{section.subtitle}</p>
              )}
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex space-x-6">
              <Link href="https://instagram.com" className="text-gray-400 hover:text-gray-500">
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-500">
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
              </Link>
              <Link href="https://pinterest.com" className="text-gray-400 hover:text-gray-500">
                <FontAwesomeIcon icon={faPinterest} className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com" className="text-gray-400 hover:text-gray-500">
                <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm text-gray-500"> {currentYear} ConnecXit, Inc.</p>
              <div className="flex items-center">
                <span className="text-sm text-blue-600">ConnecXit Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
