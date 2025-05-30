"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Code, Users, Bot, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import StarBackground from "@/components/StarBackground";

export default function CourseWaitlistPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Clear previous errors
    setError("");

    // Validate email
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/course-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail(""); // Clear the form
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
    <StarBackground className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="bg-blue-100 rounded-full px-4 py-1 flex items-center justify-center gap-2 border border-blue-200 w-fit mx-auto mb-8">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-gray-800 text-sm font-medium">
                Early Access Program
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master AI Agents with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                N8n & Real Projects
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              <strong>From zero to building production-ready AI Agents.</strong>{" "}
              Learn with an instructor who&apos;s built real systems for 8+
              years. This isn&apos;t just another pre-recorded course —
              you&apos;ll get live guidance, real projects, and hands-on
              mentorship.
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
              <p className="text-gray-700 text-sm">
                <strong>🎯 Perfect for beginners:</strong> No coding experience
                needed. We&apos;ll take you from complete beginner to building
                complex multi-agent systems, MCP, and production-ready
                automations using N8n.
              </p>
            </div>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md mx-auto"
            >
              {!isSubmitted ? (
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
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-2 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You&apos;ll Actually Build
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Real AI Agents and automations that work in production. No fluff,
              no theory-only content — just practical skills you can use
              immediately.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-white/90"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 border border-blue-200">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                N8n AI Agent Fundamentals
              </h3>
              <p className="text-gray-700">
                Master N8n from zero to advanced. Build your first AI agents
                with no coding experience required. Learn the fundamentals that
                everything else builds on.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-white/90"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 border border-purple-200">
                <Bot className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Multi-Agent Systems & MCP
              </h3>
              <p className="text-gray-700">
                Build complex multi-agent workflows using cutting-edge patterns.
                Learn MCP (Model Context Protocolo) techniques and orchestrate
                multiple AI agents working together.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-white/90"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 border border-green-200">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Production-Ready Projects
              </h3>
              <p className="text-gray-700">
                Build real chatbots and automations that actually get deployed.
                Work on in-demand projects that can help you land a job or start
                your own AI agency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </StarBackground>
  );
}
