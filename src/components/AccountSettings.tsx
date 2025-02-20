"use client";

import { useState, useEffect } from "react";

interface AccountSettingsProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  timezone: string;
  bio?: string;
  location?: string;
  website?: string;
  company?: string;
  title?: string;
  skills?: string[];
  interests?: string[];
  onSave: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    timezone: string;
    bio?: string;
    location?: string;
    website?: string;
    company?: string;
    title?: string;
    skills?: string[];
    interests?: string[];
  }) => void;
  onCancel: () => void;
}

const AccountSettings = ({
  firstName,
  lastName,
  email,
  phone,
  timezone,
  bio = "",
  location = "",
  website = "",
  company = "",
  title = "",
  skills = [],
  interests = [],
  onSave,
  onCancel,
}: AccountSettingsProps) => {
  console.log("AccountSettings - Initial props:", {
    firstName,
    lastName,
    email,
    phone,
    timezone,
    bio,
    location,
    website,
    company,
    title,
    skills,
    interests,
  });

  const [formData, setFormData] = useState({
    firstName,
    lastName,
    email,
    phone,
    timezone,
    bio,
    location,
    website,
    company,
    title,
    skills,
    interests,
  });

  useEffect(() => {
    console.log("AccountSettings - Props changed, updating form data");
    setFormData({
      firstName,
      lastName,
      email,
      phone,
      timezone,
      bio,
      location,
      website,
      company,
      title,
      skills,
      interests,
    });
  }, [
    firstName,
    lastName,
    email,
    phone,
    timezone,
    bio,
    location,
    website,
    company,
    title,
    skills,
    interests,
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (name: "skills" | "interests", value: string) => {
    const array = value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);
    setFormData((prev) => ({
      ...prev,
      [name]: array,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("AccountSettings - Submitting form data:", formData);
    onSave(formData);
  };

  console.log("AccountSettings - Current form data:", formData);

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="timezone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Timezone
            </label>
            <input
              type="text"
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="website"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Skills (comma-separated)
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills.join(", ")}
              onChange={(e) => handleArrayChange("skills", e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="interests"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Interests (comma-separated)
            </label>
            <input
              type="text"
              id="interests"
              name="interests"
              value={formData.interests.join(", ")}
              onChange={(e) => handleArrayChange("interests", e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountSettings;
