# DaveDev Tech Project Context

## Current production state

- Production URL: https://davedevtech.davedevtech.workers.dev
- Production platform: Cloudflare Workers Static Assets
- Latest approved production feature commit: `4a1065adbe256188ceccdcdbe6cb94766feeb87f`
- Commit subject: `feat: improve service detail conversion`
- Cloudflare Worker: `davedevtech`
- Cloudflare Workers production version: `b61692dc-abe8-40b1-b3c2-63a6c775822c`
- Git state after Phase 06B push: `main` matched `origin/main`, ahead 0, behind 0, working tree clean.
- Latest production configuration commit: `c900cc550cfef6152385b3635a1fa17d09f39237` (`fix: harden production site URL configuration`).
- Latest Cloudflare Workers production version: `bf6327cc-175f-4aff-9fdb-e1824f13e29d`.

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
- **Phase 06 overall: DONE.** The next action is to review the remaining roadmap/backlog and select the next highest-value phase; no next feature has been implemented.
- **Phase 07 — Production Configuration Hardening: DONE / production; closure pending only this documentation checkpoint.**

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

### Resolved backlog and remaining roadmap

Resolved P1 items:

- Stale Cloudflare Pages deployment documentation.
- Unsafe `PUBLIC_SITE_URL` fallback to `https://davedevtech.com`.

Remaining roadmap items, without selecting the next phase:

- Guide-to-Service contextual linking and conversion.
- Additional useful Guide content.
- Contact phone prominence.
- Analytics and measurement decision.
- Privacy/business-trust review if data collection changes.
- Known MDX/Rolldown warnings.
- Deferred branding/assets.
- Custom domain only after ownership is verified.
- Case studies only when sufficient evidence exists.

## Immediate next action

After Phase 07 closure, review the remaining P2 roadmap items and select the next highest-value workstream. No workstream is selected in this update; no next feature has been implemented.
