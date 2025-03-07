import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-6xl font-black mb-6">404</h1>
        <h2 className="text-3xl font-bold mb-4">Content Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The blog post or category you&apos;re looking for doesn&apos;t exist
          or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center"
          >
            Back to Blog
          </Link>
          <Link
            href="/blog/categories"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    </div>
  );
}
