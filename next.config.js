/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages user/org site (arctan-power.github.io) - no basePath needed
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;
