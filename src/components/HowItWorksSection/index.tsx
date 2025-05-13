"use client";
import React from "react";
import { motion } from "framer-motion";
import StarBackground from "../StarBackground";

interface TimelineItemProps {
  week: number;
  title: string;
  description: string;
  delay: number;
}

const TimelineItem = ({
  week,
  title,
  description,
  delay,
}: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-10 pb-10 border-l-2 border-blue-200 last:border-l-0"
    >
      <div className="absolute left-[-10px] top-0 bg-blue-600 rounded-full w-5 h-5 border-4 border-white"></div>
      <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-3">
          Week {week}
        </span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  return (
    <StarBackground className="py-20">
      <section id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              A 4-week path to launch your first AI Agent
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <TimelineItem
              week={1}
              title="Define your agent, tools, and outcome"
              description="We'll clarify what you want to build, which tools to use, and define what success looks like for your project."
              delay={0.1}
            />
            <TimelineItem
              week={2}
              title="Build the first version"
              description="You'll create the initial version of your AI agent with my guidance, focusing on core functionality."
              delay={0.2}
            />
            <TimelineItem
              week={3}
              title="Improve, add logic, test"
              description="We'll refine your agent, add more complex logic, and thoroughly test it with real users or scenarios."
              delay={0.3}
            />
            <TimelineItem
              week={4}
              title="Launch and document it"
              description="You'll finalize your agent, prepare it for launch, and document how it works for future reference or expansion."
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </StarBackground>
  );
};

export default HowItWorksSection;
