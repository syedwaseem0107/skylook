/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For custom domain deployment
  basePath: "",
  assetPrefix: "",
};

module.exports = nextConfig;
