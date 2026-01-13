/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove output: 'export' to enable server-side features
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    // Enable experimental features for better performance
    experimental: {
        optimizePackageImports: ['lucide-react', 'recharts'],
    },
    // Optimize production builds
    compress: true,
    poweredByHeader: false,
    // Ensure proper handling of environment variables
    env: {
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
    // Handle CSS and assets
    trailingSlash: true,
};

export default nextConfig;
