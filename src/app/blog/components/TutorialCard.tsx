import React from "react";
import Link from "next/link";
import Image from "next/image";
import CategoryTag from "./CategoryTag";

interface TutorialCardProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  duration: string;
  image: string;
}

export default function TutorialCard({
  slug,
  title,
  category,
  date,
  duration,
  image,
}: TutorialCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <CategoryTag category={category} />
            <span className="text-sm text-gray-500">{duration}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </Link>
  );
}
