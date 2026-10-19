import type { NextConfig } from 'next';

const isPagesBuild = process.env.GITHUB_PAGES === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repositoryName.endsWith('.github.io');
const basePath = isPagesBuild && repositoryName && !isUserSite
  ? `/${repositoryName}`
  : '';

const nextConfig: NextConfig = {
  output: isPagesBuild ? 'export' : undefined,
  trailingSlash: isPagesBuild,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: isPagesBuild,
  },
};

export default nextConfig;
