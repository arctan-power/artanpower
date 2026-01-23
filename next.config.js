/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Custom domain configured - no basePath needed
  // basePath: process.env.NODE_ENV === 'production' ? '/artanpower' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/artanpower' : '',
};

module.exports = nextConfig;
