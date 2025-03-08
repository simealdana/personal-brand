"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BLOG_CATEGORIES } from "../data/categories";

export default function CategoryNav() {
  const pathname = usePathname();

  // Function to determine if a category is active
  const isActive = (path: string) => {
    if (path === "/blog" && pathname === "/blog") {
      return true;
    }
    if (path !== "/blog") {
      return pathname.includes(path);
    }
    return false;
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            isActive("/blog")
              ? "bg-black text-white"
              : "bg-white text-black border border-gray-200 hover:bg-gray-100"
          }`}
        >
          All Posts
        </Link>

        {BLOG_CATEGORIES.map((category) => {
          const categoryPath = `/blog/categories/${category.slug}`;
          return (
            <Link
              key={category.slug}
              href={categoryPath}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive(categoryPath)
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
