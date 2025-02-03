'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBuilding,
  faBriefcase,
  faImage,
  faCheck,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface FormStep {
  title: string;
  description: string;
  icon: any;
}

export default function ProSignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Business Information
    businessName: '',
    businessType: '',
    website: '',
    location: '',
    
    // Services
    serviceCategories: [] as string[],
    priceRange: '',
    experience: '',
    
    // Portfolio
    portfolioImages: [] as string[],
    description: '',

    // Terms
    acceptTerms: false,
    acceptPrivacy: false,
    acceptCommunications: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const steps: FormStep[] = [
    {
      title: 'Personal Information',
      description: 'Tell us about yourself',
      icon: faUser,
    },
    {
      title: 'Business Details',
      description: 'Share your business information',
      icon: faBuilding,
    },
    {
      title: 'Services',
      description: 'What services do you offer?',
      icon: faBriefcase,
    },
    {
      title: 'Portfolio',
      description: 'Showcase your work',
      icon: faImage,
    },
  ];

  const serviceCategories = [
    'Photography',
    'Videography',
    'Catering',
    'Venue',
    'Music & Entertainment',
    'Decor & Floral',
    'Planning & Coordination',
    'Rentals',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceCategories: prev.serviceCategories.includes(category)
        ? prev.serviceCategories.filter((c) => c !== category)
        : [...prev.serviceCategories, category],
    }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) {
          newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
          newErrors.lastName = 'Last name is required';
        }
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.phone.trim()) {
          newErrors.phone = 'Phone number is required';
        } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
          newErrors.phone = 'Please enter a valid phone number';
        }
        break;

      case 2:
        if (!formData.businessName.trim()) {
          newErrors.businessName = 'Business name is required';
        }
        if (!formData.businessType) {
          newErrors.businessType = 'Please select a business type';
        }
        if (!formData.location.trim()) {
          newErrors.location = 'Location is required';
        }
        if (formData.website && !/^https?:\/\/.*/.test(formData.website)) {
          newErrors.website = 'Please enter a valid URL starting with http:// or https://';
        }
        break;

      case 3:
        if (formData.serviceCategories.length === 0) {
          newErrors.serviceCategories = 'Please select at least one service category';
        }
        if (!formData.priceRange) {
          newErrors.priceRange = 'Please select a price range';
        }
        if (!formData.experience) {
          newErrors.experience = 'Years of experience is required';
        }
        break;

      case 4:
        if (!formData.description.trim()) {
          newErrors.description = 'Business description is required';
        } else if (formData.description.length < 100) {
          newErrors.description = 'Description must be at least 100 characters';
        }
        if (!formData.acceptTerms) {
          newErrors.acceptTerms = 'You must accept the Terms of Service';
        }
        if (!formData.acceptPrivacy) {
          newErrors.acceptPrivacy = 'You must accept the Privacy Policy';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col items-center w-1/4 ${
                  index + 1 === currentStep ? 'text-orange-500' : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    index + 1 === currentStep
                      ? 'bg-orange-500 text-white'
                      : index + 1 < currentStep
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  {index + 1 < currentStep ? (
                    <FontAwesomeIcon icon={faCheck} className="w-5 h-5" />
                  ) : (
                    <FontAwesomeIcon icon={step.icon} className="w-5 h-5" />
                  )}
                </div>
                <div className="text-sm font-medium">{step.title}</div>
                <div className="text-xs">{step.description}</div>
              </div>
            ))}
          </div>
          <div className="relative mt-4">
            <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-200 -translate-y-1/2" />
            <div
              className="absolute left-0 top-1/2 h-0.5 bg-orange-500 -translate-y-1/2 transition-all"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                      errors.firstName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                      errors.lastName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                    errors.phone ? 'border-red-300' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Business Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                    errors.businessName ? 'border-red-300' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.businessName && (
                  <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
                )}
              </div>
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                    errors.businessType ? 'border-red-300' : 'border-gray-300'
                  }`}
                  required
                >
                  <option value="">Select a type</option>
                  <option value="sole-proprietorship">Sole Proprietorship</option>
                  <option value="llc">LLC</option>
                  <option value="corporation">Corporation</option>
                  <option value="partnership">Partnership</option>
                </select>
                {errors.businessType && (
                  <p className="mt-1 text-sm text-red-600">{errors.businessType}</p>
                )}
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                    errors.website ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.website && (
                  <p className="mt-1 text-sm text-red-600">{errors.website}</p>
                )}
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                    errors.location ? 'border-red-300' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Services */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Service Categories
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {serviceCategories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleServiceToggle(category)}
                      className={`p-4 rounded-lg border-2 text-left ${
                        formData.serviceCategories.includes(category)
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                            formData.serviceCategories.includes(category)
                              ? 'border-orange-500 bg-orange-500'
                              : 'border-gray-300'
                          }`}
                        >
                          {formData.serviceCategories.includes(category) && (
                            <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-white" />
                          )}
                        </div>
                        {category}
                      </div>
                    </button>
                  ))}
                </div>
                {errors.serviceCategories && (
                  <p className="mt-1 text-sm text-red-600">{errors.serviceCategories}</p>
                )}
              </div>
              <div>
                <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">
                  Price Range
                </label>
                <select
                  id="priceRange"
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                    errors.priceRange ? 'border-red-300' : 'border-gray-300'
                  }`}
                  required
                >
                  <option value="">Select a range</option>
                  <option value="budget">Budget</option>
                  <option value="moderate">Moderate</option>
                  <option value="premium">Premium</option>
                  <option value="luxury">Luxury</option>
                </select>
                {errors.priceRange && (
                  <p className="mt-1 text-sm text-red-600">{errors.priceRange}</p>
                )}
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Years of Experience
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  min="0"
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                    errors.experience ? 'border-red-300' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Portfolio */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Upload Portfolio Images
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <FontAwesomeIcon icon={faImage} className="w-12 h-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="portfolio-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-orange-500 hover:text-orange-600"
                      >
                        <span>Upload files</span>
                        <input
                          id="portfolio-upload"
                          name="portfolio-upload"
                          type="file"
                          className="sr-only"
                          multiple
                          accept="image/*"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Business Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                    errors.description ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Tell potential clients about your business..."
                  required
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="acceptTerms"
                      name="acceptTerms"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, acceptTerms: e.target.checked }))
                      }
                      className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                      I accept the{' '}
                      <Link href="/terms" className="text-orange-500 hover:text-orange-600">
                        Terms of Service
                      </Link>
                    </label>
                    {errors.acceptTerms && (
                      <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="acceptPrivacy"
                      name="acceptPrivacy"
                      type="checkbox"
                      checked={formData.acceptPrivacy}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, acceptPrivacy: e.target.checked }))
                      }
                      className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="acceptPrivacy" className="text-sm text-gray-700">
                      I accept the{' '}
                      <Link href="/privacy" className="text-orange-500 hover:text-orange-600">
                        Privacy Policy
                      </Link>
                    </label>
                    {errors.acceptPrivacy && (
                      <p className="mt-1 text-sm text-red-600">{errors.acceptPrivacy}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="acceptCommunications"
                      name="acceptCommunications"
                      type="checkbox"
                      checked={formData.acceptCommunications}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, acceptCommunications: e.target.checked }))
                      }
                      className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="acceptCommunications" className="text-sm text-gray-700">
                      I agree to receive marketing communications from ConnecXit. You can unsubscribe at any time.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={handleBack}
              className={`inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                currentStep === 1 ? 'invisible' : ''
              }`}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 mr-2" />
              Back
            </button>
            <button
              type={currentStep === steps.length ? 'submit' : 'button'}
              onClick={currentStep === steps.length ? undefined : handleNext}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600"
            >
              {currentStep === steps.length ? (
                'Submit Application'
              ) : (
                <>
                  Next
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}