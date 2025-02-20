import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone, faLock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface VendorActionsProps {
  onMessage?: () => void;
  onCall?: () => void;
  className?: string;
  isLoggedIn?: boolean;
}

export default function VendorActions({
  onMessage,
  onCall,
  className = "",
  isLoggedIn = false,
}: VendorActionsProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-4 max-w-3xl mx-auto px-4 ${className}`}
    >
      {isLoggedIn ? (
        <>
          <button
            onClick={onMessage}
            className="flex items-center justify-center gap-2 px-6 py-4 border border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-50 transition-colors"
          >
            <FontAwesomeIcon icon={faMessage} className="w-5 h-5" />
            <span>Message</span>
          </button>
          <button
            onClick={onCall}
            className="flex items-center justify-center gap-2 px-6 py-4 border border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-50 transition-colors"
          >
            <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
            <span>Request a call</span>
          </button>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 px-6 py-4 border border-gray-300 text-gray-400 font-medium rounded-lg cursor-not-allowed"
          >
            <FontAwesomeIcon icon={faMessage} className="w-5 h-5" />
            <FontAwesomeIcon icon={faLock} className="w-4 h-4 ml-1" />
            <span>Message</span>
          </Link>
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 px-6 py-4 border border-gray-300 text-gray-400 font-medium rounded-lg cursor-not-allowed"
          >
            <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
            <FontAwesomeIcon icon={faLock} className="w-4 h-4 ml-1" />
            <span>Request a call</span>
          </Link>
        </>
      )}
    </div>
  );
}
