// Define link types
export type LinkItem = {
  label: string;
  href: string;
};

// Constants for links
export const LINKS: LinkItem[] = [
  { label: "Website", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Guides", href: "/blog/guides" },
  { label: "Contact me", href: "/#contact-me" },
];

// Constants for social media links
export type SocialLink = {
  platform: string;
  icon: string;
  href: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "YouTube",
    icon: "youtube",
    href: "https://www.youtube.com/@simeonaldana",
  },
  {
    platform: "TikTok",
    icon: "tiktok",
    href: "https://www.tiktok.com/@simeonaldana",
  },
];

// User info
export const USER_INFO = {
  name: "Simeon | AI Instructor",
  description: "Mindfulness and wellbeing",
  profileImage: "/images/logo.png",
  logo: "/images/logo.svg",
  copyright: "© 2025 Cover io",
};
