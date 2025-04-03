"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactMe = () => {
    const currentUrl = window.location.href;
    if (currentUrl.includes("#contact-me")) {
      window.location.href = currentUrl.replace("#contact-me", "");
    } else {
      window.location.href = `${currentUrl}#contact-me`;
    }
  };

  // const handleGoToTool = (type: string) => {
  //   window.location.href = `/tools/${type}`;
  // };

  return (
    <>
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Simeon.io"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="font-bold text-lg">Simeon | AI Instructor</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/about"
                className="text-neutral-700 hover:text-black transition-colors"
              >
                About Me
              </Link>
              <Link
                href="/blog"
                className="text-neutral-700 hover:text-black transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/downloads"
                className="text-neutral-700 hover:text-black transition-colors"
              >
                Downloads
              </Link>

              <Button
                className="bg-black text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors"
                onClick={handleContactMe}
              >
                Contact Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 top-0 left-0 w-full h-full overflow-hidden">
          <div className="pt-24 px-6 h-full">
            <nav className="flex flex-col gap-8 items-center">
              <Link
                href="/about"
                className="text-neutral-700 hover:text-black transition-colors text-xl py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Me
              </Link>
              <Link
                href="/blog"
                className="text-neutral-700 hover:text-black transition-colors text-xl py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/tools/ai-prompt-generator"
                className="text-neutral-700 hover:text-black transition-colors text-xl py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI Prompt Generator
              </Link>
              <Button
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors text-xl mt-4"
                onClick={() => {
                  handleContactMe();
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact Me
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
