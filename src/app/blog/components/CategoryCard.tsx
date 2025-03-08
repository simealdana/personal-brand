import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  count: number;
}

export default function CategoryCard({
  name,
  slug,
  description,
  count,
}: CategoryCardProps) {
  // More vibrant background colors
  const getBgColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "web development":
      case "web-development":
        return "bg-green-100 hover:bg-green-200 active:bg-green-300";
      case "ai":
        return "bg-purple-100 hover:bg-purple-200 active:bg-purple-300";
      case "devops":
        return "bg-orange-100 hover:bg-orange-200 active:bg-orange-300";
      case "productivity":
        return "bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-300";
      case "prompt engineering":
      case "prompt-engineering":
        return "bg-blue-100 hover:bg-blue-200 active:bg-blue-300";
      default:
        return "bg-gray-100 hover:bg-gray-200 active:bg-gray-300";
    }
  };

  return (
    <Link
      href={`/blog/categories/${slug}`}
      className={`block p-8 rounded-xl transition-all ${getBgColor(name)} 
        hover:shadow-md hover:scale-[1.02] active:scale-[0.98] active:shadow-inner
        transform duration-200 ease-in-out border border-transparent hover:border-gray-200`}
    >
      <div className="mb-4">
        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white shadow-sm">
          {name}
        </span>
      </div>

      <h2 className="text-3xl font-black tracking-tight mb-3">{name}</h2>
      <p className="text-gray-700 mb-2">{description}</p>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">
          {count} {count === 1 ? "article" : "articles"}
        </span>
        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          View →
        </span>
      </div>
    </Link>
  );
}
