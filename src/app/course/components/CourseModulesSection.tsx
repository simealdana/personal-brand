"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Play } from "lucide-react";
import { courseModules } from "@/data/courseModules";
import { getColorClasses } from "@/utils/colorClasses";

export default function CourseModulesSection() {
  const [expandedModules, setExpandedModules] = useState<number[]>([]);

  const toggleModule = (moduleId: number) => {
    setExpandedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Course Curriculum
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            9 comprehensive modules taking you from complete beginner to AI
            agent expert
          </p>
        </motion.div>

        <div className="space-y-4">
          {courseModules.map((module, index) => {
            const IconComponent = module.icon;
            const colors = getColorClasses(module.color);
            const isExpanded = expandedModules.includes(module.id);

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50/50 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 ${colors.bg} ${colors.border} rounded-lg flex items-center justify-center border`}
                    >
                      <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Module {module.id}: {module.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {module.lessons.length} lessons
                      </p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <div className="space-y-4">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lessonIndex}
                            className="flex gap-3 p-4 bg-gray-50/50 rounded-lg border border-gray-100"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <Play className="w-4 h-4 text-gray-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">
                                {lesson.title}
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {lesson.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
