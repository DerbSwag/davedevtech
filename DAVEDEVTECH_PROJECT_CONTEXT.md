# DaveDev Tech Project Context

## Current production state

- Production URL: https://davedevtech.davedevtech.workers.dev
- Production platform: Cloudflare Workers Static Assets
- Approved production commit: `0544ab640dcc2eccf5721b60fe74ffa5b7dc4615`
- Commit subject: `feat: separate network service architecture`
- Cloudflare Workers production version: `eff9e712-22a2-4549-963c-ce93eb5e4acf`
- Git state at the Phase 06A deployment checkpoint: `main` matched `origin/main`, ahead 0, behind 0, working tree clean.

## Frozen service information architecture

1. **IT Support** — `/services/it-support`
2. **Network & Wi-Fi** — `/services/network`
3. **Workflow Automation** — `/services/automation`
4. **Infrastructure** — `/services/infrastructure`

### Network and Infrastructure distinction

**Network is not Infrastructure.** Network covers customer-facing connectivity: Wi-Fi, LAN, router/switch connectivity, IP/DHCP troubleshooting, and home or small-office networking.

Infrastructure covers Server, VM/Virtualization, Storage, Backup, and Monitoring. Keep Infrastructure focused on these areas rather than treating it as a general category for all enterprise IT.

## Phase status

- **Phase 06A — Services Information Architecture: DONE.**
- **Phase 06 overall: IN PROGRESS.** Do not mark the full phase complete.
- **Next: Phase 06B — Service Detail Conversion Audit / Planning.** Implementation has not started.

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

## Immediate next action

Begin **PHASE 06B — Service Detail Conversion Audit / Planning**. Start with a read-only audit and plan; do not imply implementation has begun.

Expected workflow:

`AUDIT → REVIEW → FREEZE DECISION → IMPLEMENT → VALIDATE → BROWSER QA → REVIEW DIFF → LOCAL COMMIT → PUSH → DEPLOY → PRODUCTION QA`

Preserve the established review gates and do not skip ahead without approval.
