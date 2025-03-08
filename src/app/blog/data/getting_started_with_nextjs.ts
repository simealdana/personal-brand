import { BlogPost } from "../types";

export const getting_started_with_nextjs: BlogPost = {
  slug: "getting-started-with-nextjs",
  title: "BUILDING PRODUCTION-READY APPLICATIONS WITH NEXT.JS",
  category: "Web Development",
  categories: ["web-development", "javascript", "next-js", "react"],
  date: "February 20, 2024",
  author: "Simeon Aldana",
  authorImage: "/images/logo.png",
  readTime: "12 min read",
  image: "/images/blog/posts/next-get-started.png",
  excerpt:
    "Dive deep into Next.js architecture, advanced routing patterns, server components, and optimization techniques for building high-performance web applications that scale.",
  content: `
      <h2 className="text-2xl font-bold mt-10 mb-6">The Evolution of React Applications with Next.js</h2>
      
      <p className="mb-6">Next.js has redefined how developers approach React application development by providing a comprehensive framework that combines the best of both static site generation and server-side rendering. In this deep dive, we'll explore the architectural foundations, performance optimization strategies, and advanced patterns that make Next.js the go-to choice for production applications.</p>
      
      <h3 className="text-xl font-bold mt-8 mb-4">Understanding the Next.js Architecture</h3>
      
      <p className="mb-6">At its core, Next.js extends React's capabilities through a sophisticated build system and runtime that optimizes for both developer experience and end-user performance. The framework operates on a hybrid rendering model, allowing developers to choose the most appropriate rendering strategy for each page or component:</p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Server Components (RSC):</strong> Write React components that run only on the server, reducing JavaScript bundle size</li>
        <li><strong>Client Components:</strong> Interactive components that hydrate on the client for dynamic user experiences</li>
        <li><strong>Static Site Generation (SSG):</strong> Pre-render pages at build time for optimal performance and SEO</li>
        <li><strong>Server-Side Rendering (SSR):</strong> Generate HTML on each request for dynamic, yet SEO-friendly content</li>
        <li><strong>Incremental Static Regeneration (ISR):</strong> Update static content after deployment without rebuilding the entire site</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-10 mb-6">Advanced App Router Implementation</h2>
      
      <p className="mb-6">The Next.js App Router represents a paradigm shift in how routing works in React applications. Let's examine its key concepts and implementation patterns:</p>
      
      <h3 className="text-xl font-bold mt-8 mb-4">File-Based Routing with Conventions</h3>
      
      <p className="mb-6">The App Router uses a directory-based structure where folders define routes and special files determine how those routes render:</p>
      
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8">app/
├── layout.tsx      # Root layout (applies to all routes)
├── page.tsx        # Home route (/)
├── blog/
│   ├── layout.tsx  # Blog layout (applies to all blog routes)
│   ├── page.tsx    # Blog index (/blog)
│   └── [slug]/     # Dynamic blog post routes
│       └── page.tsx # Individual blog post (/blog/post-slug)
└── api/
    └── revalidate/
        └── route.ts # API endpoint (/api/revalidate)</pre>
      
      <h3 className="text-xl font-bold mt-8 mb-4">Parallel and Intercepted Routes</h3>
      
      <p className="mb-6">Next.js 13+ introduced advanced routing patterns that enable complex UI flows:</p>
      
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8">// Parallel Routes (@folder)
app/
├── dashboard/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── @analytics/
│   │   └── page.tsx
│   └── @settings/
│       └── page.tsx

// Intercepted Routes ((.))
app/
├── posts/
│   ├── page.tsx
│   ├── [id]/
│   │   └── page.tsx
│   └── (.)create/
│       └── page.tsx</pre>
      
      <p className="mb-6">Parallel routes allow you to render multiple pages in the same layout, while intercepted routes enable modal-like UIs where one route can "intercept" the rendering of another.</p>
      
      <h2 className="text-2xl font-bold mt-10 mb-6">Server Components: The Future of React</h2>
      
      <p className="mb-6">React Server Components (RSC) represent a significant architectural shift in how we build React applications. Next.js fully embraces this paradigm, making server components the default in the App Router.</p>
      
      <h3 className="text-xl font-bold mt-8 mb-4">Key Benefits of Server Components</h3>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Zero Client JavaScript:</strong> Server components don't send any JavaScript to the client, reducing bundle sizes</li>
        <li><strong>Direct Backend Access:</strong> Access databases, filesystems, and APIs directly without client-side fetching</li>
        <li><strong>Improved Security:</strong> Sensitive operations and credentials remain server-side only</li>
        <li><strong>Automatic Code Splitting:</strong> Only client components get included in the JavaScript bundle</li>
      </ul>
      
      <p className="mb-6">Here's an example of a server component that fetches data directly from a database:</p>
      
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8">// app/users/page.tsx - Server Component
import { db } from '@/lib/db';

export default async function UsersPage() {
  // This runs on the server only
  const users = await db.user.findMany({
    select: { id: true, name: true, email: true }
  });
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}</pre>
      
      <h3 className="text-xl font-bold mt-8 mb-4">Client Components When Needed</h3>
      
      <p className="mb-6">For interactive UI elements, you can opt into client-side rendering with the 'use client' directive:</p>
      
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8">'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}</pre>
      
      <h2 className="text-2xl font-bold mt-10 mb-6">Data Fetching Patterns</h2>
      
      <p className="mb-6">Next.js provides multiple patterns for data fetching, each optimized for different use cases:</p>
      
      <h3 className="text-xl font-bold mt-8 mb-4">Server-Side Data Fetching</h3>
      
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8">// app/products/[id]/page.tsx
export async function generateStaticParams() {
  const products = await fetchProducts();
  
  return products.map(product => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  // This fetch is automatically deduped
  const product = await fetchProduct(params.id);
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}</pre>
      <h3 className="text-xl font-bold mt-8 mb-4">Advanced Data Fetching with SWR</h3>
      
      <p className="mb-6">For client components that need real-time data or optimistic updates, SWR is an excellent companion to Next.js:</p>
      
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8">'use client';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

export default function Dashboard() {
  const { data, error, isLoading } = useSWR('/api/stats', fetcher, {
    refreshInterval: 3000 // Refresh every 3 seconds
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;
  
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Active Users: {data.activeUsers}</p>
      <p>Revenue: {data.revenue}</p>
    </div>
  );
}</pre>
      
      <h2 className="text-2xl font-bold mt-10 mb-6">Performance Optimization</h2>
      
      <p className="mb-6">Next.js provides numerous built-in optimizations, but achieving world-class performance requires understanding and implementing advanced techniques:</p>
      
      <h3 className="text-xl font-bold mt-8 mb-4">Route Segmentation and Partial Rendering</h3>
      
      <p className="mb-6">The App Router intelligently segments your application to enable partial rendering and streaming:</p>
      
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8">// app/dashboard/layout.tsx
export default function DashboardLayout({
  children, // The main content
  analytics, // The @analytics slot
  team,      // The @team slot
}) {
  return (
    <div className="dashboard">
      <div className="main">{children}</div>
      <div className="sidebar">
        {analytics}
        {team}
      </div>
    </div>
  );
}</pre>
      
      <h3 className="text-xl font-bold mt-8 mb-4">Streaming and Suspense Boundaries</h3>
      
      <p className="mb-6">Use Suspense to progressively render UI as data becomes available:</p>
      
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8">// app/dashboard/page.tsx
import { Suspense } from 'react';
import Loading from './loading';
import RevenueChart from './RevenueChart';
import TopProducts from './TopProducts';
import RecentOrders from './RecentOrders';

export default function DashboardPage() {
  return (
    <div className="dashboard-grid">
      <Suspense fallback={<Loading type="chart" />}>
        <RevenueChart />
      </Suspense>
      
      <div className="dashboard-sidebar">
        <Suspense fallback={<Loading type="products" />}>
          <TopProducts />
        </Suspense>
        
        <Suspense fallback={<Loading type="orders" />}>
          <RecentOrders />
        </Suspense>
      </div>
    </div>
  );
}</pre>
      
      <h2 className="text-2xl font-bold mt-10 mb-6">Advanced SEO and Metadata Management</h2>
      
      <p className="mb-6">Next.js provides a powerful metadata API for controlling SEO elements:</p>
      
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8">// app/blog/[slug]/page.tsx
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string }
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await fetchPost(params.slug);
  
  // optionally access and extend parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage, ...previousImages],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@yourusername',
    },
  };
}</pre>
      
      <h2 className="text-2xl font-bold mt-10 mb-6">Enterprise-Grade Deployment</h2>
      
      <p className="mb-6">For production environments, consider advanced deployment strategies:</p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Edge Runtime:</strong> Deploy specific routes to the edge for faster global performance</li>
        <li><strong>Continuous Integration:</strong> Implement proper testing and preview deployments</li>
        <li><strong>Content Delivery Networks:</strong> Utilize CDNs for static assets and cached pages</li>
        <li><strong>Monitoring:</strong> Set up performance monitoring and error tracking</li>
      </ul>
      
      <p className="mb-6">Here's how to target the Edge runtime for optimal performance:</p>
      
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8">// app/api/geo/route.ts
export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  
  // Process at the edge, closest to user
  const nearbyData = await fetchNearbyLocations(lat, lon);
  
  return Response.json(nearbyData);
}</pre>
      
      <h2 className="text-2xl font-bold mt-10 mb-6">Conclusion</h2>
      
      <p className="mb-6">Next.js has evolved from a simple React framework to a comprehensive platform for building high-performance web applications. By leveraging server components, the App Router, and advanced rendering strategies, you can create experiences that are fast, SEO-friendly, and maintainable.</p>
      
      <p className="mb-6">The most successful Next.js applications thoughtfully combine these patterns based on specific requirements, rather than applying a one-size-fits-all approach. As you build with Next.js, continuously evaluate your architecture choices against real-world performance metrics and user experience goals.</p>
      
      <p className="mb-6">Remember that Next.js is a rapidly evolving framework, with new features and optimizations being added regularly. Stay up-to-date with the latest developments and best practices to ensure your applications remain state-of-the-art.</p>
  `,
  relatedPosts: [
    {
      slug: "mastering-typescript-generics",
      title: "Mastering TypeScript Generics",
      category: "Web Development",
    },
    {
      slug: "optimizing-react-performance",
      title: "Optimizing React Performance",
      category: "Web Development",
    },
  ],
};
