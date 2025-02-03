'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';

interface User {
  name: string;
  email: string;
  avatar: string;
}

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('jobs');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Clear any existing user data to ensure logged out state
    localStorage.removeItem('user');
    setUser(null);
  }, []);

  const menuItems = [
    { name: 'Jobs', href: '/jobs', requiresAuth: false },
    { name: 'Messages', href: '/messages', requiresAuth: true },
    { name: 'Performance', href: '/performance', requiresAuth: true },
    { name: 'New', href: '/new', requiresAuth: true },
    { name: 'Services', href: '/services', requiresAuth: true },
    { name: 'Calendar', href: '/calendar', requiresAuth: true },
    { name: 'Profile', href: '/profile', requiresAuth: true },
  ];

  const filteredMenuItems = menuItems.filter((item) => !item.requiresAuth || user);

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
              {filteredMenuItems.map((item) => (
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
            {user ? (
              <>
                <button className="p-2 rounded-full text-gray-500 hover:text-gray-600">
                  <BellIcon className="h-6 w-6" />
                </button>
                <div className="h-8 w-8 rounded-full overflow-hidden">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/signin">
                  <span className="text-gray-500 hover:text-gray-700 text-sm font-medium cursor-pointer">
                    Sign In
                  </span>
                </Link>
                <Link href="/signup">
                  <span className="bg-[#ff5722] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#f4511e] cursor-pointer">
                    Sign Up
                  </span>
                </Link>
                <Link href="/pro-signup">
                  <span className="bg-[#ff5722] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#f4511e] cursor-pointer">
                    Join as a pro
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {filteredMenuItems.map((item) => (
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
