import React from "react";
import Link from "next/link";

type CategoryPillProps = {
  category: string;
};

export default function CategoryPill({ category }: CategoryPillProps) {
  // Create a slug from the category name
  const slug = category.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/blog/category/${slug}`}>
      <div className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium hover:bg-black hover:text-white transition-colors">
        {category}
      </div>
    </Link>
  );
}
