# DaveDev Tech

Thai language IT services and technology guides site built with Astro and TypeScript. The site is statically generated and has no runtime JavaScript dependencies.

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Environment variables

Copy `.env.example` to `.env` for local development. It sets `PUBLIC_SITE_URL=http://localhost:4321`. `PUBLIC_SITE_URL` is required, is build-time configuration, and is not a secret. It must be an absolute HTTP(S) origin without a path, query, or fragment. It controls the absolute site origin used for canonical URLs, Open Graph URLs, the sitemap, and `robots.txt`.

Production currently uses `PUBLIC_SITE_URL=https://davedevtech.davedevtech.workers.dev`. Set this value in the Cloudflare Workers build environment before building for production. Do not use a custom domain until it has been verified and configured.

`PUBLIC_CF_WEB_ANALYTICS_TOKEN` is optional. When set, it enables the site's manual Cloudflare Web Analytics beacon. It is a public site token, not a secret; analytics is not enabled by this repository by default. This code path provides the manual beacon only; it does not add event or CTA tracking.

## Cloudflare Workers Static Assets

The deployment architecture is:

```text
Astro static build → dist/ → Wrangler → Cloudflare Workers Static Assets
```

Use Node.js 22.12 or newer. Configure `PUBLIC_SITE_URL` as described above, then run:

```sh
npm ci
npm run check
npm run build
npx wrangler deploy
```

The static site does not require a Cloudflare adapter or server-side application code. The deployed Workers Static Assets site serves the security and hashed-asset caching rules from `public/_headers`. Contact currently uses `davedevtech@gmail.com`. Affiliate buttons are intentionally absent until DaveDev Tech has real affiliate destinations; do not publish placeholder URLs.

## Known build warning

Astro/Rolldown emits three non-fatal asset directive warnings for generated MDX modules during production builds:

```text
MODULE_LEVEL_DIRECTIVE: "use astro:head-inject" in generated MDX asset modules
```

No build or runtime impact has been observed. Revisit this warning when upgrading Astro or Rolldown.
