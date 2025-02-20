import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faSearch,
  faTags,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  const featuredPosts = [
    {
      id: 1,
      title: "10 Tips for Growing Your Service Business in 2025",
      excerpt:
        "Learn the latest strategies and best practices for expanding your service business in the current market.",
      image: "/images/blog/growing-business.jpg",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      category: "Business Growth",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "The Future of Home Services: AI and Automation",
      excerpt:
        "Discover how artificial intelligence and automation are transforming the home services industry.",
      image: "/images/blog/ai-automation.jpg",
      author: "Michael Chen",
      date: "January 12, 2025",
      category: "Technology",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Building Trust with Clients: A Complete Guide",
      excerpt:
        "Essential strategies for building and maintaining trust with your service clients.",
      image: "/images/blog/client-trust.jpg",
      author: "David Wilson",
      date: "January 10, 2025",
      category: "Client Relations",
      readTime: "10 min read",
    },
  ];

  const categories = [
    "Business Growth",
    "Technology",
    "Client Relations",
    "Marketing",
    "Industry News",
    "Tips & Tricks",
    "Success Stories",
    "Professional Development",
  ];

  const recentPosts = [
    {
      id: 4,
      title: "5 Essential Tools for Service Professionals",
      date: "January 8, 2025",
      category: "Tools",
    },
    {
      id: 5,
      title: "Marketing Your Services on Social Media",
      date: "January 5, 2025",
      category: "Marketing",
    },
    {
      id: 6,
      title: "Understanding Client Needs: A Deep Dive",
      date: "January 3, 2025",
      category: "Client Relations",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ConnecXit Blog
            </h1>
            <p className="text-xl mb-8">
              Insights, tips, and trends for service professionals
            </p>
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search articles..."
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

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-purple-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FontAwesomeIcon icon={faUser} className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="w-4 h-4 mr-2"
                    />
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Recent Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Categories */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/blog/category/${category.toLowerCase().replace(" ", "-")}`}
                    className="bg-gray-50 hover:bg-gray-100 px-4 py-3 rounded-lg text-center transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faTags}
                      className="mr-2 text-purple-600"
                    />
                    <span className="font-medium">{category}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <article
                    key={post.id}
                    className="border-b border-gray-100 pb-6 last:border-0"
                  >
                    <Link href={`/blog/${post.id}`} className="group">
                      <h3 className="font-medium mb-2 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs font-medium mr-2">
                          {post.category}
                        </span>
                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          className="w-4 h-4 mr-2"
                        />
                        <span>{post.date}</span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-purple-100 mb-8">
              Get the latest insights and tips delivered straight to your inbox
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
