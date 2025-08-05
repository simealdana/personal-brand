"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import StarBackground from "../StarBackground";

interface FAQItemProps {
  question: string;
  answer: string;
  delay: number;
}

const FAQItem = ({ question, answer, delay }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="border-b border-gray-200 py-4"
    >
      <button
        className="flex justify-between items-center w-full text-left py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 pl-1">
          <p>{answer}</p>
        </div>
      )}
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <StarBackground className="py-20">
      <section id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to build a real AI Agent?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-10 text-white shadow-xl"
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    AI Crafter Mentorship
                  </h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      4 weeks of personalized mentorship
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Weekly 1:1 live sessions
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Async support between sessions
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Templates and resources
                    </li>
                  </ul>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-2xl font-bold mb-2">
                    Limited-time offer
                  </div>
                  <div className="text-blue-200 mb-6">Apply to see pricing</div>
                  <a
                    href="/?leads-form=true"
                    className="inline-block px-8 py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-50 transition-colors"
                  >
                    Apply Now — Only 12 Spots
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="mt-20">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-center mb-8"
              >
                Frequently Asked Questions
              </motion.h3>

              <div className="space-y-2">
                <FAQItem
                  question="Do I need experience with AI?"
                  answer="No. If you're comfortable using digital tools and want to learn by doing, you're ready."
                  delay={0.1}
                />
                <FAQItem
                  question="How much time does it take?"
                  answer="You'll need around 2–4 focused hours per week, including the live call."
                  delay={0.2}
                />
                <FAQItem
                  question="What if I'm not sure yet?"
                  answer="You can still apply — there's no commitment. I'll review it and let you know if we're a fit."
                  delay={0.3}
                />
                <FAQItem
                  question="What tools will we use?"
                  answer="We'll use industry-standard tools like OpenAI, Langchain, and other AI frameworks based on your specific project needs."
                  delay={0.4}
                />
                <FAQItem
                  question="Will I own what I build?"
                  answer="Absolutely. Everything you create during the mentorship is 100% yours. I'm here to guide you, not take ownership of your work."
                  delay={0.5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </StarBackground>
  );
};

export default PricingSection;
