"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import StarBackground from "../StarBackground";
import LoomVideo from "./components/LoomVideo";

const DISPLAY_VIDEO_ON_GOING_MESSAGE = false;

const LOOM_URL =
  "https://www.loom.com/embed/aa875793c062438bab4416b05f4e1a83?sid=5bf927c1-70b0-4e38-8a84-3e10f692dad3";

const VideoSection = () => {
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
            See How It Works
          </span>

          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Accelerate Your Digital Product Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how my proven consulting methods help you design, develop,
            and launch innovative digital products quickly and efficiently.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Conditional rendering for video or message */}
          {DISPLAY_VIDEO_ON_GOING_MESSAGE ? (
            <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                {/* Styled play icon */}
                <div className="w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  Demo Video Coming Soon!
                </h3>
                <p className="text-blue-600 text-center max-w-md">
                  We&apos;re putting the finishing touches on an exclusive demo
                  video to showcase my digital consulting process. Stay tuned!
                </p>
              </div>
            </div>
          ) : (
            <LoomVideo url={LOOM_URL} showPlayButton={false} />
          )}

          {/* Feature cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className="text-blue-600 font-semibold mb-2">
                ⚡ Rapid Strategy
              </div>
              <p className="text-gray-600">
                Get actionable insights in minutes
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className="text-purple-600 font-semibold mb-2">
                🎯 Targeted Guidance
              </div>
              <p className="text-gray-600">
                Expert strategies tailored to your vision
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className="text-pink-600 font-semibold mb-2">
                ✨ Proven Outcomes
              </div>
              <p className="text-gray-600">
                Turn ideas into market-winning products
              </p>
            </motion.div>
          </div>

          {/* Free Consulting Notice */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center px-4"
          >
            <p className="text-md text-gray-700">
              <strong>Free Email Consulting:</strong> For now, all consultations
              are conducted via email at no cost. If your idea stands out, I may
              offer personalized consulting free of charge.
            </p>
          </motion.div>
        </div>
      </div>
    </StarBackground>
  );
};

export default VideoSection;
