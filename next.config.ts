import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {

  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
