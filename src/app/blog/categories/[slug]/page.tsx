import { Metadata } from "next";
import Link from "next/link";
import { BLOG_CATEGORIES } from "../../data/categories";
import { BLOG_POSTS } from "../../data/posts";
import TutorialCard from "../../components/TutorialCard";

type Props = {
  params: {
    slug: string;
  };
};

// Generate metadata for each category page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = BLOG_CATEGORIES.find((cat) => cat.slug === params.slug);

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found.",
    };
  }

  return {
    title: `${category.name} Articles | Tech Blog`,
    description: `Browse our collection of articles about ${category.name.toLowerCase()}.`,
  };
}

// Generate static params for all categories
export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: Props) {
  const category = BLOG_CATEGORIES.find((cat) => cat.slug === params.slug);

  // If category doesn't exist, show custom message instead of 404
  if (!category) {
    return (
      <div className="container mx-auto px-4 text-center py-24 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-10">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Category Not Found
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Sorry, we couldn&apos;t find the category you&apos;re looking for.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog Home
          </Link>
        </div>
      </div>
    );
  }

  // Filter posts for this category
  const categoryPosts = BLOG_POSTS.filter(
    (post) =>
      post.category === category.name ||
      (post.categories && post.categories.includes(category.slug))
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 mb-12 text-white shadow-xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl mb-6 text-blue-100">{category.description}</p>
          <div className="flex space-x-2">
            <Link
              href="/blog"
              className="bg-white text-blue-700 px-5 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              All Articles
            </Link>
            <Link
              href="/"
              className="bg-blue-800 bg-opacity-50 text-white px-5 py-2 rounded-lg hover:bg-opacity-70 transition-colors duration-200"
            >
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Category posts section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          Latest Articles
        </h2>

        {categoryPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map((post) => (
              <div
                key={post.slug}
                className="transform hover:-translate-y-1 transition-transform duration-200"
              >
                <TutorialCard
                  slug={post.slug}
                  title={post.title}
                  category={post.category}
                  date={post.date}
                  duration={post.readTime}
                  image={post.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-12 text-center">
            <p className="text-xl text-gray-600">
              No articles in this category yet.
            </p>
            <p className="mt-2 text-gray-500">
              Check back soon for new content!
            </p>
          </div>
        )}
      </div>

      {/* Other categories section */}
      <div className="mt-16 pt-8 border-t">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Explore Other Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {BLOG_CATEGORIES.filter((cat) => cat.slug !== params.slug).map(
            (cat) => (
              <Link
                key={cat.slug}
                href={`/blog/categories/${cat.slug}`}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 transition-colors duration-200"
              >
                {cat.name}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
