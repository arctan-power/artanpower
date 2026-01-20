/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages - adjust basePath based on repository name
  // If repository is 'artanpower', use '/artanpower'
  // If repository is 'arctanpower.github.io', use '' (empty)
  basePath: process.env.NODE_ENV === 'production' ? '/artanpower' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/artanpower' : '',
};

module.exports = nextConfig;
