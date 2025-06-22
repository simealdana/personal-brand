"use client";

import { useState } from "react";
import StarBackground from "@/components/StarBackground";
import Link from "next/link";

export default function UnsubscribePage() {
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulate API call for unsubscribe
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsUnsubscribed(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isUnsubscribed) {
    return (
      <StarBackground className="min-h-screen flex items-center justify-center p-4">
        <div className="relative max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-xl">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="bg-green-100 p-4 rounded-full mb-6 border border-green-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-green-600"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              You&apos;ve Been Unsubscribed
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
              We&apos;re sorry to see you go! You have been successfully
              unsubscribed from our email list.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8 max-w-md">
              <p className="text-blue-800 text-sm leading-relaxed">
                Changed your mind? You can always resubscribe by signing up for
                our course waitlist or mentorship program.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>

              <Link
                href="/course"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                View Course
              </Link>
            </div>
          </div>
        </div>
      </StarBackground>
    );
  }

  return (
    <StarBackground className="min-h-screen flex items-center justify-center p-4">
      <div className="relative max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-xl">
        <div className="text-center mb-8">
          <div className="bg-orange-100 p-4 rounded-full mb-6 border border-orange-200 inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-orange-600"
            >
              <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <polyline points="3,6 12,13 21,6" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Unsubscribe from Emails
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            We&apos;re sorry to see you go. Enter your email address to
            unsubscribe from our mailing list.
          </p>
        </div>

        <form onSubmit={handleUnsubscribe} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                error ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email address"
              required
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Unsubscribing...
              </div>
            ) : (
              "Unsubscribe"
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Changed your mind?{" "}
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Go back to homepage
            </Link>
          </p>
        </div>
      </div>
    </StarBackground>
  );
}
