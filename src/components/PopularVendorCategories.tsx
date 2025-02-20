"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpa,
  faUtensils,
  faCamera,
  faGuitar,
  faMusic,
  faCar,
  faCalendarCheck,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const categories = [
  {
    name: "Florist & Decor Services",
    icon: faSpa,
    href: "/vendors/florist-decor",
  },
  {
    name: "Catering Services",
    icon: faUtensils,
    href: "/vendors/catering",
  },
  {
    name: "Photography Services",
    icon: faCamera,
    href: "/vendors/photography",
  },
  {
    name: "Live Entertainment",
    icon: faGuitar,
    href: "/vendors/live-entertainment",
  },
  {
    name: "DJ Services",
    icon: faMusic,
    href: "/vendors/dj",
  },
  {
    name: "Transportation Services",
    icon: faCar,
    href: "/vendors/transportation",
  },
  {
    name: "Event Planning & Decor",
    icon: faCalendarCheck,
    href: "/vendors/event-planning",
  },
  {
    name: "Venue and Location Services",
    icon: faBuilding,
    href: "/vendors/venues",
  },
];

const PopularVendorCategories = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
        Popular Event Vendor Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-4 group-hover:bg-orange-200 transition-colors duration-200">
              <FontAwesomeIcon
                icon={category.icon}
                className="w-8 h-8 text-orange-500 group-hover:text-orange-600 transition-colors duration-200"
              />
            </div>
            <h3 className="text-center text-sm font-medium text-gray-900 group-hover:text-orange-500 transition-colors duration-200">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularVendorCategories;
