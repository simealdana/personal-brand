export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: "prompt-engineering",
    name: "Prompt Engineering",
    slug: "prompt-engineering",
    description:
      "Techniques and strategies for creating effective prompts for AI models like GPT-4, Claude and other LLMs.",
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    slug: "ai",
    description:
      "Articles about artificial intelligence, large language models and AI technologies.",
  },
  {
    id: "web-development",
    name: "Web Development",
    slug: "web-development",
    description:
      "Guides and tutorials about web development, interface design and visual style replication.",
  },
];
