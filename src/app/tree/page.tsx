import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import styles from "./styles.module.css";
import { LINKS, SOCIAL_LINKS, USER_INFO } from "./constants";
import AnimatedLink from "./components/AnimatedLink";
import AnimatedSocialIcon from "./components/AnimatedSocialIcon";
import AnimatedProfile from "./components/AnimatedProfile";
import { ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Link Tree | Simeon | AI Instructor",
  description: "Connect with me through various platforms",
};

const YOUTUBE_URL = "https://www.youtube.com/embed/VeNvjblXxCg";

export default function TreePage() {
  return (
    <main
      className={cn(
        "tree-page min-h-screen flex flex-col items-center justify-start py-8 px-4",
        styles.gradientBackground
      )}
    >
      <div className="tree-page__container w-full max-w-md flex flex-col items-center gap-6">
        {/* Profile Image */}
        <AnimatedProfile
          imageSrc={USER_INFO.profileImage}
          alt={USER_INFO.name}
        />

        {/* Name */}
        <div
          className="bg-white/90 backdrop-blur-sm px-6 py-3 shadow-lg border border-white/30"
          style={{ borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%" }}
        >
          <h1 className="tree-page__name text-2xl font-black text-gray-900">
            {USER_INFO.name}
          </h1>
        </div>

        {/* Description */}
        <div
          className="bg-white/85 backdrop-blur-sm px-6 py-4 shadow-md border border-white/20"
          style={{ borderRadius: "40% 60% 50% 70% / 60% 30% 70% 40%" }}
        >
          <p className="tree-page__description text-gray-800 text-center font-bold">
            {USER_INFO.description}
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full mb-6">
          <div className="relative w-full aspect-video bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
            <iframe
              className="w-full h-full"
              src={YOUTUBE_URL}
              title="AI Mentorship Program"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Special CTA Button - destacado */}
        <div className="w-full mb-6">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-lg"></div>
            <Link
              href="/apply"
              className="relative w-full group px-6 py-4 bg-white/95 backdrop-blur-sm text-gray-900 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-3 shadow-lg border border-white/30"
            >
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              Apply for AI Mentorship
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-xs text-gray-800 text-center mt-2 font-bold drop-shadow-sm">
            🔥 Limited spots • Personal 1:1 guidance
          </p>
        </div>

        {/* Original Links - mantenidos tal como estaban */}
        <div className="tree-page__links w-full flex flex-col gap-4">
          {LINKS.map((link, index) => (
            <AnimatedLink
              key={index}
              href={link.href}
              label={link.label}
              index={index}
              target={link.target}
            />
          ))}
        </div>

        {/* Social Media Links */}
        <div className="tree-page__social-links flex gap-6 mt-6">
          {SOCIAL_LINKS.map((social, index) => (
            <AnimatedSocialIcon
              key={index}
              href={social.href}
              platform={social.platform}
              icon={social.icon}
              index={index}
            />
          ))}
        </div>

        {/* Logo/Footer */}
        <div className="tree-page__footer mt-12 opacity-70">
          <div className="tree-page__logo-container w-16 h-16 relative mb-2"></div>
          <p className="text-xs text-white/60">{USER_INFO.copyright}</p>
        </div>
      </div>
    </main>
  );
}
