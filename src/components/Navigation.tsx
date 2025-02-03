'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('jobs');

  const menuItems = [
    { name: 'Jobs', href: '/jobs' },
    { name: 'Messages', href: '/messages' },
    { name: 'Performance', href: '/performance' },
    { name: 'New', href: '/new' },
    { name: 'Services', href: '/services' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Profile', href: '/profile' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/images/icon-512.png"
                  alt="ConnecXit Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </Link>
            </div>

            {/* Navigation Items */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeItem === item.name.toLowerCase()
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveItem(item.name.toLowerCase())}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Referral text */}
            <span className="hidden sm:inline-flex text-sm text-green-600">
              Refer pros, Get up to $500
            </span>

            {/* Notification bell */}
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-600">
              <BellIcon className="h-6 w-6" />
            </button>

            {/* Profile image */}
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                activeItem === item.name.toLowerCase()
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
              onClick={() => setActiveItem(item.name.toLowerCase())}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
