import { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Bot,
  Code,
  Database,
  MessageSquare,
  Search,
  Target,
  Zap,
} from "lucide-react";

export interface CourseLesson {
  title: string;
  description: string;
}

export interface CourseModule {
  id: number;
  title: string;
  icon: LucideIcon;
  color: string;
  lessons: CourseLesson[];
}

export const courseModules: CourseModule[] = [
  {
    id: 0,
    title: "Course Introduction",
    icon: BookOpen,
    color: "blue",
    lessons: [
      {
        title: "Introduction",
        description:
          "General presentation of the course, methodology and what will be achieved upon completion",
      },
      {
        title: "Who is this course aimed at?",
        description:
          "Explanation of who the course is aimed at: both technical and non-technical profiles",
      },
      {
        title:
          "What is N8N and why have we chosen this tool? - Introduction to n8n",
        description:
          "Introduction to n8n as a central tool for automation and orchestration of agents",
      },
    ],
  },
  {
    id: 1,
    title: "AI Agents Mindset (Practical Foundations)",
    icon: Bot,
    color: "purple",
    lessons: [
      {
        title: "What is an AI agent and how to think about it",
        description:
          "Fundamental concepts about what an AI agent is and how to approach it mentally when building them",
      },
      {
        title: "Automation vs. Agents",
        description:
          "Differences between simple automations and true AI agents with reasoning capabilities",
      },
      {
        title: "How data flows in n8n",
        description:
          "How data flows within n8n, understanding the items model and workflow execution",
      },
      {
        title: "Basic agent flow patterns",
        description:
          "Practical patterns for building agents within n8n for different types of logic",
      },
    ],
  },
  {
    id: 2,
    title: "Basic n8n + debugging (pure technique)",
    icon: Code,
    color: "green",
    lessons: [
      {
        title: "How to setup the OpenAI credentials",
        description: "Initial configuration of OpenAI credentials within n8n",
      },
      {
        title: "Basic nodes: webhook, http, set, if, function, AI agent node",
        description: "Using basic nodes to build functional workflows",
      },
      {
        title: "Debugging in n8n (logs, errors, real troubleshooting)",
        description: "How to debug, identify errors and read logs within n8n",
      },
      {
        title: "Error handling, retries, flow validation",
        description:
          "How to handle errors, implement retries and validate flows before executing them",
      },
    ],
  },
  {
    id: 3,
    title: "Prompting to AI Agent",
    icon: MessageSquare,
    color: "orange",
    lessons: [
      {
        title: "Why is the prompt style focused on AI Agent important?",
        description:
          "Why the way you build prompts is fundamental for agent behavior",
      },
      {
        title:
          "How to create effective prompts for AI agents and different types of prompts",
        description:
          "Techniques for creating effective prompts according to the type of task the agent should perform",
      },
    ],
  },
  {
    id: 4,
    title: "Smart inputs and external data connection",
    icon: Database,
    color: "indigo",
    lessons: [
      {
        title:
          "Data classification + applied examples (customer support + reviews sentiment)",
        description:
          "How to classify information from smart inputs and applied cases of ticket or review classification",
      },
      {
        title: "How to connect to Supabase and simple example",
        description: "How to connect n8n to Supabase to store or consume data",
      },
      {
        title: "How to connect to Airtable and simple example",
        description: "Connection to Airtable and basic use in workflows",
      },
      {
        title: "How to create Google credentials and connect to Google Sheets",
        description: "Credential configuration to integrate Google Sheets",
      },
      {
        title: "How to use Gmail with n8n",
        description: "Using Gmail within automation flows",
      },
      {
        title:
          "Webhook authentication: protecting your external inputs (secure webhook design)",
        description:
          "How to protect webhooks and validate external inputs in n8n",
      },
      {
        title:
          "External API integrations & handling authentication (OAuth, API keys, tokens)",
        description:
          "How to integrate external APIs and manage their authentications",
      },
    ],
  },
  {
    id: 5,
    title: "Scraping Agent",
    icon: Search,
    color: "red",
    lessons: [
      {
        title:
          "Introduction: why scraping matters for AI agents and how it unlocks powerful business automation",
        description:
          "Why scraping is key to feeding agents with real-time business data",
      },
      {
        title:
          "Full scraping pipeline: extracting product data from competitors, pagination, delays and anti-block protections",
        description:
          "Complete scraping pipeline: pagination, delays, header rotation and anti-blocking protection",
      },
      {
        title:
          "Integrating scraped data into agents to create real-time pricing intelligence",
        description:
          "How to use extracted data to create real-time pricing intelligence",
      },
    ],
  },
  {
    id: 6,
    title: "RAG chatbot",
    icon: MessageSquare,
    color: "pink",
    lessons: [
      {
        title:
          "Introduction: why RAG systems unlock real memory for your AI agents (introducing vector databases, Pinecone & Supabase vector)",
        description:
          "Introduction to the concept of real memory with RAG and vector databases",
      },
      {
        title:
          "Building your first RAG system inside n8n: document ingestion, embeddings creation, and vector db storage",
        description:
          "Complete pipeline for loading documents, generating embeddings and storing them in vector db",
      },
      {
        title:
          "Building the full AI agent: question answering, context retrieval, and combining vector search with OpenAI",
        description:
          "Complete creation of an agent capable of answering questions using vector search and OpenAI",
      },
    ],
  },
  {
    id: 7,
    title: "Lead generation",
    icon: Target,
    color: "yellow",
    lessons: [
      {
        title:
          "Introduction: how AI agents can automate lead generation and qualification (why this is one of the hottest agent use cases)",
        description:
          "Introduction to automatic lead generation and qualification using agents",
      },
      {
        title:
          "Building a full AI agent for lead discovery: scraping directories, collecting contacts, and enriching data",
        description:
          "Building a complete agent to discover and enrich leads from scraping and public databases",
      },
      {
        title:
          "Full qualification agent: analyzing leads with OpenAI, scoring them, and auto-populating your CRM",
        description:
          "How to analyze, qualify leads and automatically update a CRM",
      },
    ],
  },
  {
    id: 8,
    title: "Extra real life Agents",
    icon: Zap,
    color: "teal",
    lessons: [
      {
        title: "AI voice agent using ElevenLabs",
        description: "Building a voice agent using ElevenLabs",
      },
      {
        title: "AI voice agent using Vapi",
        description: "Creating voice agents via Vapi",
      },
      {
        title: "Adding N8N automation to our website",
        description: "How to add n8n automations directly to a website",
      },
    ],
  },
];
