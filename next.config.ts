import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',
  // Comment out basePath for local development
  // basePath: '/foodalppo',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
