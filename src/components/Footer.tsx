import Link from "next/link";
import Image from "next/image";

const SOCIAL_LINKS = [
  {
    platform: "YouTube",
    image: "/images/youtube-logo.png",
    href: "https://www.youtube.com/@simeonaldana",
  },
  {
    platform: "TikTok",
    image: "/images/tiktok-logo.png",
    href: "https://www.tiktok.com/@simeonaldana",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Brand */}
          <div className="flex flex-col items-center space-y-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Simeon | AI Instructor"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h3 className="text-2xl font-bold text-white">
                Simeon | AI Instructor
              </h3>
            </Link>
            <p className="text-gray-400 text-center">
              Digital Product Consulting
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                aria-label={`Follow on ${social.platform}`}
              >
                <Image
                  src={social.image}
                  alt={`${social.platform} logo`}
                  width={20}
                  height={20}
                  className="transition-opacity duration-300 group-hover:opacity-90"
                />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Simeon | AI Instructor. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
