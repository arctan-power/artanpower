/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages project site (arctan-power.github.io/artanpower)
  basePath: '/artanpower',
  assetPrefix: '/artanpower',
};

module.exports = nextConfig;
