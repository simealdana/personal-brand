"use client";

import React from "react";
import { useTheme } from "@/lib/ui/useTheme";
import { H1 } from "@/lib/ui/heading";
import { Paragraph } from "@/lib/ui/text";
import { AnimatedElement } from "@/lib/ui/animated";
import { motion } from "framer-motion";
import { YouTubeEmbed } from "@/lib/ui/embed";

interface StudentProject {
  id: string;
  studentName: string;
  projectTitle: string;
  videoUrl: string;
  display: boolean;
}

const studentProjects: StudentProject[] = [
  {
    id: "1",
    studentName: "MIKE M",
    projectTitle: "BUILDING A VIDEO GENERATION AGENT",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    display: false,
  },
  {
    id: "2",
    studentName: "HEDIYE M",
    projectTitle: "LEARNING TO USE LANGCHAIN AND LANGGRAPH WITH PYTHON",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    display: false,
  },
  {
    id: "3",
    studentName: "LEONEL P",
    projectTitle: "HE IS BUILDING A LAW-SPECIALIZED RAG CHATBOT",
    videoUrl: "8TfJYEiRyOs",
    display: true,
  },
  {
    id: "4",
    studentName: "RAMPHIS R",
    projectTitle: "BUILDING A DOCTOR'S ASSISTANT",
    videoUrl: "QQPhYoNoGFc",
    display: true,
  },
];

export default function TestimonySection() {
  const { colors } = useTheme();

  const filteredProjects = studentProjects.filter((project) => project.display);

  return (
    <section className="w-full bg-white py-16 px-4 lg:px-8 container mx-auto">
      <div className="max-w-6xl mx-auto">
        <AnimatedElement
          as="div"
          animation="slideUp"
          duration={0.6}
          className="text-center mb-8"
        >
          <H1 bold className="mb-4">
            WHAT STUDENTS BUILT IN{" "}
            <span style={{ color: colors.primary }}>UNDER 30 DAYS</span> WITH ME
          </H1>
          <div className="flex justify-center">
            <Paragraph className="max-w-2xl mx-auto text-center">
              Some of the ready-to-sell AI-agents, some of my students have
              built in less than 4 weeks, with no experience.
            </Paragraph>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto justify-items-center md:justify-items-stretch mt-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer w-full max-w-sm md:max-w-none h-[315px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <YouTubeEmbed
                videoId={project.videoUrl}
                width={560}
                height={315}
                title={project.projectTitle}
                className="w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
