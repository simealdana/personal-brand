"use client";

import Link from "next/link";

interface CategoryLinkProps {
  category: string;
}

export default function CategoryLink({ category }: CategoryLinkProps) {
  return (
    <Link
      href={`/blog/categories/${category.toLowerCase()}`}
      className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
      onClick={(e) => e.stopPropagation()}
    >
      {category}
    </Link>
  );
}
