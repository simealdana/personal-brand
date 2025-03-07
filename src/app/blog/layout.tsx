import BlogHeader from "./components/BlogHeader";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <BlogHeader />
      {children}
    </div>
  );
}
