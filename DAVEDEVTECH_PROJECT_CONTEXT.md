# DaveDev Tech Project Context

## Current production state

- Production URL: https://davedevtech.davedevtech.workers.dev
- Production platform: Cloudflare Workers Static Assets
- Latest approved production feature commit: `4a1065adbe256188ceccdcdbe6cb94766feeb87f`
- Commit subject: `feat: improve service detail conversion`
- Cloudflare Worker: `davedevtech`
- Cloudflare Workers production version: `b61692dc-abe8-40b1-b3c2-63a6c775822c`
- Git state after Phase 06B push: `main` matched `origin/main`, ahead 0, behind 0, working tree clean.

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

## Immediate next action

Review the remaining DaveDev Tech roadmap/backlog and select the next highest-value phase after Phase 06C. No next feature has been selected or implemented yet.
