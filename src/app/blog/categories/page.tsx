import { Metadata } from "next";
import Link from "next/link";
import BlogHeader from "../components/BlogHeader";
import { CATEGORIES, BLOG_POSTS } from "../data/posts";

export const metadata: Metadata = {
  title: "Blog Categories | Tech Blog",
  description:
    "Browse all categories of our tech blog and find articles on web development, programming, AI, and more.",
};

export default function CategoriesPage() {
  // Count posts per category
  const categoriesWithCount = CATEGORIES.map((category) => {
    const count = BLOG_POSTS.filter(
      (post) => post.category === category.name
    ).length;
    return {
      ...category,
      count,
    };
  });

  return (
    <div className="bg-neutral-50 min-h-screen">
      <BlogHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link
                    href="/blog"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Blog
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm text-gray-500">Categories</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Blog Categories
          </h1>
          <p className="text-lg text-gray-600">
            Browse our articles by topic to find the content that interests you
            most
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesWithCount.map((category, index) => (
            <Link
              key={index}
              href={`/blog/category/${category.slug}`}
              className={`${category.color} rounded-2xl p-6 transition-all hover:shadow-md`}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">{category.name}</h2>
                <span className="bg-white px-2 py-1 rounded-full text-xs font-medium">
                  {category.count}{" "}
                  {category.count === 1 ? "article" : "articles"}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                {category.description}
              </p>
              <div className="text-sm font-medium">View articles →</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
