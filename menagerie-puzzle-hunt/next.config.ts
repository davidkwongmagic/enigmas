import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/enigmas',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
