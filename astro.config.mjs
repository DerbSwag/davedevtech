import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const envFile = fileURLToPath(new URL('./.env', import.meta.url));
if (existsSync(envFile)) process.loadEnvFile(envFile);

const site = process.env.PUBLIC_SITE_URL || 'https://davedevtech.com';

export default defineConfig({ site, output: 'static', integrations: [mdx(), sitemap()] });
