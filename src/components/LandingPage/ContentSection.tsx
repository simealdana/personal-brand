"use client";

import React from "react";
import { H1 } from "@/lib/ui/heading";
import { Paragraph } from "@/lib/ui/text";
import { useTheme } from "@/lib/ui/useTheme";
import { RedditEmbed, YouTubeEmbed } from "@/lib/ui/embed";

interface PostItem {
  id: string;
  title: string;
  excerpt: string;
  timestamp: string;
  platform: "reddit" | "youtube";
  url: string;
  duration?: string;
  thumbnail?: string;
  videoId?: string;
}

const viralPosts: PostItem[] = [
  {
    id: "1",
    title:
      "Most people calling their ai 'agents' are just building fancy automations. here's the actual difference you need to understand.",
    excerpt: "The distinction between simple automations and true AI agents...",
    timestamp: "1 mo ago",
    platform: "reddit",
    url: "https://www.reddit.com/r/n8n/comments/1l75dzf/most_people_calling_their_ai_agents_are_just/",
  },
  {
    id: "2",
    title:
      "Everyone says you can build AI Agents in n8n - but most agent types aren't even possible.",
    excerpt:
      "GPT-4 and different agent types (reactive, deliberative, goal-based)...",
    timestamp: "2 mo ago",
    platform: "reddit",
    url: "https://www.reddit.com/r/AI_Agents/comments/1l4v9zw/everyone_says_you_can_build_ai_agents_in_n8n_but/",
  },
  {
    id: "3",
    title: "I created an AI voice agent with n8n",
    excerpt: "Learn how to build voice agents using n8n...",
    timestamp: "3 mo ago",
    platform: "reddit",
    url: "https://www.reddit.com/r/n8n/comments/1k8hh0i/i_created_an_ai_voice_agent_with_n8n/",
  },
];

const videoContent: PostItem[] = [
  {
    id: "4",
    title: "MCP For Beginners + n8n Creating Amazing Automations with AI.",
    excerpt:
      "Learn how to create powerful automations with AI using MCP and n8n.",
    timestamp: "2 weeks ago",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=k9dkpY7Qaos",
    videoId: "k9dkpY7Qaos",
    duration: "14:47",
    thumbnail: "/images/utils/hero-main-image.png",
  },
  {
    id: "5",
    title: "BUILD AI VOICE AGENT",
    excerpt: "Create your own AI voice agent using n8n and ElevenLabs.",
    timestamp: "1 week ago",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=YHEvXK-ObiE",
    videoId: "YHEvXK-ObiE",
    duration: "10:34",
    thumbnail: "/images/utils/hero-main-image-secondary.png",
  },
];

export default function ContentSection() {
  const { colors } = useTheme();
  return (
    <section
      style={{
        background: colors.bgSecondary,
      }}
    >
      <div className="px-4 container mx-auto py-16 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <H1 bold className="mb-4">
              TRUSTED VOICE IN THE AI-AGENT SPACE
            </H1>
            <Paragraph className="text-lg">
              Some of the latest viral posts I created about building AI-agents.
            </Paragraph>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {viralPosts.map((post) => (
                <div key={post.id} className="h-full">
                  <RedditEmbed url={post.url} height={316} className="h-full" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoContent.map((video) => (
              <div key={video.id} className="h-[400px]">
                <YouTubeEmbed
                  videoId={video.videoId!}
                  width={560}
                  height={315}
                  title={video.title}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
