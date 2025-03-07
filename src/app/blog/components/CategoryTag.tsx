import React from "react";

type CategoryTagProps = {
  category: string;
};

export default function CategoryTag({ category }: CategoryTagProps) {
  return (
    <div className="inline-block bg-white/80 text-black px-3 py-1 rounded-full text-xs font-medium">
      {category}
    </div>
  );
}
