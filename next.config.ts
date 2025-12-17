import type { NextConfig } from "next";

// Set your school server path here directly
export const basePath = "/~miikavs/XR/xr-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true, // Enable trailing slashes for static export IMPORTANT!!
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
