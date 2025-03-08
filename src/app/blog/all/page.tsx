import { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "../data/posts";
import TutorialCard from "../components/TutorialCard";
import CategoryNav from "../components/CategoryNav";

export const metadata: Metadata = {
  title: "All Blog Posts | Tech Blog",
  description:
    "Browse all our articles and tutorials on programming, web development, AI, and more.",
};

export default function AllPostsPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="bg-neutral-50 min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter mb-2">
              All Blog Posts
            </h1>
            <p className="text-gray-600">
              Browse all {BLOG_POSTS.length} articles and tutorials
            </p>
          </div>
          <Link
            href="/blog"
            className="bg-neutral-200 hover:bg-neutral-300 transition-colors px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
          >
            <span className="text-lg">←</span> Back to Blog
          </Link>
        </div>

        {/* Category Navigation */}
        <CategoryNav />

        {/* All Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {sortedPosts.map((post) => (
            <TutorialCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              category={post.category}
              date={post.date}
              duration={post.readTime}
              image={post.image}
            />
          ))}
        </div>

        {/* Empty State (in case there are no posts) */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-500 mb-2">
              No Posts Yet
            </h2>
            <p className="text-gray-500">Check back soon for new content!</p>
          </div>
        )}
      </main>
    </div>
  );
}
