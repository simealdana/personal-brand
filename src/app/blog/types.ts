// Category type definition
export interface CategoryType {
  name: string;
  slug: string;
  description: string;
  color: string;
}

// Related post type definition
export interface RelatedPost {
  slug: string;
  title: string;
  category: string;
}

// Blog post type definition
export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  categories?: string[];
  date: string;
  author: string;
  authorImage: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  relatedPosts: RelatedPost[];
}
