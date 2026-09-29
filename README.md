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

Copy `.env.example` to `.env` for local development. `PUBLIC_SITE_URL` controls the canonical origin, sitemap host, and `robots.txt`; set the same variable in Cloudflare Pages for production and preview builds. `PUBLIC_CF_WEB_ANALYTICS_TOKEN` is optional and enables the manual Cloudflare Web Analytics beacon. It is a public site token, not a secret. Use either this manual beacon or Cloudflare Pages' automatic Web Analytics injection, not both.

## Cloudflare Pages

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: 22.12 or newer

The project uses Astro's static output and does not require a Cloudflare adapter or server-side runtime. Cloudflare Pages applies the optional response security and hashed-asset caching rules in `public/_headers`. Contact currently uses `davedevtech@gmail.com`. Affiliate buttons are intentionally absent until DaveDev Tech has real affiliate destinations; do not publish placeholder URLs.

## Known build warning

Astro/Rolldown emits three non-fatal asset directive warnings for generated MDX modules during production builds:

```text
MODULE_LEVEL_DIRECTIVE: "use astro:head-inject" in generated MDX asset modules
```

No build or runtime impact has been observed. Revisit this warning when upgrading Astro or Rolldown.
