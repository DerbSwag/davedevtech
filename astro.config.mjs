import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const envFile = fileURLToPath(new URL('./.env', import.meta.url));
if (existsSync(envFile)) process.loadEnvFile(envFile);

const publicSiteUrl = process.env.PUBLIC_SITE_URL?.trim();

if (!publicSiteUrl) {
  throw new Error('PUBLIC_SITE_URL is required. Set it to the site’s absolute HTTP(S) origin.');
}

if (!/^https?:\/\/[^/?#]+\/?$/i.test(publicSiteUrl)) {
  throw new Error('Invalid PUBLIC_SITE_URL. Expected an HTTP(S) origin without a path, query, or fragment.');
}

let parsedSiteUrl;
try {
  parsedSiteUrl = new URL(publicSiteUrl);
} catch {
  throw new Error('Invalid PUBLIC_SITE_URL. Set it to a valid absolute HTTP(S) origin.');
}

if (
  !['http:', 'https:'].includes(parsedSiteUrl.protocol) ||
  !parsedSiteUrl.hostname ||
  parsedSiteUrl.username ||
  parsedSiteUrl.password ||
  parsedSiteUrl.pathname !== '/' ||
  parsedSiteUrl.search ||
  parsedSiteUrl.hash
) {
  throw new Error('Invalid PUBLIC_SITE_URL. Expected an HTTP(S) origin without credentials, path, query, or fragment.');
}

const site = parsedSiteUrl.origin;

export default defineConfig({ site, output: 'static', integrations: [mdx(), sitemap()] });
