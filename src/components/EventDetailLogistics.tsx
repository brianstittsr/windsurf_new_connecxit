"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  HeartIcon as HeartOutline,
  ShareIcon,
  CalendarIcon,
  MapPinIcon,
  InformationCircleIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

interface EventDetailLogisticsProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: {
    name: string;
    address: string;
  };
  organizer: {
    name: string;
    followers: number;
    image: string;
  };
  ticketInfo: {
    type: string;
    price: string;
    minQuantity?: number;
    maxQuantity?: number;
  };
  duration: string;
}

const formatPrice = (price: string): number => {
  // Remove currency symbol and 'From' if present, then convert to number
  return Number(price.replace(/[^0-9.]/g, ""));
};

interface SharePopupProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

function SharePopup({ isOpen, onClose, url }: SharePopupProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCopied(false);
    }
  }, [isOpen]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Share Event</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg">
          <input
            type="text"
            value={url}
            readOnly
            className="flex-1 bg-transparent outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 min-w-[100px]"
          >
            {copied ? (
              <>
                <CheckIcon className="w-5 h-5 mr-1" />
                Copied!
              </>
            ) : (
              "Copy Link"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function EventDetailLogistics({
  title,
  description,
  date,
  time,
  location,
  organizer,
  ticketInfo,
  duration,
}: EventDetailLogisticsProps) {
  const [quantity, setQuantity] = useState(1);
  const minQuantity = ticketInfo.minQuantity || 1;
  const maxQuantity = ticketInfo.maxQuantity || 10;
  const basePrice = formatPrice(ticketInfo.price);

  const incrementQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > minQuantity) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = basePrice * quantity;
  const [isLiked, setIsLiked] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    setIsShareOpen(true);
  };

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Event Details */}
          <div className="flex-1">
            {/* Ticket Sales Badge */}
            <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-1 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-purple-700 text-sm font-medium">
                  Ticket sales end soon
                </span>
              </div>
            </div>

            {/* Date */}
            <div className="text-gray-600 mb-2">{date}</div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>

            {/* Description */}
            <p className="text-gray-600 mb-6">{description}</p>

            {/* Organizer */}
            <div className="flex items-center space-x-4 mb-8">
              <Image
                src={organizer.image}
                alt={organizer.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="text-sm text-gray-600">By</p>
                <div className="flex items-center space-x-2">
                  <p className="font-semibold">{organizer.name}</p>
                  <span className="text-gray-400">·</span>
                  <p className="text-gray-600">
                    {organizer.followers} followers
                  </p>
                </div>
              </div>
              <button
                onClick={handleFollow}
                className={`ml-4 px-6 py-2 text-white rounded-md transition-colors ${isFollowing ? "bg-[#F05537] hover:bg-[#e04527]" : "bg-blue-600 hover:bg-blue-700"}`}
              >
                {isFollowing ? "Now Following" : "Follow"}
              </button>
            </div>

            {/* Event Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CalendarIcon className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-semibold">Date and time</h3>
                  <p className="text-gray-600">
                    {date} · {time} EST
                  </p>
                  <p className="text-gray-500 text-sm">{duration}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPinIcon className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">{location.name}</p>
                  <p className="text-gray-600">{location.address}</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm mt-1">
                    Show map ▼
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Ticket Selection */}
          <div className="lg:w-[380px]">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-semibold">{ticketInfo.type}</h3>
                  <p className="text-gray-600">{ticketInfo.price}</p>
                  <button className="inline-flex items-center text-gray-600 hover:text-gray-800">
                    <InformationCircleIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">Information</span>
                  </button>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={toggleLike}
                    className={`p-2 ${isLiked ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:text-gray-600"}`}
                  >
                    {isLiked ? (
                      <HeartSolid className="w-6 h-6" />
                    ) : (
                      <HeartOutline className="w-6 h-6" />
                    )}
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <ShareIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={decrementQuantity}
                    disabled={quantity <= minQuantity}
                    className={`p-2 rounded-full border ${quantity <= minQuantity ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-gray-300 hover:border-gray-400 cursor-pointer"}`}
                  >
                    <span className="text-xl font-medium px-1">−</span>
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    disabled={quantity >= maxQuantity}
                    className={`p-2 rounded-full border ${quantity >= maxQuantity ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-gray-300 hover:border-gray-400 cursor-pointer"}`}
                  >
                    <span className="text-xl font-medium px-1">+</span>
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-lg font-semibold">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>

              <button className="w-full bg-[#F05537] text-white py-3 rounded-md hover:bg-[#e04527] transition-colors">
                Reserve a spot
              </button>
            </div>
          </div>
        </div>
      </div>
      <SharePopup
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        url={currentUrl}
      />
    </>
  );
}
