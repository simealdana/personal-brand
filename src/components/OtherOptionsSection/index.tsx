"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar } from "lucide-react";
import Link from "next/link";

interface OptionCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  delay: number;
}

const OptionCard = ({
  icon: Icon,
  title,
  description,
  linkText,
  linkHref,
  delay,
}: OptionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        href={linkHref}
        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
      >
        {linkText}
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
      </Link>
    </motion.div>
  );
};

const OtherOptionsSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="other-options">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Looking for something lighter?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Not ready for the full mentorship? No problem — you can still start
            building:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <OptionCard
            icon={BookOpen}
            title="Self-paced Course"
            description="Learn how to build your first AI Agent at your own rhythm. Includes tutorials, templates, and a full walkthrough."
            linkText="Explore the course"
            linkHref="/course"
            delay={0.1}
          />
          <OptionCard
            icon={Calendar}
            title="1:1 Consultations"
            description="Need focused help on one problem or project? Book a 60-minute consultation."
            linkText="Book a session"
            linkHref="/consultation"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default OtherOptionsSection;
