"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEllipsisH,
  faExclamationTriangle,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Business Info */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Ivy Dream Management Group, LLC
              </h1>
              <div className="flex items-center text-gray-600">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-4 h-4 mr-2"
                />
                <span>Based in Raleigh, NC</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-blue-500 hover:text-blue-600 font-medium">
                Add service
              </button>
              <button className="text-gray-400 hover:text-gray-500">
                <FontAwesomeIcon icon={faEllipsisH} className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">1 recommendation:</h2>
            <div className="bg-blue-50 rounded-lg p-6 relative">
              <div className="absolute top-4 right-4">
                <button className="text-gray-400 hover:text-gray-500">×</button>
              </div>
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                BASICS
              </div>
              <div className="flex items-start gap-4">
                <div className="relative">
                  <Image
                    src="/images/background-check.png"
                    alt="Background check"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-1">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 mb-4">
                    Background checks are important to customers.
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Get a quick background check
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Your Services */}
          <div>
            <h2 className="text-lg font-medium mb-4">Your services</h2>
            <p className="text-gray-600 mb-4">
              Add targeting preferences to get the jobs you want.
            </p>
            <Link
              href="/targeting-preferences"
              className="text-blue-500 hover:text-blue-600 block mb-8"
            >
              Targeting Preferences Guide
            </Link>

            {/* Service List */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Event Planner and Decorator services
                </h3>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      className="w-5 h-5 text-gray-400 mt-1"
                    />
                    <div>
                      <h4 className="font-medium mb-2">Balloon decorations</h4>
                      <p className="text-gray-600 mb-4">
                        Add targeting preferences to have this service appear in
                        search results and get leads.
                      </p>
                      <button className="text-blue-500 hover:text-blue-600 font-medium">
                        Add targeting preferences
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Stats */}
          <div className="mt-8 space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Activity this week</h3>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-4">
                <div>
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-gray-600">views</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-gray-600">leads</div>
                </div>
              </div>
              <Link
                href="/business-insights"
                className="flex items-center justify-between text-blue-500 hover:text-blue-600"
              >
                Business insights
                <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Spending this week</h3>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-bold">$0</div>
                  <div className="text-gray-600 text-sm">budget spent</div>
                  <div className="text-gray-400 text-sm">/ $0</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$0</div>
                  <div className="text-gray-600 text-sm">additional spent</div>
                </div>
              </div>
            </div>

            <Link
              href="/pro-rewards"
              className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-6 text-blue-500 hover:text-blue-600"
            >
              Pro rewards
              <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
