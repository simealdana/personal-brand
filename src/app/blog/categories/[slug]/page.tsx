import { Metadata } from "next";
import Link from "next/link";
import { BLOG_CATEGORIES } from "../../data/categories";
import { BLOG_POSTS } from "../../data/posts";
import TutorialCard from "../../components/TutorialCard";
import CategoryNav from "../../components/CategoryNav";

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

  // Filter posts for this category
  const categoryPosts = BLOG_POSTS.filter(
    (post) =>
      post.category.toLowerCase().replace(/\s+/g, "-") === params.slug ||
      post.categories?.includes(params.slug)
  );

  // If category doesn't exist, show custom message instead of 404
  if (!category) {
    return (
      <div className="bg-neutral-50 min-h-screen">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Always include CategoryNav with original styling */}
          <CategoryNav />

          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-6">
              Sorry, we couldn&apos;t find the category you&apos;re looking for.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Back to Blog
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter mb-2">
              {category.name}
            </h1>
            <p className="text-gray-600">{category.description}</p>
          </div>
          <Link
            href="/blog"
            className="bg-neutral-200 hover:bg-neutral-300 transition-colors px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
          >
            <span className="text-lg">←</span> Back to Blog
          </Link>
        </div>

        {/* Category Navigation - original chips */}
        <CategoryNav />

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {categoryPosts.length > 0 ? (
            categoryPosts.map((post) => (
              <TutorialCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                category={post.category}
                date={post.date}
                duration={post.readTime}
                image={post.image}
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-8 text-gray-500">
              No posts found in this category yet.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
