import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { getSiteUrl } from './src/utils/constants.ts';

// https://astro.build/config
export default defineConfig({
  site: getSiteUrl(),
  integrations: [
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  vite: {
    ssr: {
      noExternal: ['fuse.js'],
    },
  },
});
