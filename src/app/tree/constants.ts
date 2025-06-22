// Define link types
export type LinkItem = {
  label: string;
  href: string;
  target?: string;
};

// Constants for links
export const LINKS: LinkItem[] = [
  { label: "New Course", href: "/course", target: "_self" },
  { label: "Download Resources", href: "/downloads", target: "_self" },
  { label: "Blog", href: "/blog", target: "_self" },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@simeonaldana",
    target: "_blank",
  },
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
  description:
    "8+ years building real systems in the industry. Tired of tutorials that leave you stuck? Ready to build real AI agents that actually work? Stop learning alone and get the 1:1 guidance you need to finally launch something.",
  profileImage: "/images/logo.png",
  logo: "/images/logo.svg",
  copyright: "© 2025 Cover io",
};
