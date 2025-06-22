import { Star, Code, Users, Bot } from "lucide-react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import StarBackground from "@/components/StarBackground";
import CourseModulesSection from "./components/CourseModulesSection";
import PurchaseButton from "@/components/PurchaseButton";

export default function CourseWaitlistPage() {
  return (
    <StarBackground className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative z-10">
            <div className="bg-blue-100 rounded-full px-4 py-1 flex items-center justify-center gap-2 border border-blue-200 w-fit mx-auto mb-8">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-gray-800 text-sm font-medium">
                Early Access Program
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Agent with N8N
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                for Beginners
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              <strong>From zero to building production-ready AI Agents.</strong>{" "}
              Master N8N and create real AI agents with hands-on projects.
              Perfect for beginners - no coding experience needed.
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
              <p className="text-gray-700 text-sm">
                <strong>🎯 Complete Curriculum:</strong> 9 comprehensive modules
                covering everything from N8N basics to advanced multi-agent
                systems, RAG chatbots, and production deployment.
              </p>
            </div>

            {/* Email Form Component */}
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/images/course_image.png"
                alt="AI Agent with N8N for Beginners"
                width={400}
                height={228}
                className="rounded-lg shadow-2xl border border-gray-200"
              />
              <PurchaseButton
                className="mt-4"
                href="https://simeon-s-site-a58b.thinkific.com/enroll/3410007?price_id=4322550"
              />
              <p className="mt-2 text-sm text-gray-500">
                Or,{" "}
                <a
                  href="https://github.com/simealdana/ai-agent-n8n-course/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  explore the free resources on GitHub
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum Section Component */}
      <CourseModulesSection />

      {/* What You'll Learn Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You&apos;ll Actually Build
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Real AI Agents and automations that work in production. No fluff,
              no theory-only content — just practical skills you can use
              immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-white/90">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 border border-blue-200">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                N8n AI Agent Fundamentals
              </h3>
              <p className="text-gray-700">
                Master N8n from zero to advanced. Build your first AI agents
                with no coding experience required. Learn the fundamentals that
                everything else builds on.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-white/90">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 border border-purple-200">
                <Bot className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                RAG Systems & Data Integration
              </h3>
              <p className="text-gray-700">
                Build intelligent chatbots with memory using RAG systems.
                Connect to databases, APIs, and external services to create
                powerful data-driven agents.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-white/90">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 border border-green-200">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Production-Ready Projects
              </h3>
              <p className="text-gray-700">
                Build real lead generation systems, voice agents, and web
                scraping automations. Work on projects that can help you land a
                job or start your own AI agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Build with AI?
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Start your journey today and become a proficient AI agent developer.
        </p>
        <PurchaseButton href="https://simeon-s-site-a58b.thinkific.com/enroll/3410007?price_id=4322550" />
        <p className="mt-4 text-sm text-gray-500">
          Or,{" "}
          <a
            href="https://github.com/simealdana/ai-agent-n8n-course/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            explore the free resources on GitHub
          </a>
          .
        </p>
      </section>
    </StarBackground>
  );
}
