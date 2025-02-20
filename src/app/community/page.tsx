import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faComments,
  faHandshake,
  faLightbulb,
  faSearch,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Community() {
  const discussions = [
    {
      id: 1,
      title: "Best practices for client communication",
      author: "Sarah M.",
      avatar: "/images/avatars/sarah.jpg",
      category: "Best Practices",
      replies: 24,
      views: 156,
      lastActivity: "10 minutes ago",
    },
    {
      id: 2,
      title: "How do you handle last-minute cancellations?",
      author: "Michael R.",
      avatar: "/images/avatars/michael.jpg",
      category: "Business Tips",
      replies: 18,
      views: 98,
      lastActivity: "1 hour ago",
    },
    {
      id: 3,
      title: "Recommended tools for scheduling",
      author: "David L.",
      avatar: "/images/avatars/david.jpg",
      category: "Tools & Resources",
      replies: 32,
      views: 245,
      lastActivity: "2 hours ago",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Service Provider Networking Event",
      date: "January 25, 2025",
      time: "6:00 PM - 8:00 PM EST",
      location: "Virtual",
      attendees: 156,
      image: "/images/events/networking.jpg",
    },
    {
      id: 2,
      title: "Business Growth Workshop",
      date: "January 30, 2025",
      time: "2:00 PM - 4:00 PM EST",
      location: "Virtual",
      attendees: 89,
      image: "/images/events/workshop.jpg",
    },
  ];

  const categories = [
    {
      name: "General Discussion",
      icon: faComments,
      topics: 245,
      color: "blue",
    },
    {
      name: "Business Growth",
      icon: faLightbulb,
      topics: 189,
      color: "green",
    },
    {
      name: "Networking",
      icon: faHandshake,
      topics: 156,
      color: "purple",
    },
    {
      name: "Success Stories",
      icon: faUsers,
      topics: 134,
      color: "orange",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ConnecXit Community
            </h1>
            <p className="text-xl mb-8">
              Connect, share, and grow with other service professionals
            </p>
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search discussions..."
                className="w-full px-6 py-4 rounded-lg text-gray-900 pl-12"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Discussion Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/community/category/${category.name.toLowerCase().replace(" ", "-")}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all group"
              >
                <div className={`text-${category.color}-500 mb-4`}>
                  <FontAwesomeIcon icon={category.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.topics} topics</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recent Discussions</h2>
            <Link
              href="/community/discussions"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              View All
            </Link>
          </div>
          <div className="space-y-6">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={discussion.avatar}
                    alt={discussion.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <Link
                      href={`/community/discussion/${discussion.id}`}
                      className="text-lg font-medium hover:text-indigo-600 transition-colors"
                    >
                      {discussion.title}
                    </Link>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                      <span>{discussion.author}</span>
                      <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded text-xs">
                        {discussion.category}
                      </span>
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                      <span>Last activity: {discussion.lastActivity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="w-4 h-4 mr-2"
                      />
                      <span>
                        {event.date} • {event.time}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faVideo}
                        className="w-4 h-4 mr-2"
                      />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faUsers}
                        className="w-4 h-4 mr-2"
                      />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl mb-8">
            Connect with thousands of service professionals, share experiences,
            and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Now
            </Link>
            <Link
              href="/community/guidelines"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Community Guidelines
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
