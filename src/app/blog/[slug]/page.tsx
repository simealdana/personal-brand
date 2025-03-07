import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CategoryTag from "../components/CategoryTag";
import { BLOG_POSTS } from "../data/posts";
import { BlogPost } from "../types";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Get blog post by slug
const getBlogPost = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find((post) => post.slug === slug) as BlogPost | undefined;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Tech Blog",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Tech Blog`,
    description: post.excerpt,
  };
}

export const generateStaticParams = () => {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* No navbar/header here - it comes from layout */}

      <div className="mb-8">
        <CategoryTag category={post.category} />
        <h1 className="text-4xl font-bold mt-4 mb-2">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
