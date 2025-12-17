import type { NextConfig } from "next";

// Set your school server path here directly
export const basePath = "/~miikavs/XR/xr-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
