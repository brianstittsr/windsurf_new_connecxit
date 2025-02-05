'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const VendorSearch = () => {
  const router = useRouter();
  const [isVendorSearch, setIsVendorSearch] = useState(false);
  const [eventDate, setEventDate] = useState<Date | null>(null);
  const [vendorType, setVendorType] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams({
      type: isVendorSearch ? 'vendor' : 'planner',
      date: eventDate ? eventDate.toISOString() : '',
      category: vendorType,
      location: zipCode
    });
    router.push(`/searchresults?${searchParams.toString()}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      {/* Toggle Buttons */}
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-end space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded transition-colors ${
              !isVendorSearch
                ? 'bg-orange-500 text-white'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setIsVendorSearch(false)}
          >
            List an Event Pro
          </button>
          <button
            className={`px-4 py-2 rounded transition-colors ${
              isVendorSearch
                ? 'bg-orange-500 text-white'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setIsVendorSearch(true)}
          >
            Find Event Vendor(s)
          </button>
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          {/* Event Date Picker */}
          <div className="relative">
            <DatePicker
              selected={eventDate}
              onChange={(date: Date | null) => date && setEventDate(date)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholderText="Select event date"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <FontAwesomeIcon icon={faCalendar} className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Vendor/Planner Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isVendorSearch ? 'What type of vendors do you need?' : 'What Type of Event Planner Do You Need?'}
            </label>
            <div className="relative">
              <select
                className="w-full p-3 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none"
                value={vendorType}
                onChange={(e) => setVendorType(e.target.value)}
              >
                <option value="">
                  {isVendorSearch ? 'Select vendor type' : 'Select a planner type'}
                </option>
                {isVendorSearch ? (
                  <>
                    <option value="catering">Catering</option>
                    <option value="photography">Photography</option>
                    <option value="venue">Venue</option>
                    <option value="music">Music & Entertainment</option>
                    <option value="decor">Decor & Flowers</option>
                  </>
                ) : (
                  <>
                    <option value="wedding">Wedding Planner</option>
                    <option value="corporate">Corporate Event Planner</option>
                    <option value="party">Party Planner</option>
                    <option value="social">Social Event Planner</option>
                  </>
                )}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* ZIP Code Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter ZIP code"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              maxLength={5}
              pattern="[0-9]*"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default VendorSearch;
