/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Also disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Configure allowed image domains
  images: {
    domains: ["isodljjfofmsskiuobrl.supabase.co"],
  },
};

module.exports = nextConfig;
