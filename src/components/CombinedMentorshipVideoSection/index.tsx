"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import StarBackground from "../StarBackground";

const LOOM_URL = "https://www.youtube.com/embed/your-video-id";

const CombinedMentorshipVideoSection = () => {
  return (
    <StarBackground className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Real Partnership
          </span>

          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Ready to build a real AI Agent?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This is not a course. It&apos;s a real partnership to help you stop
            watching tutorials and finally build something that works.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Video section */}
          <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src={LOOM_URL}
              title="Mentorship Explanation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Feature cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className="text-blue-600 font-semibold mb-2">
                ⚡ 1:1 Collaboration
              </div>
              <p className="text-gray-600">
                Weekly sessions to build your project
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className="text-purple-600 font-semibold mb-2">
                🎯 Personalized Guidance
              </div>
              <p className="text-gray-600">
                From idea to launch with expert support
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className="text-pink-600 font-semibold mb-2">
                ✨ Real Results
              </div>
              <p className="text-gray-600">
                A structure that leads to actual outcomes
              </p>
            </motion.div>
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center px-4"
          >
            <p className="text-md text-gray-700">
              In just <strong>4 weeks</strong>, we&apos;ll work together 1:1 to
              build your first AI Agent — from scratch. You&apos;ll get personal
              guidance, async support, and a structure that leads to real
              results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
              onClick={() => (window.location.href = "/apply")}
            >
              Discover More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </StarBackground>
  );
};

export default CombinedMentorshipVideoSection;
