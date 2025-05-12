"use client";

import { useState } from "react";
import StarBackground from "@/components/StarBackground";
import Image from "next/image";
import Link from "next/link";

// Configuration flags
const CONFIG = {
  SHOW_IMAGES: false, // Set to true to display product images
};

// Replace public environment variables with secure server-side endpoint
// No sensitive information exposed on client
const API_ENDPOINT = "/api/mentorship_form";

interface FormData {
  fullName: string;
  email: string;
  aiProject: string;
  experience: string;
  goal: string;
  investment: string;
  source: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  aiProject?: string;
  experience?: string;
  goal?: string;
  investment?: string;
  source?: string;
}

export default function ApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    aiProject: "",
    experience: "",
    goal: "",
    investment: "",
    source: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate fullName
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
      isValid = false;
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Validate aiProject
    if (!formData.aiProject.trim()) {
      newErrors.aiProject = "Project description is required";
      isValid = false;
    } else if (formData.aiProject.trim().length < 10) {
      newErrors.aiProject = "Please provide more details (min 10 characters)";
      isValid = false;
    }

    // Validate experience
    if (!formData.experience.trim()) {
      newErrors.experience = "Experience information is required";
      isValid = false;
    }

    // Validate goal
    if (!formData.goal.trim()) {
      newErrors.goal = "Goal is required";
      isValid = false;
    }

    // Validate investment
    if (!formData.investment) {
      newErrors.investment = "Please select an option";
      isValid = false;
    }

    // Validate source
    if (!formData.source) {
      newErrors.source = "Please select where you found us";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Call our secure server-side endpoint instead of the webhook directly
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        // Show success message for 3 seconds before redirecting to thank you page
        setTimeout(() => {
          setIsSubmitted(true);
        }, 3000);
      } else {
        // Parse error response if available
        try {
          const errorData = await response.json();
          setErrors({
            ...errors,
            email:
              errorData.error || "Failed to submit form. Please try again.",
          });
        } catch {
          setErrors({
            ...errors,
            email: "Failed to submit form. Please try again.",
          });
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({
        ...errors,
        email: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <StarBackground className="min-h-screen flex items-center justify-center p-4">
        <div className="relative max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-xl">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4 border border-green-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-green-600"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Thank you for applying!
            </h3>
            <p className="text-gray-600 max-w-md mb-6">
              I&apos;ll review your answers and get back to you in 24–48 hours.
              You can also reply to any email with questions.
            </p>
            {CONFIG.SHOW_IMAGES && (
              <Image
                src="/ai-mentor-thanks.jpg"
                alt="AI Mentorship Program"
                width={400}
                height={225}
                className="rounded-lg shadow-md mt-4"
              />
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
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
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Return to Home
              </Link>
              <Link
                href="/products"
                className="px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
              >
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
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Explore More Products
              </Link>
            </div>
          </div>
        </div>
      </StarBackground>
    );
  }

  return (
    <StarBackground className="min-h-screen">
      {/* Loading overlay */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm mx-auto flex flex-col items-center">
            <svg
              className="w-16 h-16 text-green-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Application Submitted!
            </h3>
            <p className="text-gray-600 text-center">
              Your application has been received. Redirecting...
            </p>
          </div>
        </div>
      )}

      {/* Split-screen container with reduced padding */}
      <div className="h-screen flex flex-col md:flex-row md:items-stretch">
        {/* Left side - Hero content */}
        <div className="w-full md:w-1/2 md:h-screen flex flex-col justify-center p-4 md:p-8 lg:p-12">
          <div className="max-w-lg mx-auto">
            {/* Desktop heading with floating badge */}
            <div className="hidden md:flex items-center gap-2 mb-4">
              <div className="bg-blue-100 rounded-full px-4 py-1 flex items-center gap-2 border border-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-blue-500"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  <path d="M19 17.5c-1.2-1.4-2.6-1.8-4.3-1.1-3.6 1.5-5.2-1-8.7-1.5"></path>
                </svg>
                <span className="text-gray-800 text-sm font-medium">
                  Limited spots
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Apply to the
              <br />
              AI Crafter Mentorship
            </h1>

            <p className="text-xl text-gray-700 mb-4">
              Build your <strong>own AI Agent</strong> — with{" "}
              <strong>guidance</strong>, not guesswork.
            </p>

            {/* Product image - visible only when SHOW_IMAGES is true */}
            {CONFIG.SHOW_IMAGES && (
              <div className="mb-4 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/ai-mentor-product.jpg"
                  alt="AI Mentorship Program"
                  width={600}
                  height={340}
                  className="w-full h-auto"
                />
              </div>
            )}

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-4 shadow-sm border border-gray-200">
              <p className="text-gray-700">
                This <strong>4-week, 1:1 mentorship</strong> includes weekly
                meetings, supporting videos, templates, and automation flows to
                help you build your AI Agent <strong>step by step</strong>.
              </p>
            </div>

            {/* Social proof */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-blue-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 text-sm">
                    &quot;This mentorship helped me go from having no coding
                    experience to building my first AI agent in just a few
                    weeks.&quot;
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    - Previous Mentee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form - Center it and optimize space */}
        <div className="w-full md:w-1/2 md:h-screen overflow-y-auto flex items-center justify-center p-4 md:p-6">
          <div className="w-full max-w-lg bg-white/90 backdrop-blur-md rounded-xl p-5 border border-gray-200 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Apply Now</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Let&apos;s work together to bring your AI vision to life.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Two columns for name and email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={`block w-full p-2 bg-white border ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent placeholder-gray-400 text-gray-700`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`block w-full p-2 bg-white border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent placeholder-gray-400 text-gray-700`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* AI Project */}
              <div>
                <label
                  htmlFor="aiProject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  What do you want to build with AI?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="aiProject"
                  id="aiProject"
                  placeholder="Describe your AI project idea"
                  value={formData.aiProject}
                  onChange={handleChange}
                  required
                  rows={2}
                  className={`block w-full p-2 bg-white border ${
                    errors.aiProject ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent placeholder-gray-400 text-gray-700`}
                />
                {errors.aiProject && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.aiProject}
                  </p>
                )}
              </div>

              {/* Experience */}
              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Do you have experience with development or automation?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="experience"
                  id="experience"
                  placeholder="Share your background"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  rows={2}
                  className={`block w-full p-2 bg-white border ${
                    errors.experience ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent placeholder-gray-400 text-gray-700`}
                />
                {errors.experience && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.experience}
                  </p>
                )}
              </div>

              {/* Goal */}
              <div>
                <label
                  htmlFor="goal"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  What would be your <strong>goal</strong> if we work together?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="goal"
                  id="goal"
                  placeholder="What outcomes are you looking to achieve?"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  rows={2}
                  className={`block w-full p-2 bg-white border ${
                    errors.goal ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent placeholder-gray-400 text-gray-700`}
                />
                {errors.goal && (
                  <p className="mt-1 text-xs text-red-500">{errors.goal}</p>
                )}
              </div>

              {/* Two columns for investment and source */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="investment"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Ready to invest <strong>$500</strong>?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="investment"
                    id="investment"
                    value={formData.investment}
                    onChange={handleChange}
                    required
                    className={`block w-full p-2 bg-white border ${
                      errors.investment ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-gray-700 appearance-none`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.75rem center",
                      backgroundSize: "1em",
                    }}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                  {errors.investment && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.investment}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="source"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    How did you find me? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="source"
                    id="source"
                    value={formData.source}
                    onChange={handleChange}
                    required
                    className={`block w-full p-2 bg-white border ${
                      errors.source ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-gray-700 appearance-none`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.75rem center",
                      backgroundSize: "1em",
                    }}
                  >
                    <option value="">Select</option>
                    <option value="TikTok">TikTok</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Reddit">Reddit</option>
                  </select>
                  {errors.source && (
                    <p className="mt-1 text-xs text-red-500">{errors.source}</p>
                  )}
                </div>
              </div>

              {/* Submit Button with improved loading state */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 rounded-full flex items-center justify-center gap-2 font-medium text-white ${
                    isSubmitting
                      ? "bg-blue-400"
                      : "bg-blue-600 hover:bg-blue-700"
                  } transition-colors relative overflow-hidden group`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
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
                      <span className="animate-pulse">
                        Submitting application...
                      </span>
                    </div>
                  ) : (
                    <>
                      Apply Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </>
                  )}
                </button>
                <p className="mt-1 text-xs text-gray-500 text-center">
                  This is not a commitment — it&apos;s just the first step to
                  see if we&apos;re a fit.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StarBackground>
  );
}
