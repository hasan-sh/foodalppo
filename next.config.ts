import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/foodalppo',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
