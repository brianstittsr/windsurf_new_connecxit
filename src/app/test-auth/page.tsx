"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";

export default function TestAuth() {
  const { user } = useAuth();
  const [apiResponse, setApiResponse] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const testAuth = async () => {
      try {
        const response = await fetch("/api/auth/session");
        const data = await response.json();
        setApiResponse(JSON.stringify(data, null, 2));
      } catch (error) {
        setError("Failed to test authentication");
        console.error("Auth test error:", error);
      }
    };

    if (user) {
      testAuth();
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-lg font-medium leading-6 text-gray-900 mb-4">
              Authentication Test Page
            </h1>

            <div className="space-y-4">
              <div>
                <h2 className="text-sm font-medium text-gray-500">
                  User Status
                </h2>
                <pre className="mt-1 bg-gray-50 p-4 rounded-md overflow-auto">
                  {JSON.stringify(
                    {
                      isAuthenticated: !!user,
                      user: user
                        ? {
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            role: user.role,
                          }
                        : null,
                    },
                    null,
                    2,
                  )}
                </pre>
              </div>

              <div>
                <h2 className="text-sm font-medium text-gray-500">
                  Authentication Status
                </h2>
                <div className="mt-1 bg-gray-50 p-4 rounded-md">
                  {user ? (
                    <span className="text-green-600">✓ Authenticated</span>
                  ) : (
                    <span className="text-red-600">✗ Not authenticated</span>
                  )}
                </div>
              </div>

              {apiResponse && (
                <div>
                  <h2 className="text-sm font-medium text-gray-500">
                    API Test Response
                  </h2>
                  <pre className="mt-1 bg-gray-50 p-4 rounded-md overflow-auto">
                    {apiResponse}
                  </pre>
                </div>
              )}

              {error && (
                <div className="text-red-600 bg-red-50 p-4 rounded-md">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
