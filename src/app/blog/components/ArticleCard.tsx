import React from "react";
import Link from "next/link";

type ArticleCardProps = {
  slug: string;
  title: string;
  category: string;
};

export default function ArticleCard({
  slug,
  title,
  category,
}: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block mt-4 group">
      <div className="border-t border-black/10 pt-4">
        <div className="text-xs font-medium">{category}</div>
        <h3 className="text-base font-bold mt-1 group-hover:underline">
          {title}
        </h3>
      </div>
    </Link>
  );
}
