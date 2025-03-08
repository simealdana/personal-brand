import { Metadata } from "next";
import Link from "next/link";
import { BLOG_CATEGORIES, getCategoryCount } from "../data/categories";
import CategoryCard from "../components/CategoryCard";

export const metadata: Metadata = {
  title: "Blog Categories | Tech Blog",
  description: "Browse all categories of articles and tutorials.",
};

export default function CategoriesPage() {
  // Filter to only include categories that have at least one post
  const categoriesWithPosts = BLOG_CATEGORIES.filter((category) => {
    const count = getCategoryCount(category.slug);
    return count > 0;
  });

  return (
    <div className="bg-neutral-50 min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter mb-2">
              Categories
            </h1>
            <p className="text-gray-600">Browse articles by topic</p>
          </div>
          <Link
            href="/blog"
            className="bg-neutral-200 hover:bg-neutral-300 transition-colors px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
          >
            <span className="text-lg">←</span> Back to Blog
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {categoriesWithPosts.length > 0 ? (
            categoriesWithPosts.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                slug={category.slug}
                description={category.description}
                count={getCategoryCount(category.slug)}
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-16">
              <h2 className="text-2xl font-bold text-gray-500 mb-2">
                No Categories Yet
              </h2>
              <p className="text-gray-500">Check back soon for new content!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
