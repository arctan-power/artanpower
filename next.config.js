/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages project site
  basePath: process.env.NODE_ENV === 'production' ? '/artanpower' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/artanpower' : '',
};

module.exports = nextConfig;
