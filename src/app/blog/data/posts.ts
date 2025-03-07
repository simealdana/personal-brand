import { CategoryType } from "../types";

// Import individual blog posts
import { effective_prompts_for_website_style_replication } from "./effective_prompts_for_website_style_replication";
import { best_development_tools_2024 } from "./best_development_tools_2024";
import { getting_started_with_nextjs } from "./getting_started_with_nextjs";
import { crafting_effective_llm_prompts } from "./crafting_effective_llm_prompts";

// Define categories
export const CATEGORIES: CategoryType[] = [
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
];

// Actualizar la interfaz BlogPost para incluir categorías
export interface BlogPost {
  slug: string;
  title: string;
  category: string; // Categoría principal
  categories?: string[]; // Categorías adicionales
  date: string;
  author: string;
  authorImage: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  relatedPosts: string[];
}

// Blog posts data - now using imported posts
export const BLOG_POSTS: BlogPost[] = [
  {
    ...effective_prompts_for_website_style_replication,
    relatedPosts:
      effective_prompts_for_website_style_replication.relatedPosts.map(
        (post) => post.slug
      ),
  },
  {
    ...best_development_tools_2024,
    relatedPosts: best_development_tools_2024.relatedPosts.map(
      (post) => post.slug
    ),
  },
  {
    ...getting_started_with_nextjs,
    relatedPosts: getting_started_with_nextjs.relatedPosts.map(
      (post) => post.slug
    ),
  },
  {
    ...crafting_effective_llm_prompts,
    relatedPosts: crafting_effective_llm_prompts.relatedPosts.map(
      (post) => post.slug
    ),
  },
];
