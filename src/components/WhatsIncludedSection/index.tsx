"use client";
import React from "react";
import { motion } from "framer-motion";
import { Video, MessageSquare, FileText, Map, Code } from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-lg mr-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const WhatsIncludedSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="whats-included">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to build — with someone by your side
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Video}
            title="Weekly 1:1 sessions"
            description="Live video calls to review your progress, solve problems, and plan next steps."
            delay={0.1}
          />
          <FeatureCard
            icon={MessageSquare}
            title="Async support"
            description="Get help via Telegram or email between sessions when you're stuck."
            delay={0.2}
          />
          <FeatureCard
            icon={FileText}
            title="Pre-recorded content"
            description="Access templates and tutorials to accelerate your learning."
            delay={0.3}
          />
          <FeatureCard
            icon={Map}
            title="Step-by-step roadmap"
            description="Follow a clear path from idea to launch with weekly milestones."
            delay={0.4}
          />
          <FeatureCard
            icon={Code}
            title="Working examples"
            description="Study real flows, prompts, and systems you can adapt for your project."
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
