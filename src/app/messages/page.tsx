"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import MessagesSidebar from "@/components/MessagesSidebar";

export default function MessagesPage() {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <MessagesSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-md">
          <div className="mb-6">
            <FontAwesomeIcon
              icon={faInbox}
              className="w-12 h-12 text-gray-400"
            />
          </div>
          <h2 className="text-xl font-medium text-gray-900 mb-2">
            After you respond to a lead,
          </h2>
          <p className="text-gray-600">you can follow up with it here.</p>
        </div>
      </div>
    </div>
  );
}
