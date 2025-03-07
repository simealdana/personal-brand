import { Metadata } from "next";
import { BLOG_POSTS } from "../data/posts";
import TutorialCard from "../components/TutorialCard";
import CategoryNav from "../components/CategoryNav";

export const metadata: Metadata = {
  title: "Development Guides and Tutorials",
  description:
    "Comprehensive guides and tutorials on programming, web development, and technology",
};

export default function GuidesPage() {
  // Filter posts that are guides/tutorials
  const guides = BLOG_POSTS.filter(
    (post) =>
      post.category === "Tutorial" ||
      post.category === "Prompt Engineering" ||
      (post.categories &&
        (post.categories.includes("tutorial") ||
          post.categories.includes("prompt-engineering")))
  );

  return (
    <div>
      {/* Title Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">
          Development Guides & Tutorials
        </h1>
        <p className="text-lg text-gray-600">
          Detailed guides and step-by-step tutorials to help you level up your
          development skills.
        </p>
      </div>

      {/* Category Navigation */}
      <CategoryNav />

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {guides.map((post) => (
          <TutorialCard
            key={post.slug}
            slug={post.slug} // Now just need the slug since we're already in /blog
            title={post.title}
            category={post.category}
            date={post.date}
            duration={post.readTime}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
}
