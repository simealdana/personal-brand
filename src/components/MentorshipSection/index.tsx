"use client";
import React from "react";
import { motion } from "framer-motion";
import StarBackground from "../StarBackground";

const MentorshipSection = () => {
  return (
    <StarBackground className="py-20">
      <section id="mentorship">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              This is not a course. It&apos;s a real partnership.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700">
                I designed this mentorship to help you stop watching tutorials
                and finally build something that works.
              </p>
              <p className="text-lg text-gray-700">
                In just 4 weeks, we&apos;ll work together 1:1 to build your
                first AI Agent — from scratch.
              </p>
              <p className="text-lg text-gray-700">
                You&apos;ll get personal guidance, async support, and a
                structure that leads to real results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="Mentorship Explanation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </StarBackground>
  );
};

export default MentorshipSection;
