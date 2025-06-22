"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { validateEmail } from "@/utils/validation";

export default function CourseWaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [acceptsEmails, setAcceptsEmails] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!acceptsEmails) {
      setError("Please accept to receive course updates");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, acceptsEmails }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        const errorData = await response.json();
        setError(
          errorData.error || "Failed to join waitlist. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-md mx-auto"
    >
      {!isSubmitted ? (
        <div className="space-y-3">
          <form
            onSubmit={handleSubmit}
            className="flex gap-3 p-2 bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-gray-200"
          >
            <div className="flex-1 flex items-center px-4">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none text-gray-700 placeholder-gray-500 bg-transparent focus:ring-2 focus:ring-blue-500/50"
                required
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 rounded-full font-bold text-white transition-colors flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
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
                  Joining...
                </>
              ) : (
                <>
                  Join Waitlist
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2 px-2">
            <input
              type="checkbox"
              id="acceptsEmails"
              checked={acceptsEmails}
              onChange={(e) => setAcceptsEmails(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5"
            />
            <label
              htmlFor="acceptsEmails"
              className="text-xs text-gray-600 leading-relaxed cursor-pointer"
            >
              I agree to receive course updates, exclusive content, and
              AI-related tips via email. You can unsubscribe at any time.
            </label>
          </div>
        </div>
      ) : (
        <div className="bg-white/90 backdrop-blur-md border border-green-200 rounded-xl p-6 shadow-xl">
          <div className="text-green-700 font-bold text-lg mb-2 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-green-600"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            You&apos;re on the list!
          </div>
          <p className="text-gray-700">
            We&apos;ll notify you as soon as the course is available.
          </p>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="mt-4 bg-red-50/90 backdrop-blur-sm border border-red-200 rounded-xl p-4 shadow-sm">
          <p className="text-red-700 text-sm text-center">{error}</p>
        </div>
      )}
    </motion.div>
  );
}
