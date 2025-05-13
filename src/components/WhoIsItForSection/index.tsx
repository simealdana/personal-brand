"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const WhoIsItForSection = () => {
  return (
    <section className="py-20 bg-white" id="who-is-it-for">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Is this mentorship for you?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Good fit column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-green-50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              You&apos;ll love it if:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-800">
                  You want to build something real with AI
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-800">
                  You&apos;re tired of watching tutorials without results
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-800">
                  You want personal help to move faster
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Not a fit column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-red-50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-red-800 mb-6">
              It&apos;s not for you if:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <XCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-800">
                  You don&apos;t have 2–4 hours per week to commit
                </span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-800">
                  You&apos;re just exploring AI casually
                </span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-800">
                  You expect a done-for-you solution
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
