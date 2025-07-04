"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMentorSection = () => {
  return (
    <section className="py-20 bg-white" id="about-mentor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Your Mentor
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-lg mx-auto md:mx-0"
          >
            {/* Background glow effects - contained */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/0 via-blue-500/10 to-blue-950/0 rounded-xl blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-950/0 rounded-xl blur-2xl"></div>

            {/* Main image container */}
            <div
              className="relative w-full aspect-square overflow-hidden rounded-xl"
              style={{
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
              }}
            >
              <Image
                src="/images/meet_tutor.jpeg"
                alt="Simeon - AI Mentor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Gradient overlays - same as AnimatedImageContainer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-blue-950/80"></div>
            </div>

            {/* Additional outer glow - contained */}
            <div className="absolute -inset-4 bg-blue-500/5 blur-2xl rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">
              I&apos;ve spent the last 7+ years building systems, automations,
              and real products with AI.
            </p>
            <p className="text-lg text-gray-700">
              Now I help others do the same — not by selling courses, but by
              showing up each week and building with them.
            </p>
            <p className="text-lg text-gray-700">
              If you&apos;re serious about launching something, I&apos;ll help
              you get there.
            </p>
            <div className="pt-4">
              <a
                href="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Learn more about my background
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMentorSection;
