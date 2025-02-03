'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

interface Event {
  id: number;
  title: string;
  type: 'job' | 'meeting' | 'personal';
  startTime: string;
  endTime: string;
  location: string;
  client?: string;
  status: 'upcoming' | 'in-progress' | 'completed';
}

export default function CalendarPage() {
  // Sample events data
  const events: Event[] = [
    {
      id: 1,
      title: "Wedding Photography - Johnson Wedding",
      type: "job",
      startTime: "10:00 AM",
      endTime: "6:00 PM",
      location: "Grand Plaza Hotel",
      client: "Sarah Johnson",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Client Consultation",
      type: "meeting",
      startTime: "2:00 PM",
      endTime: "3:00 PM",
      location: "Virtual Meeting",
      client: "Michael Chen",
      status: "upcoming"
    }
  ];

  // Generate calendar grid
  const generateCalendarDays = () => {
    const firstDay = new Date();
    const lastDay = new Date();
    lastDay.setMonth(lastDay.getMonth() + 1);
    lastDay.setDate(0);
    const days = [];
    
    // Add previous month's days
    const firstDayOfWeek = firstDay.getDay();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = new Date(firstDay);
      day.setDate(day.getDate() - i - 1);
      days.push({ date: day, isCurrentMonth: false });
    }
    
    // Add current month's days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        date: new Date(firstDay.getFullYear(), firstDay.getMonth(), i),
        isCurrentMonth: true
      });
    }
    
    // Add next month's days to complete the grid
    const remainingDays = 42 - days.length; // 6 rows × 7 days
    for (let i = 1; i <= remainingDays; i++) {
      const day = new Date(lastDay);
      day.setDate(day.getDate() + i);
      days.push({ date: day, isCurrentMonth: false });
    }
    
    return days;
  };

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const calendarDays = generateCalendarDays();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Calendar Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                New Event
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-2 rounded-lg text-gray-500 hover:text-gray-700`}
                >
                  Month
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-gray-500 hover:text-gray-700`}
                >
                  Week
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-gray-500 hover:text-gray-700`}
                >
                  Day
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="px-4 py-2 font-medium text-gray-900">
                  {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 pr-8">
            {/* Mini Calendar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="text-center mb-4">
                <h3 className="font-medium text-gray-900">
                  {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h3>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {weekDays.map(day => (
                  <div key={day} className="text-center text-xs text-gray-500">
                    {day}
                  </div>
                ))}
                {calendarDays.slice(0, 35).map((day, index) => (
                  <button
                    key={index}
                    className={`text-center text-sm p-1 rounded-full ${
                      day.isCurrentMonth
                        ? 'text-gray-900 hover:bg-gray-100'
                        : 'text-gray-400'
                    }`}
                  >
                    {day.date.getDate()}
                  </button>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-medium text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map(event => (
                  <div
                    key={event.id}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <div className="mt-2 space-y-1 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faClock} className="w-4 mr-2" />
                        {event.startTime} - {event.endTime}
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 mr-2" />
                        {event.location}
                      </div>
                      {event.client && (
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faUser} className="w-4 mr-2" />
                          {event.client}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Calendar Grid */}
          <div className="flex-1 bg-white rounded-lg shadow-sm">
            {/* Week days header */}
            <div className="grid grid-cols-7 border-b">
              {weekDays.map(day => (
                <div
                  key={day}
                  className="px-2 py-3 text-sm font-medium text-gray-900 text-center"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 grid-rows-6 h-full">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`min-h-[120px] p-2 border-b border-r ${
                    day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-sm ${
                        day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                      }`}
                    >
                      {day.date.getDate()}
                    </span>
                    {day.isCurrentMonth && (
                      <button className="p-1 text-gray-400 hover:text-indigo-600">
                        <FontAwesomeIcon icon={faPlus} className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                  {/* Event indicators would go here */}
                  <div className="space-y-1">
                    {events.map(event => (
                      <div
                        key={event.id}
                        className="px-2 py-1 text-xs rounded bg-indigo-100 text-indigo-700 truncate"
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
