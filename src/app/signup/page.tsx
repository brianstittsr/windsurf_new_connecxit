'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual signup logic
    localStorage.setItem('user', JSON.stringify({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop'
    }));
    router.push('/');
  };

  const handleSocialSignup = (provider: string) => {
    // TODO: Implement social signup
    console.log(`Signing up with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-bold">
          Create your <span className="text-[#ff5722]">account</span>
        </h1>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <div className="mt-2 space-y-2 text-sm text-gray-500">
                Your password must:
                <ul className="list-disc pl-5 space-y-1">
                  <li>be 8 to 71 characters long</li>
                  <li>not contain your name or email</li>
                  <li>not be commonly used, easily guessed or contain any variation of the word &quot;ConnecXit&quot;</li>
                </ul>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              By clicking Create Account, you agree to the{' '}
              <Link href="/terms" className="text-[#ff5722]">
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-[#ff5722]">
                Privacy Policy
              </Link>
              .
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="mr-2" required />
              <label className="text-sm text-gray-600">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ff5722] hover:bg-[#f4511e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff5722]"
            >
              Create Account
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            <div className="text-sm text-gray-600 text-center">
              By clicking Sign up with Facebook or Sign up with{' '}
              <span className="text-[#ff5722]">Google</span>, you agree to the{' '}
              <Link href="/terms" className="text-[#ff5722]">
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-[#ff5722]">
                Privacy Policy
              </Link>
              .
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => handleSocialSignup('Facebook')}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Image src="/images/facebook-icon.png" alt="Facebook" width={20} height={20} className="mr-2" />
                Sign up with Facebook
              </button>

              <button
                type="button"
                onClick={() => handleSocialSignup('Google')}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Image src="/images/google-icon.png" alt="Google" width={20} height={20} className="mr-2" />
                Sign up with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
