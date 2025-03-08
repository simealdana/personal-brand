import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CategoryTag from "./components/CategoryTag";
import ArticleCard from "./components/ArticleCard";
import FeaturedArticle from "./components/FeaturedArticle";
import TutorialCard from "./components/TutorialCard";
import CategoryPill from "./components/CategoryPill";
import { BLOG_POSTS, CATEGORIES } from "./data/posts";

import CategoryNav from "./components/CategoryNav";
import { CategoryType } from "./types";

export const metadata: Metadata = {
  title: "Tech Blog | Latest Technology News and Tutorials",
  description:
    "Stay updated with the latest technology news, tutorials, and insights on programming, AI, web development, and more.",
};

// Force static generation
export const dynamic = "force-static";

export default function BlogPage() {
  // Obtenemos el post más reciente para destacarlo
  const featuredPost = BLOG_POSTS[BLOG_POSTS.length - 1];
  const otherPosts = BLOG_POSTS.slice(0, BLOG_POSTS.length - 1);

  // Get the second post for the main section
  const mainPost = BLOG_POSTS[2]; // Next.js post

  // Get the AI post for the side section
  const sidePost = BLOG_POSTS[0]; // AI prompts post

  // Get related posts for the main post
  const relatedPosts = mainPost.relatedPosts;

  // Get categories for display
  const displayCategories = CATEGORIES.slice(0, 8);

  return (
    <div className="bg-neutral-50 min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Blog Title */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-black tracking-tighter">BLOG</h1>
          <Link
            href="/blog/all"
            className="bg-neutral-200 hover:bg-neutral-300 transition-colors px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
          >
            Read Our Blog <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Navegación por categorías */}
        <CategoryNav />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Article - Left Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <FeaturedArticle
              slug={featuredPost.slug}
              title={featuredPost.title}
              category={featuredPost.category}
              date={featuredPost.date}
              image={featuredPost.image}
            />
          </div>

          {/* Main Content - Middle Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Main Article */}
            <div className="bg-lime-100 rounded-3xl p-6 flex flex-col h-full">
              <CategoryTag category={mainPost.category} />

              <h2 className="text-3xl font-black mt-4 mb-6">
                {mainPost.title}
              </h2>

              <p className="text-sm mb-4">
                {mainPost.excerpt}{" "}
                <Link
                  href={`/blog/${mainPost.slug}`}
                  className="text-black font-medium"
                >
                  More
                </Link>
              </p>

              {/* Related Articles */}
              {relatedPosts.map((slug: string, index: number) => {
                const postData =
                  BLOG_POSTS.find((post) => post.slug === slug) ||
                  BLOG_POSTS[index + 1];
                return (
                  <ArticleCard
                    key={index}
                    slug={postData.slug}
                    title={postData.title}
                    category={postData.category}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Column (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Side Article */}
            <div className="bg-sky-100 rounded-3xl p-6 flex flex-col">
              <CategoryTag category={sidePost.category} />
              <div className="mt-2 text-xs">{sidePost.date}</div>

              <h2 className="text-2xl font-black mt-2 mb-4">
                {sidePost.title}
              </h2>

              <div className="mt-auto relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src={sidePost.image}
                  alt={sidePost.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-purple-100 rounded-3xl p-6">
              <div className="flex flex-wrap gap-2">
                {displayCategories.map(
                  (category: CategoryType, index: number) => (
                    <CategoryPill key={index} category={category.name} />
                  )
                )}
              </div>

              <div className="mt-6 flex justify-between items-center">
                <h3 className="text-lg font-bold">View All Categories</h3>
                <Link
                  href="/blog/categories"
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Posts adicionales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {otherPosts.map((post) => (
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
      </main>
    </div>
  );
}
