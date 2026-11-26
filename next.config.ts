import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
    // Build from scratch every time. With the cache on, a deploy reused a
    // stale stylesheet (missing newly added CSS) while serving the new pages.
    turbopackFileSystemCacheForBuild: false,
  },
  cacheComponents: true,
  images: {
    // Photos uploaded in the Sanity Studio.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
