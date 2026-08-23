/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets CI/verification builds write elsewhere (NEXT_DIST_DIR=.next-build)
  // so they never corrupt a running dev server's .next.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
