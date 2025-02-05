'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';

const Navigation = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { name: 'Messages', href: '/messages', requiresAuth: true },
    { name: 'Performance', href: '/performance', requiresAuth: true },
    { name: 'New', href: '/new', requiresAuth: true },
    { name: 'Services', href: '/services', requiresAuth: true },
    { name: 'Calendar', href: '/calendar', requiresAuth: true },
  ];

  const filteredMenuItems = menuItems.filter(
    (item) => !item.requiresAuth || status === 'authenticated'
  );

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

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
                    pathname === item.href
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {status === 'authenticated' && session?.user ? (
              <>
                <Link
                  href="/inbox"
                  className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                >
                  Inbox
                </Link>
                <button className="p-2 rounded-full text-gray-500 hover:text-gray-600">
                  <BellIcon className="h-6 w-6" />
                </button>
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-3 focus:outline-none"
                  >
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      {session.user.image ? (
                        <Image
                          src={session.user.image}
                          alt={session.user.firstName + ' ' + session.user.lastName || 'User avatar'}
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                          priority
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-orange-100 text-orange-600 text-sm font-bold">
                          {session.user.firstName?.[0]?.toUpperCase() || '?'}
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {session.user.firstName} {session.user.lastName}
                    </span>
                    <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        <Link
                          href="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Profile
                        </Link>
                        <button
                          onClick={() => {
                            setIsDropdownOpen(false);
                            signOut({ callbackUrl: '/' });
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
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
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
