import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 72, 84],
  },
  poweredByHeader: false,
};

export default nextConfig;
