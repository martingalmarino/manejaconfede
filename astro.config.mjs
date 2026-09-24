// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { publishingMode, canonicalDomain } from './src/data/publishing.mjs';

const site =
  publishingMode === 'production' && canonicalDomain
    ? `https://${canonicalDomain}`
    : undefined;

// https://astro.build/config
export default defineConfig({
  site,
  output: 'static',
  integrations: site
    ? [
        sitemap({
          filter: (page) => !page.includes('#'),
        }),
      ]
    : [],
});
