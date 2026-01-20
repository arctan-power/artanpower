/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages user/org site (arctanpower.github.io) - no basePath needed
  // For project site (username.github.io/repo), use basePath: '/repo'
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;
