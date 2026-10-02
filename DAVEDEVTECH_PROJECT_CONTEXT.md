# DaveDev Tech Project Context

## Current production state

- Production URL: https://davedevtech.davedevtech.workers.dev
- Production platform: Cloudflare Workers Static Assets
- Latest approved production application commit: `09d524fde684751cc1d180158c819ae8e2731487`
- Commit subject: `feat: refresh brand and social assets`
- Cloudflare Worker: `davedevtech`
- Cloudflare Workers production version: `e89d15b9-4b09-40b3-8860-9105d8ea0bd3`
- Phase 09 production application checkpoint: `09d524fde684751cc1d180158c819ae8e2731487`; Phase 08 production acceptance remains documented below at `115ce0557065b13fcbbe4951941ccfb9dc852cad`.
- Git state at the Phase 09 application checkpoint: `main` matched `origin/main`, ahead 0, behind 0, working tree clean.
- Latest production configuration commit: `c900cc550cfef6152385b3635a1fa17d09f39237` (`fix: harden production site URL configuration`).
- Phase 07 Cloudflare Workers production version: `bf6327cc-175f-4aff-9fdb-e1824f13e29d`.

## Frozen service information architecture

1. **IT Support** — `/services/it-support`
2. **Network & Wi-Fi** — `/services/network`
3. **Workflow Automation** — `/services/automation`
4. **Infrastructure** — `/services/infrastructure`

### Network and Infrastructure distinction

**Network is not Infrastructure.** Network covers customer-facing connectivity: Wi-Fi, LAN, router/switch connectivity, IP/DHCP troubleshooting, and home or small-office networking.

Infrastructure covers Server, VM/Virtualization, Storage, Backup, and Monitoring. Keep Infrastructure focused on these areas rather than treating it as a general category for all enterprise IT.

## Phase status

- **Phase 06A — Service IA: DONE / production.**
- **Phase 06B — Service Detail Conversion: DONE / production.**
- **Phase 06C — Proof / Case Studies: DONE / evidence audited / no website feature implementation required.** Phase 06C is CLOSED.
- **Phase 06 overall: DONE.** Its closure checkpoint preceded Phases 07 and 08.
- **Phase 07 — Production Configuration Hardening: DONE / production / CLOSED.**
- **Phase 08 — Conversion & Customer Journey Improvement: DONE / production / CLOSED.** Production acceptance is recorded at commit `115ce0557065b13fcbbe4951941ccfb9dc852cad`, Worker version `5a18e7f8-c11b-4668-b570-f65a1dfc6549`.
- **Phase 09 — Brand & Social Presentation Refinement: CLOSED / production accepted.** Production application commit `09d524fde684751cc1d180158c819ae8e2731487`; Worker version `e89d15b9-4b09-40b3-8860-9105d8ea0bd3`.

## Phase 06A completed work

- Froze the four-category Service IA and separated IT Support from Network.
- Created `/services/network`.
- Replaced positional service lookups with stable slug-based lookup.
- Migrated Homepage links expressing Network intent to `/services/network`.
- Updated the Services listing to expose all four categories.
- Reconciled Contact and About taxonomy wording.
- Reconciled `DAVDEVTECH_V2_SPEC.md` with the approved Network and Infrastructure distinction.
- Completed responsive browser QA and automated validation.
- Deployed the approved commit to Cloudflare Workers production and passed production QA.

## Phase 06A production verification

The following routes were verified in production:

- `/`
- `/services`
- `/services/it-support`
- `/services/network`
- `/services/automation`
- `/services/infrastructure`
- `/contact`

Expected routes returned HTTP 200. Canonical URLs and `og:url` used the Workers hostname. The sitemap contained all four service routes, and `robots.txt` referenced the correct sitemap. Static assets returned successfully. An unknown route returned a real HTTP 404 and rendered the custom 404 page. Security headers remained present.

The three existing MDX/Rolldown build warnings remain known, non-fatal technical debt.

## Phase 06C closure — proof and evidence audit

Phase 06C is **CLOSED**. The work focused on validating the existing proof and its public evidence; it intentionally produced no DaveDev Tech website feature-code changes.

### Frozen proof architecture decision

Keep the current architecture:

- Compact Proof of Work on the Homepage.
- Relevant optional proof inside Service Detail pages.
- Centralized proof data in `src/lib/case-studies.ts`.

Do not create a `/case-studies/` index, individual case-study routes, a proof-specific slug or SEO model, a screenshot/media model, or a multiple-proof-per-service model at this stage. The two truthful, compact examples do not justify dedicated routes without creating thin or duplicated content.

### Current proof inventory

- **Network & Wi-Fi** — `network-troubleshooting`; a troubleshooting-method example shown on the Homepage and Network Service Detail. It is not presented as a customer-result case study.
- **Workflow Automation** — `attendance-workflow`; a workflow/tool example shown on the Homepage and Automation Service Detail. Its public artifact is [DerbSwag/factory_demo](https://github.com/DerbSwag/factory_demo). It is not presented as a deployed customer-result case study.
- **IT Support** — no proof assigned, intentionally.
- **Infrastructure** — no proof assigned, intentionally.

### factory_demo evidence audit and documentation polish

The public `DerbSwag/factory_demo` portfolio/demo repository was reviewed. The artifact uses Python/Tkinter, synthetic/mock attendance data, department filtering, attendance-status and OT processing, and Excel export. The reviewed repository provides no evidence of customer production deployment. The current DaveDev Tech proof wording is appropriate as a demo/tool example; no website proof correction is currently required.

The review identified no customer/company data, real employee records, credentials, private IP addresses, or other known sensitive operational information in the reviewed artifact. This was a scoped public-safety review, not a formal security audit.

The repository's documentation-only maintenance commit is `b4f77affb82eaf244b8836b1213fa32a541f151f` (`docs: fix application run command`). `RUNBOOK.md` was corrected from `python main.py` to `python factory_demo.py`. Dependencies were installed from the existing requirements, 12 tests were collected and all 12 passed, README and RUNBOOK entry points agree, and the public `origin/main` contains the corrected command.

Non-blocking factory_demo backlog: pytest is used/documented but is not declared in `requirements.txt`; the README screenshot section remains a placeholder with no screenshots. These items were intentionally not expanded during Phase 06C.

### Future case-study trigger

Reconsider `/case-studies/` only when enough truthful, distinct, public-safe proof content exists. Individual detail routes require a verified narrative, unique content beyond the Homepage and Service Detail summaries, public-safe facts, and reviewed media if used. Do not fabricate customer outcomes or metrics. IT Support and Infrastructure do not need invented proof for symmetry.

## Phase 06B completed work

- Reworked all four service detail pages through the shared, data-driven `ServiceDetail` renderer.
- Service detail flow: Hero → ปัญหาที่ช่วยตรวจสอบได้ → บริการนี้ครอบคลุมอะไรบ้าง → บริการนี้เหมาะกับใคร → shared five-step process → optional relevant proof → เตรียมข้อมูลก่อนติดต่อ / estimate guidance → direct contact CTA.
- Centralized the service-neutral process in `src/lib/service-process.ts` and proof records in `src/lib/case-studies.ts`.
- Proof sections are optional and keyed by stable proof IDs; services without an assigned proof omit that section. Service records resolve by slug, without positional service lookups.
- Service proof assignments:
  - IT Support: no proof currently assigned.
  - Network & Wi-Fi: `network-troubleshooting`; heading: `ตัวอย่างแนวทางการตรวจสอบ`.
  - Workflow Automation: `attendance-workflow`; heading: `ตัวอย่าง Workflow ที่เกี่ยวข้อง`.
  - Infrastructure: no proof currently assigned.
- Service detail CTA: primary `โทรปรึกษาปัญหา` (`tel:0822059652`); secondary `ส่งรายละเอียดทางอีเมล` (`mailto:davedevtech@gmail.com`). Preparation guidance asks for symptoms/problem, the device involved, and a screenshot or error message when available. No contact-form backend was added.
- Responsive browser QA passed for the Network reference (approved previously), and for IT Support, Workflow Automation, and Infrastructure at `390x844` and `1024x768`.
- Automated validation passed: `npm run check`, production build (12 pages), all four service routes, internal links, Workers-host canonicals, sitemap/robots, assets, security headers, and custom 404. No `davedevtech.com` fallback was found. The three known non-fatal MDX/Rolldown warnings remain.

## Production route reality

`/about/` and `/case-studies/` are not generated standalone routes and currently return HTTP 404 in production. Do not create them merely to match navigation terminology; Homepage sections may represent these concepts.

## Phase 07 — Production Configuration Hardening

Phase 07 addressed two verified P1 findings: the README still described Cloudflare Pages even though production uses Wrangler and Cloudflare Workers Static Assets; and `astro.config.mjs` silently fell back to `https://davedevtech.com` when `PUBLIC_SITE_URL` was absent. The repository did not establish ownership or configuration of that domain, so the fallback could publish incorrect canonical, Open Graph, sitemap, and robots host information. No ownership of `davedevtech.com` is claimed or assumed.

### Implementation

Only these files changed:

- `astro.config.mjs`
- `.env.example`
- `README.md`

`PUBLIC_SITE_URL` is required and has no implicit public-domain fallback. Missing or invalid values fail clearly. The value must be a valid absolute HTTP(S) origin: credentials, paths, query strings, and fragments are rejected. The validated origin is used as Astro's `site` origin.

`.env.example` contains `PUBLIC_SITE_URL=http://localhost:4321`. The production build explicitly uses `PUBLIC_SITE_URL=https://davedevtech.davedevtech.workers.dev`. The README now documents the actual deployment flow: Astro static build → `dist/` → Wrangler → Cloudflare Workers Static Assets; Cloudflare Pages is no longer presented as the current deployment model.

### Validation and production deployment

Commit: `c900cc550cfef6152385b3635a1fa17d09f39237` — `fix: harden production site URL configuration`. It contains `.env.example`, `README.md`, and `astro.config.mjs`.

Configuration checks rejected a missing `PUBLIC_SITE_URL` and invalid URL forms, with no silent `davedevtech.com` fallback. Accepted examples included `http://localhost:4321`, `https://davedevtech.davedevtech.workers.dev`, and a normal absolute HTTPS origin. `npm run check` passed with 0 errors, 0 warnings, and 0 hints; `npm run build` passed and generated 12 HTML pages. Internal link and fragment checks reported no broken links or fragments; `git diff --check` passed. Three existing non-blocking MDX/Rolldown `use astro:head-inject` warnings remain.

The approved production build used `PUBLIC_SITE_URL=https://davedevtech.davedevtech.workers.dev`. Worker: `davedevtech`; production URL: https://davedevtech.davedevtech.workers.dev; deployed version: `bf6327cc-175f-4aff-9fdb-e1824f13e29d`. No custom domain was configured.

Production QA passed for the Homepage, Services listing, all four Service Detail routes, Guides listing, all three current Guide articles, and Contact; each returned HTTP 200. `/about/`, `/case-studies/`, and a deliberately nonexistent test route returned real HTTP 404; the branded custom 404 remained functional. Canonical, `og:url`, absolute OG/Twitter image URLs, robots sitemap URL, and sitemap URLs used the Workers hostname. Checked live output contained no `davedevtech.com` fallback. LocalBusiness JSON-LD remained valid with existing business data; no `url` property was introduced. CSS, mobile-menu JavaScript, favicon, OG image, and all three self-hosted fonts returned successfully. Security headers and existing phone/email conversion actions remained present.

### Operational observation

During command-line production QA, a request without a User-Agent received Cloudflare HTTP 403/1010. Requests using a normal browser User-Agent passed route and asset checks. This is an observation, not a confirmed defect; no specific Cloudflare rule is attributed, and it was not treated as a Phase 07 blocker.

## Phase 08 — Conversion & Customer Journey Improvement

Phase 08 is **CLOSED**. It added two focused conversion paths without changing Homepage IA or Service Detail behavior.

### Frozen decisions and implementation

- Contact phone is the primary action: `โทรปรึกษาปัญหา` → `tel:0822059652`. Email remains secondary as `เขียนอีเมลปรึกษา` with its existing prefilled `mailto:` behavior. The plain email, inquiry/preparation guidance, and sensitive-information guidance remain; no form was added.
- The Home Networking guide links to Network & Wi-Fi at `/services/network/`. The SSD Upgrade guide links to IT Support at `/services/it-support/`. Mini PC / Home Lab intentionally has no Phase 08 service recommendation. No generic sales CTA was added to every guide.
- Homepage and Service Detail remain unchanged. No analytics, contact data collection, custom-domain work, or case-study architecture was introduced.

Feature commit: `f6b911f8ff8b5a2af6fc1f2d04dc72d4c18a42b0` (`feat: improve contact and guide conversion paths`); files: `src/pages/contact.astro`, `src/content/guides/home-networking-equipment.mdx`, and `src/content/guides/ssd-upgrade-guide.mdx`.

The initial deployment succeeded but production QA failed because the Contact actions stayed side-by-side at 390px. The action rules were emitted inline by `contact.astro`, while production CSP allowed `style-src 'self'`. The cause was established from generated output, production behavior, and CSP configuration; no browser-console evidence is claimed.

Corrective commit: `115ce0557065b13fcbbe4951941ccfb9dc852cad` (`fix: move contact actions styles to external css`); files: `src/pages/contact.astro` and `src/styles/global.css`. Contact action styles now use the existing same-origin stylesheet. The CSP and `public/_headers` were not changed; `style-src 'self'`, the 700px breakpoint, and 48px minimum action height remain.

### Final production acceptance

Worker: `davedevtech`; URL: https://davedevtech.davedevtech.workers.dev; accepted Wrangler version: `5a18e7f8-c11b-4668-b570-f65a1dfc6549`.

- Production browser QA passed at `390×844`: phone appears above email, actions stack at about 350px wide and 48px high, computed `flex-direction` is `column`, no horizontal overflow was measured, labels were readable, phone remained primary and email secondary, the external stylesheet loaded, and no console errors were observed during this check.
- Wider Contact QA passed at `768×1024`, `1024×768`, and `1440×900`; the actions remained in the wider row layout without horizontal overflow.
- Contact phone/mail actions and guidance, both Guide-to-Service paths, and the Mini PC exclusion were verified. Requested production routes passed; a deliberate missing route returned a branded real HTTP 404.
- Workers-host canonical/OG/robots/sitemap values, representative assets, and the security-header baseline passed. `style-src 'self'` remained in effect, and no `davedevtech.com` fallback was found. No new data collection was introduced.
- `npm run check` passed with 0 errors, 0 warnings, and 0 hints; production build generated 12 pages. Three known non-fatal MDX/Rolldown `use astro:head-inject` warnings remain and are not a Phase 08 defect.

Phase 08 is committed, pushed, deployed, and production-accepted. Its production application checkpoint is `115ce0557065b13fcbbe4951941ccfb9dc852cad`; this later context-documentation commit does not require another deployment.

### Resolved backlog and remaining roadmap

Resolved P1 items:

- Stale Cloudflare Pages deployment documentation.
- Unsafe `PUBLIC_SITE_URL` fallback to `https://davedevtech.com`.

Remaining roadmap items, without selecting the next phase:

- Further Guide-to-Service contextual links only where editorially justified; Phase 08 added the approved Home Networking and SSD paths.
- Additional useful Guide content.
- Analytics and measurement decision.
- Privacy/business-trust review if data collection changes.
- Known MDX/Rolldown warnings.
- Deferred branding/assets.
- Custom domain only after ownership is verified.
- Case studies only when sufficient evidence exists.

## Phase 09 — Brand & Social Presentation Refinement

Phase 09 is **CLOSED / production accepted**. The work aligned the favicon and social preview artwork with the approved V2 brand presentation without changing site architecture or content.

### Review decision and implementation

The audit found legacy V1 Mint/Navy styling in `public/favicon.svg` and the Open Graph artwork, plus stale Open Graph image alt text in `src/layouts/BaseLayout.astro`. The approved implementation changed only:

- `public/favicon.svg`
- `public/og-image.svg`
- `public/og-image.png`
- `src/layouts/BaseLayout.astro`

The favicon retains its 48×48 SVG structure, rounded-square composition, and recognizable D mark; its background is Tech Blue `#2563EB` and its mark is white `#FFFFFF`. No ICO, Apple Touch Icon, or manifest was added.

The same-origin Open Graph image remains 1200×630 and uses the approved V2 palette without legacy Mint/Navy styling. Its content is:

> DAVEDEV TECH
> Computer Support & IT Services
> IT Support • Network & Wi-Fi
> Automation • Infrastructure
> Chon Buri • Remote Support

The image alt text is `DaveDev Tech — Computer Support & IT Services`. No runtime dependency was introduced.

Application commit: `09d524fde684751cc1d180158c819ae8e2731487` — `feat: refresh brand and social assets`.

### Validation and production acceptance

Validation passed: `npm.cmd run check` reported 0 errors, 0 warnings, and 0 hints; `npm.cmd run build` succeeded with 12 generated pages; and `git diff --check` passed. Three existing non-fatal MDX/Rolldown `use astro:head-inject` warnings remain deferred and were not introduced by Phase 09.

Production Worker: `davedevtech`; URL: https://davedevtech.davedevtech.workers.dev; accepted Worker version: `e89d15b9-4b09-40b3-8860-9105d8ea0bd3`.

Live production QA passed:

- `/`, `/services/`, `/contact/`, and `/guides/home-networking-equipment/` returned HTTP 200. A deliberate missing route returned a real HTTP 404 with the branded custom 404 page.
- `/favicon.svg` returned HTTP 200 as `image/svg+xml`; its Tech Blue background and white D rendered correctly, with no legacy Mint branding.
- `/og-image.png` returned HTTP 200 as `image/png`, measured 1200×630, and its live SHA-256 matched the validated local build. Full-size and reduced previews passed with readable, unclipped approved copy and no stale Mint styling.
- Homepage, representative Service, and Guide metadata retained Workers-host canonical, `og:url`, `og:image`, and `twitter:image` values with the updated alt text. No active `https://davedevtech.com` reference was found.
- The security baseline remained present, including CSP `style-src 'self'`. Responsive production QA passed at `390×844` and `1440×900` for Homepage and Contact; Contact actions stacked on mobile and remained side by side at desktop width. No production-site console errors were observed; one `edreader-main.js` error came from a Chrome extension and was external to the site.
- Representative hashed CSS and mobile-menu JavaScript returned HTTP 200. No Phase 09 production defect was discovered.

Phase 09 did not change Homepage or Service IA, Contact conversion, Guide architecture, analytics or privacy architecture, `PUBLIC_SITE_URL`, canonical logic, sitemap, robots, CSP/security headers, custom-domain configuration, Cloudflare deployment architecture, font architecture, or MDX warning handling. Production identity remains `https://davedevtech.davedevtech.workers.dev`; ownership of `davedevtech.com` is not assumed.

## Immediate next action

Review the remaining roadmap/backlog before selecting any further workstream. Do not select or begin Phase 10 automatically; no subsequent phase or workstream has been selected or started.
