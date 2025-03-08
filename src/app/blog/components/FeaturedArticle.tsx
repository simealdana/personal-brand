import React from "react";
import Link from "next/link";
import Image from "next/image";
import CategoryTag from "./CategoryTag";

interface FeaturedArticleProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
}

export default function FeaturedArticle({
  slug,
  title,
  category,
  date,
  image,
}: FeaturedArticleProps) {
  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <div className="relative bg-orange-100 rounded-3xl h-full overflow-hidden p-6 flex flex-col">
        <CategoryTag category={category} />
        <div className="mt-2 text-xs">{date}</div>

        <h2 className="text-3xl font-black mt-4 mb-6">{title}</h2>

        <div className="mt-auto relative h-[500px] rounded-2xl overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </Link>
  );
}
