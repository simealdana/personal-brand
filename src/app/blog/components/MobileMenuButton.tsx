"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenuButton() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-20"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            // X icon when menu is open
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon when menu is closed
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-10 pt-20 px-4">
          <nav className="flex flex-col gap-6 items-center">
            <Link
              href="/blog"
              className="text-neutral-700 hover:text-black transition-colors text-xl py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog/guides"
              className="text-neutral-700 hover:text-black transition-colors text-xl py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Guides
            </Link>
            <Link
              href="/blog/categories"
              className="text-neutral-700 hover:text-black transition-colors text-xl py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/#contact-me"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors text-xl mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact me
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
