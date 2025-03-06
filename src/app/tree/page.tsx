import { cn } from "@/lib/utils";
import { Metadata } from "next";
import styles from "./styles.module.css";
import { LINKS, SOCIAL_LINKS, USER_INFO } from "./constants";
import AnimatedLink from "./components/AnimatedLink";
import AnimatedSocialIcon from "./components/AnimatedSocialIcon";
import AnimatedProfile from "./components/AnimatedProfile";

export const metadata: Metadata = {
  title: "Link Tree | Simeon | AI Instructor",
  description: "Connect with me through various platforms",
};

export default function TreePage() {
  return (
    <main
      className={cn(
        "tree-page min-h-screen flex flex-col items-center justify-start py-12 px-4",
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
        <h1 className="tree-page__name text-2xl font-semibold text-white">
          {USER_INFO.name}
        </h1>

        {/* Description */}
        <p className="tree-page__description text-white/80 text-center mb-4">
          {USER_INFO.description}
        </p>

        {/* Links */}
        <div className="tree-page__links w-full flex flex-col gap-4">
          {LINKS.map((link, index) => (
            <AnimatedLink
              key={index}
              href={link.href}
              label={link.label}
              index={index}
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
