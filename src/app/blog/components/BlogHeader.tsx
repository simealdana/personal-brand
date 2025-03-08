"use client";

import Link from "next/link";
import Image from "next/image";

export default function BlogHeader() {
  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Simeon | AI Instructor"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="font-bold text-lg">Simeon | AI Instructor</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/blog"
              className="text-neutral-700 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog/guides"
              className="text-neutral-700 hover:text-black transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/blog/categories"
              className="text-neutral-700 hover:text-black transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/#contact-me"
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Contact me
            </Link>
          </nav>

          {/* Mobile Menu Button - Simple version */}
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
