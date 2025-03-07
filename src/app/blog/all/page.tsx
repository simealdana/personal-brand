import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import CategoryLink from "../components/CategoryLink";
import {
  FEATURED_POSTS,
  MAIN_POSTS,
  RELATED_POSTS,
  VIDEO_POST,
} from "../constants";

// Combine all posts
const ALL_POSTS = [
  ...FEATURED_POSTS,
  ...MAIN_POSTS,
  ...RELATED_POSTS,
  VIDEO_POST,
];

// Sort posts by date (assuming date format is "DD MMM")
const SORTED_POSTS = [...ALL_POSTS].sort((a, b) => {
  const dateA = new Date(a.date + " 2024");
  const dateB = new Date(b.date + " 2024");
  return dateB.getTime() - dateA.getTime();
});

export const metadata: Metadata = {
  title: "All Blog Posts | Tech Blog",
  description: "Browse all our technology articles, tutorials, and insights.",
};

export default function AllPostsPage() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen pb-16">
      {/* Header/Navigation is assumed to be in the layout */}

      {/* All Posts Title Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              All Blog Posts
            </h1>
            <p className="text-white/80 text-lg">
              Browse our complete collection of technology articles, tutorials,
              and insights.
            </p>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SORTED_POSTS.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm h-full flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white">
                        <span className="sr-only">Featured post</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <CategoryLink category={post.category} />
                    <span className="text-xs text-gray-500">{post.date}</span>
                    {post.readTime && (
                      <span className="text-xs text-gray-500">
                        • {post.readTime} read
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {post.excerpt.length > 120
                      ? `${post.excerpt.substring(0, 120)}...`
                      : post.excerpt}
                  </p>
                  <div className="text-blue-600 font-medium text-sm flex items-center">
                    Read Article <span className="ml-1">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back to Blog Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Link
          href="/blog"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors inline-flex items-center"
        >
          Back to Blog Home <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}
