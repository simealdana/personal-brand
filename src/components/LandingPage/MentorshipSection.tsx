"use client";

import React from "react";
import { useTheme } from "@/lib/ui/useTheme";
import { H1, H3 } from "@/lib/ui/heading";
import { Paragraph, Span } from "@/lib/ui/text";
import { AnimatedElement } from "@/lib/ui/animated";
import { Button } from "@/lib/ui/button";
import { Send } from "lucide-react";
import { useActionButton } from "@/hooks/useActionButton";
import { PrimaryCheckIcon } from "@/lib/ui/icons";
import Image from "next/image";
import H2 from "../../lib/ui/heading/H2";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

const mentorshipFeatures: FeatureItem[] = [
  {
    id: "1",
    title: "1-ON-1 WEEKLY BUILD SESSIONS (LIVE)",
    description:
      "We build your agent together; step by step, live on live on screen.",
  },
  {
    id: "2",
    title: "UNLIMITED SUPPORT BETWEEN CALLS",
    description:
      "Message me anytime! I'll review your work, help you fix what's broken, and guide you forward.",
  },
  {
    id: "3",
    title: "READY-TO-SELL AI AGENT BY WEEK 4",
    description:
      "You don't just build something cool. You'll end the mentorship with a working, demo-ready AI agent you can sell, pitch, or deploy immediately.",
  },
];

export default function MentorshipSection() {
  const { colors } = useTheme();
  const handleAction = useActionButton();

  return (
    <section className="w-full bg-white py-16 px-4 lg:px-8 container mx-auto ">
      <div className="max-w-6xl mx-auto">
        <AnimatedElement
          as="div"
          animation="slideUp"
          duration={0.6}
          className="text-center mb-12"
        >
          <H1 bold className="mb-6">
            THIS IS EXACTLY WHAT YOU&apos;LL GET
          </H1>
          <div className="flex justify-center mb-8">
            <Paragraph className="max-w-3xl mx-auto text-center">
              You&apos;re getting certainty → That your idea will get built →
              That you&apos;ll get hands-on support → And that you&apos;ll
              actually finish with ready-to-sell AI agent.
            </Paragraph>
          </div>
        </AnimatedElement>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-2">
          <AnimatedElement
            as="div"
            animation="slideUp"
            delay={0.2}
            duration={0.6}
            className="lg:col-span-2 flex justify-center flex-1"
          >
            <div
              className="relative rounded-2xl max-w-[480px] p-8"
              style={{ backgroundColor: colors.primary }}
            >
              <div
                className="absolute z-10"
                style={{
                  top: "-3rem",
                  left: "-3rem",
                }}
              >
                <Image
                  src="/images/utils/crown.png"
                  alt="Crown"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div
                className="absolute z-10 p-2 rounded-md"
                style={{
                  background: colors.lightPurple,
                  top: "-20px",
                  left: "260px",
                }}
              >
                <H2 color={colors.white}>MOST POPULAR</H2>
              </div>

              <div className="flex justify-between items-center mb-8 content-center">
                <H2 color={colors.white}>1:1 MENTORSHIP</H2>
                <H2 color={colors.white}>$999</H2>
              </div>

              <div className="space-y-6 mb-4 ">
                {mentorshipFeatures.map((feature, index) => (
                  <AnimatedElement
                    key={feature.id}
                    as="div"
                    animation="slideUp"
                    delay={0.4 + index * 0.1}
                    duration={0.6}
                    className="flex gap-1 flex-col"
                  >
                    <div className="flex items-center justify-start gap-2">
                      <PrimaryCheckIcon
                        fill={colors.white}
                        width={28}
                        height={28}
                        checkFill={colors.primary}
                      />
                      <H3 color={colors.white}>{feature.title}</H3>
                    </div>
                    <ul className="list-none ml-10">
                      <li className="text-white/90 text-sm relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-white before:rounded-full">
                        {feature.description}
                      </li>
                    </ul>
                  </AnimatedElement>
                ))}
              </div>

              <AnimatedElement
                as="div"
                animation="slideUp"
                delay={0.8}
                duration={0.6}
              >
                <Button
                  size="md"
                  icon={<Send size={28} />}
                  iconPosition="left"
                  onClick={handleAction}
                  className="w-full"
                  bg="white"
                  textColor={colors.primary}
                >
                  <H3 color={colors.primary}>
                    BOOK YOUR FIRST FREE 1:1 STRATEGY SESSION
                  </H3>
                </Button>
              </AnimatedElement>

              <AnimatedElement
                as="div"
                animation="slideUp"
                delay={1.0}
                duration={0.6}
              >
                <Button
                  size="md"
                  icon={
                    <PrimaryCheckIcon
                      fill={colors.white}
                      width={28}
                      height={28}
                      checkFill={colors.primary}
                    />
                  }
                  iconPosition="left"
                  onClick={() => console.log("Bonus clicked")}
                  className="w-full mt-4"
                  bg={colors.lightPurple}
                  textColor={colors.white}
                >
                  <H3 color={colors.white}>
                    BONUS ACCESS: SELF-PACED AI AGENT COURSE
                  </H3>
                </Button>
              </AnimatedElement>
            </div>
          </AnimatedElement>

          <AnimatedElement
            as="div"
            animation="slideUp"
            delay={0.4}
            duration={0.6}
            className="flex flex-col items-center lg:items-start flex-1"
          >
            <div className="relative mb-6 flex justify-center">
              <Image
                src="/images/utils/chill-garanteed.png"
                alt="30 Day Money Back Guarantee - CHILL"
                width={315}
                height={237}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col  gap-4 max-w-[320px]">
              <H3 className="mb-4">THE CHILL GUARANTEE</H3>
              <Span>
                Try my mentorship risk-free for 30 days with my CHILL guarantee.
                I&apos;m sure you&apos;ll love it, but if you&apos;re not
                satisfied or haven&apos;t had a chance build out your AI agent,
                I&apos;ll give you a full refund with no questions asked. For
                full details of my policy, please read the section on the{" "}
                <a
                  href="/terms"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Terms & Conditions
                </a>{" "}
                page.
              </Span>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
