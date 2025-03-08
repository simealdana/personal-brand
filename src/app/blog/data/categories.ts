import { BLOG_POSTS } from "./posts";

// Function to get all unique categories from posts
export function getUniqueCategories() {
  const categories = new Set<string>();

  BLOG_POSTS.forEach((post) => {
    // Add main category
    categories.add(post.category);

    // Add additional categories if they exist
    if (post.categories) {
      post.categories.forEach((cat) => categories.add(cat));
    }
  });

  return Array.from(categories);
}

// Function to get post count per category
export function getCategoryCount(categoryName: string): number {
  return BLOG_POSTS.filter((post) => {
    // Normalize inputs for comparison
    const normalizedCategoryName = categoryName.toLowerCase();
    const normalizedCategorySlug = categoryName
      .toLowerCase()
      .replace(/\s+/g, "-");

    // Check main category (case-insensitive compare)
    const mainCategoryMatch =
      post.category.toLowerCase() === normalizedCategoryName ||
      post.category.toLowerCase() === normalizedCategorySlug;

    // Check additional categories (if they exist)
    const additionalCategoryMatch = post.categories?.some((cat) => {
      const normalizedCat = cat.toLowerCase();
      const normalizedCatSlug = cat.toLowerCase().replace(/\s+/g, "-");

      return (
        normalizedCat === normalizedCategoryName ||
        normalizedCatSlug === normalizedCategorySlug
      );
    });

    return mainCategoryMatch || additionalCategoryMatch;
  }).length;
}

// Define categories with their metadata
export const BLOG_CATEGORIES = [
  {
    name: "Web Development",
    slug: "web-development",
    description:
      "Articles about frontend and backend web development, frameworks, and best practices.",
    color: "bg-green-100 hover:bg-green-200",
  },
  {
    name: "AI",
    slug: "ai",
    description:
      "Explore artificial intelligence, machine learning, and prompt engineering.",
    color: "bg-blue-100 hover:bg-blue-200",
  },
  {
    name: "Programming",
    slug: "programming",
    description:
      "Tutorials and guides on programming languages, algorithms, and coding techniques.",
    color: "bg-red-100 hover:bg-red-200",
  },
  {
    name: "DevOps",
    slug: "devops",
    description:
      "Learn about CI/CD, containerization, infrastructure as code, and deployment strategies.",
    color: "bg-yellow-100 hover:bg-yellow-200",
  },
  {
    name: "Productivity",
    slug: "productivity",
    description:
      "Tips and tools to improve your productivity as a developer or tech professional.",
    color: "bg-purple-100 hover:bg-purple-200",
  },
  {
    name: "Tutorial",
    slug: "tutorial",
    description:
      "Step-by-step guides and tutorials on various technology topics.",
    color: "bg-amber-100 hover:bg-amber-200",
  },
  {
    name: "Prompt Engineering",
    slug: "prompt-engineering",
    description:
      "Learn about crafting effective prompts for AI and language models.",
    color: "bg-indigo-100 hover:bg-indigo-200",
  },
].filter((category) => {
  // Only include categories that have at least one post
  const hasPosts =
    getCategoryCount(category.name) > 0 || getCategoryCount(category.slug) > 0;
  return hasPosts;
});

// Type for categories
export interface CategoryType {
  name: string;
  slug: string;
  description: string;
  color: string;
}
