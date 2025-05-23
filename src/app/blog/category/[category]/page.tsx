import { Metadata } from "next";
import { CATEGORIES } from "../../constants";
import { notFound } from "next/navigation";
import CategoryNav from "../../components/CategoryNav";
import TutorialCard from "../../components/TutorialCard";
import { BLOG_POSTS } from "../../data/posts";
import { BLOG_CATEGORIES } from "../../data/categories";

// Combine all posts for lookup

type Props = {
  params: {
    slug: string;
  };
};

// Generate metadata for each category page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = CATEGORIES.find((cat) => cat.slug === params.slug);

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

  if (!category) {
    notFound();
  }

  // Filter posts belonging to this category
  const categoryPosts = BLOG_POSTS.filter(
    (post) =>
      post.category === category.name ||
      (post.categories && post.categories.includes(category.id))
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-2">
        BLOG: {category.name.toUpperCase()}
      </h1>
      <p className="text-lg mb-8 text-gray-600">{category.description}</p>

      {/* Category navigation */}
      <CategoryNav />

      {/* Category posts */}
      {categoryPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoryPosts.map((post) => (
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
      ) : (
        <div className="text-center py-12">
          <p className="text-xl">No posts in this category yet.</p>
        </div>
      )}
    </div>
  );
}
