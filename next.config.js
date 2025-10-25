/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment
  basePath: process.env.NODE_ENV === "production" ? "/skylook" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/skylook/" : "",
};

module.exports = nextConfig;
