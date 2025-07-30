"use client";

import React from "react";
import { H1, H3 } from "@/lib/ui/heading";
import { Paragraph } from "@/lib/ui/text";
import { Button } from "@/lib/ui/button";
import { AnimatedElement } from "@/lib/ui/animated";
import Logo from "@/lib/ui/logo/logo";
import { Send } from "lucide-react";
import { Video } from "@/lib/ui/video";
import { colors } from "@/lib/design-tokens/colors";

const VIDEO_CONFIG = {
  src: "https://www.youtube.com/embed/VeNvjblXxCg",
  title: "AI Mentorship Program",
  variant: "iframe" as const,
  containerClassName: "max-w-3xl mx-auto",
  size: "lg" as const,
};

const handleBookSession = () => {
  console.log("Book session clicked");
};

export default function VideoSection() {
  return (
    <div className="w-full py-16 px-4 lg:px-8 container mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedElement
          as="div"
          animation="slideUp"
          duration={0.6}
          className="mb-8 flex justify-center"
        >
          <Logo
            title="SIMEON ALDANA"
            subtitle="AI-Agent Mentor 🚀"
            showVerifiedIcon={true}
            showRocketIcon={false}
          />
        </AnimatedElement>

        <AnimatedElement
          as="div"
          animation="slideUp"
          delay={0.2}
          duration={0.6}
          className="mb-6"
        >
          <H1 bold className="mb-4">
            HEAR EXACTLY HOW IT WORKS (FROM SIMEON HIMSELF)
          </H1>
        </AnimatedElement>

        <AnimatedElement
          as="div"
          animation="slideUp"
          delay={0.4}
          duration={0.6}
          className="mb-6 flex justify-center"
        >
          <Paragraph className="text-lg max-w-2xl mx-auto text-center">
            This is not a course. It&apos;s a real partnership to help you stop
            watching tutorials and finally build something that works.
          </Paragraph>
        </AnimatedElement>

        <div className="my-6  flex flex-col max-w-3xl mx-auto gap-6">
          <div>
            <Video {...VIDEO_CONFIG} />
          </div>
          <AnimatedElement
            as="div"
            animation="slideUp"
            delay={0.8}
            duration={0.6}
            className="flex justify-center w-full"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<Send size={20} />}
              iconPosition="left"
              onClick={handleBookSession}
              className="w-full"
            >
              <H3 color={colors.white}>
                BOOK YOUR FIRST FREE 1:1 STRATEGY SESSION
              </H3>
            </Button>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}
