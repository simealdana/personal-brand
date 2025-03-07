// Blog post types
export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime?: string;
  imageSrc: string;
  featured?: boolean;
};

// Blog categories
export type Category = {
  name: string;
  slug: string;
};

// Featured blog posts
export const FEATURED_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "BEST FULL-STACK DEVELOPMENT TOOLS!",
    slug: "best-full-stack-development-tools",
    excerpt:
      "Discover the most efficient tools for modern full-stack development that will boost your productivity and streamline your workflow.",
    content: "Full content goes here...",
    category: "Development",
    date: "22 Feb",
    imageSrc: "/images/blog/dev-tools.jpg",
    featured: true,
  },
];

// Main blog posts
export const MAIN_POSTS: BlogPost[] = [
  {
    id: "2",
    title: "READY, SET, CODE! HOW TO START PROGRAMMING TO STAY SHARP",
    slug: "ready-set-code-how-to-start-programming",
    excerpt:
      "Programming is recognized as a safe and effective mode of exercise when the goal is to improve problem-solving, creativity, or both. Something as simple as a daily coding practice can help someone...",
    content: "Full content goes here...",
    category: "Development",
    date: "18 Feb",
    imageSrc: "/images/blog/coding.jpg",
  },
  {
    id: "3",
    title: "OVERCOMING BURNOUT IN TECH",
    slug: "overcoming-burnout-in-tech",
    excerpt:
      "Learn effective strategies to recognize and overcome burnout in the fast-paced tech industry.",
    content: "Full content goes here...",
    category: "Career",
    date: "12 Feb",
    imageSrc: "/images/blog/burnout.jpg",
  },
];

// Related posts
export const RELATED_POSTS: BlogPost[] = [
  {
    id: "4",
    title: "HOW TO READ TECHNICAL DOCUMENTATION LIKE A PRO",
    slug: "how-to-read-technical-documentation",
    excerpt:
      "Master the art of efficiently navigating and understanding complex technical documentation.",
    content: "Full content goes here...",
    category: "Development",
    date: "15 Feb",
    imageSrc: "/images/blog/documentation.jpg",
  },
  {
    id: "5",
    title: "HOW TO WORK EFFICIENTLY IN A LIMITED WORKSPACE",
    slug: "how-to-work-efficiently-limited-workspace",
    excerpt:
      "Optimize your development environment when working with limited resources or space.",
    content: "Full content goes here...",
    category: "Productivity",
    date: "10 Feb",
    imageSrc: "/images/blog/workspace.jpg",
  },
];

// Video tutorial post
export const VIDEO_POST: BlogPost = {
  id: "6",
  title: "ADVANCED DEBUGGING | SOFT AND HARD TECHNIQUES OF TROUBLESHOOTING",
  slug: "advanced-debugging-techniques",
  excerpt:
    "Learn both methodical and intuitive approaches to debugging complex software issues.",
  content: "Full content goes here...",
  category: "Tutorial",
  date: "22 Feb",
  readTime: "5 Min",
  imageSrc: "/images/blog/debugging.jpg",
};

// Blog categories
export const CATEGORIES: Category[] = [
  { name: "Development", slug: "development" },
  { name: "AI & Machine Learning", slug: "ai-machine-learning" },
  { name: "Web Design", slug: "web-design" },
  { name: "DevOps", slug: "devops" },
  { name: "Career", slug: "career" },
  { name: "Productivity", slug: "productivity" },
  { name: "Tutorial", slug: "tutorial" },
  { name: "Cloud Computing", slug: "cloud-computing" },
];
