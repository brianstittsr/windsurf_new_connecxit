import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faArchive,
  faPaperPlane,
  faStar,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface SidebarItem {
  icon:
    | typeof faInbox
    | typeof faArchive
    | typeof faPaperPlane
    | typeof faStar
    | typeof faCalendar;
  label: string;
  href: string;
  count?: number;
}

const sidebarItems: SidebarItem[] = [
  { icon: faInbox, label: "Unread", href: "/messages/unread", count: 0 },
  { icon: faArchive, label: "Archived", href: "/messages/archived", count: 0 },
  {
    icon: faPaperPlane,
    label: "Sent quotes",
    href: "/messages/sent",
    count: 0,
  },
  { icon: faStar, label: "Starred", href: "/messages/starred", count: 0 },
];

const statusItems = [
  { icon: faCalendar, label: "Not scheduled yet", color: "bg-gray-200" },
  { icon: faCalendar, label: "Scheduled", color: "bg-blue-200" },
  { icon: faCalendar, label: "Job done", color: "bg-green-200" },
  { icon: faCalendar, label: "No hire", color: "bg-red-200" },
];

export default function MessagesSidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-4">
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by customer name"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Main navigation */}
        <nav className="space-y-1 mb-8">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="w-4 h-4 text-gray-500"
                />
                <span>{item.label}</span>
              </div>
              {typeof item.count === "number" && (
                <span className="text-sm text-gray-500">{item.count}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Status filters */}
        <div className="space-y-2">
          {statusItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <div className={`w-2 h-2 rounded-full ${item.color}`} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Availability section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link
            href="/availability"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Review your availability and
            <br />
            tell us when you&apos;re busy
          </Link>
        </div>
      </div>
    </div>
  );
}
