# DaveDev Tech — Homepage V2 Implementation Specification

**Document:** `DAVDEVTECH_V2_SPEC.md`  
**Version:** 1.0 — FROZEN  
**Status:** Implementation Source of Truth  
**Target:** DaveDev Tech Homepage V2  
**Framework:** Astro  
**Implementation:** Astro + CSS + minimal JavaScript  
**Primary QA viewports:** 390 / 768 / 1024 / 1440 px

---

## 1. Purpose

This document is the implementation contract for DaveDev Tech Homepage V2. It is the source of truth between product/UX decisions and Codex CLI implementation.

```text
Product / UX decisions
        ↓
DAVDEVTECH_V2_SPEC.md
        ↓
Codex CLI
        ↓
Astro implementation
        ↓
Browser QA
        ↓
Production
```

Codex MUST inspect the existing repository before editing. Preserve working architecture and reusable components; do not rewrite the project without a technical reason.

### Decision levels

- **LOCKED** — approved; Codex must not change it independently.
- **REQUIRED** — implementation requirement.
- **RECOMMENDED** — preferred implementation; may adapt to codebase/browser constraints while preserving intent.
- **VERIFY BEFORE SHIPPING** — implementation may proceed, but the item must be verified before production.
- **OUT OF SCOPE** — not part of Homepage V2.

---

## 2. Business Identity — LOCKED

| Field | Value |
|---|---|
| Brand | **DaveDev Tech** |
| Naming key | `davedevtech` |
| Primary category | Computer Support & IT Services |
| Primary service area | Khlong Kiu / Ban Bueng / Chon Buri |
| Remote service | Supported where appropriate |
| Phone | **082 205 9652** |
| Email | **davedevtech@gmail.com** |
| Address | **111/12 Moo 9, D-One Garden Ville Village, Tambon Khlong Kiu, Ban Bueng District, Chon Buri 20220** |
| Mon–Sat hours | **18:00–20:00** |
| Sunday hours | **09:00–17:00** |
| LINE | None |
| Messenger | None |

### Naming consistency — REQUIRED

The brand is **DaveDev Tech** (`Dave + Dev + Tech`). Do not use `DevDaveTech` or `devdavetech` as the brand identifier.

The preferred naming pattern across website metadata, repositories, accounts, and future domain configuration is `davedevtech` where technically possible.

### Address usage

The full address may appear in the Contact page, Footer, local SEO data, or other appropriate business-information contexts. It should NOT dominate the Hero or primary conversion CTA. On the Homepage, prefer the human-readable service-area wording:

> คลองกิ่ว–บ้านบึง ชลบุรี และ Remote Support

---

## 3. Brand Direction — LOCKED

DaveDev Tech is a **Modern Local IT Consultancy / IT Service Business**.

Brand attributes:

- Technical
- Clean
- Reliable
- Practical
- Human
- Professional

The site should feel like a real IT business that customers can contact and hire — not a personal developer portfolio.

### Avoid

Do not introduce the following without explicit approval:

- cyberpunk or hacker aesthetics
- neon-heavy UI
- terminal UI as the primary visual language
- excessive gradients
- excessive glassmorphism
- decorative animation that distracts from conversion
- generic AI-generated technology graphics
- meaningless corporate IT stock photography
- fake dashboards or metrics
- visual clutter

---

## 4. Audience and Positioning — LOCKED

### Primary audiences

- Individuals with PC/notebook problems
- Small businesses and local businesses
- Small teams needing practical IT support
- Customers in Khlong Kiu / Ban Bueng / Chon Buri
- Customers who can be supported remotely

### Secondary audiences

- Customers needing workflow automation
- Small-office network/infrastructure customers
- Customers considering PC assembly or upgrades

### Content principle — REQUIRED

Lead with the customer's problem before technical terminology.

Preferred:

> Wi-Fi ช้า หลุดบ่อย หรือระบบ LAN มีปัญหา?

Avoid as primary customer-facing copy:

> Enterprise Network Infrastructure Solutions

---

## 5. Design System

### 5.1 Color palette — LOCKED

```css
:root {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-primary-soft: #eff6ff;

  --color-ink: #0f172a;
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;

  --color-surface: #f8fafc;
  --color-surface-primary: #ffffff;
  --color-border: #e2e8f0;
  --color-white: #ffffff;
}
```

**Primary Tech Blue:** `#2563EB`  
**Hover:** `#1D4ED8`  
**Ink:** `#0F172A`  
**Soft Blue:** `#EFF6FF`  
**Muted:** `#475569`  
**Border:** `#E2E8F0`  
**Surface:** `#F8FAFC`  
**White:** `#FFFFFF`

Tech Blue replaces the old Mint/Navy V1 visual language for Homepage V2. Legacy Mint must not remain in V2 by accident.

### 5.2 Typography — LOCKED

Primary font:

```text
IBM Plex Sans Thai
```

Fallback:

```css
font-family: "IBM Plex Sans Thai", "IBM Plex Sans", system-ui,
  -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Codex must inspect the project and choose a sensible font-loading method. Do not add a heavy dependency only to load the font.

Do not substitute Inter, Poppins, Roboto, or Montserrat without approval.

#### Desktop type scale

| Token | Size | Line height | Weight |
|---|---:|---:|---:|
| Hero H1 | 56px | 64px | 700 |
| H2 | 40px | 52px | 700 |
| H3 | 24px | 34px | 600 |
| Body Large | 18px | 30px | 400 |
| Body | 16px | 26px | 400 |
| Small | 14px | 22px | 400 |
| Button | 15px | 22px | 600 |
| Eyebrow | 13px | 20px | 600 |

#### Responsive typography — RECOMMENDED

Use fluid typography (`clamp()`) where it improves continuity between mobile and desktop and does not compromise the locked desktop hierarchy.

Recommended mobile ranges:

- Hero H1: 40–44px
- H2: 30–34px
- H3: 21–24px
- Body: 16px

Do not use `transform: scale()` to solve typography responsiveness.

### 5.3 Spacing — RECOMMENDED

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

Avoid arbitrary one-off spacing values unless the layout requires them.

### 5.4 Radius — RECOMMENDED

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-full: 9999px;
```

### 5.5 Shadows — RECOMMENDED

```css
--shadow-sm: 0 1px 2px rgb(15 23 42 / 0.05);
--shadow-md: 0 8px 24px rgb(15 23 42 / 0.08);
```

Shadows should be subtle. Do not use shadow as the only source of visual hierarchy.

### 5.6 Container — RECOMMENDED

```css
--container-max: 1200px;
```

Reference desktop viewport: 1440px.

Recommended horizontal gutters:

- Desktop: 32px or more where appropriate
- Tablet: 24px
- Mobile: 20px

---

## 6. Homepage Information Architecture — LOCKED

Homepage order:

1. Header
2. Hero
3. Problem Selector
4. Services
5. Proof of Work / Case Studies
6. Process
7. About Dave
8. Guides / Articles
9. Final CTA
10. Footer

Do not reorder these sections independently during implementation.

---

## 7. Header

### Desktop navigation — LOCKED

```text
DaveDev Tech

บริการ
ผลงาน
บทความ
เกี่ยวกับเรา

[ปรึกษางาน]
```

Header requirements:

- clean and compact
- readable
- keyboard accessible
- responsive
- no mega menu

### Sticky behavior — LOCKED for V2

The V2 header is **not sticky by default**. Do not add sticky/fixed behavior during initial implementation. This may be reconsidered after real browser QA if navigation usability provides a clear reason.

---

## 8. Hero — LOCKED DIRECTION

Eyebrow:

> IT SUPPORT • CHONBURI • REMOTE SUPPORT

Primary H1:

> **ปัญหา IT ไม่ควรทำให้งานของคุณต้องหยุด**

Supporting copy should concisely communicate practical IT Support, Network, and Automation services for individuals, small businesses, and teams.

Primary CTA:

> **ปรึกษาปัญหา IT**

Secondary CTA:

> **ดูบริการทั้งหมด**

### Desktop composition

```text
┌───────────────────────────────────────────────┐
│ Header                                        │
├────────────────────────┬──────────────────────┤
│ Eyebrow                │ SYSTEM STATUS        │
│ H1                     │                      │
│ Description            │ Capability panel     │
│                        │                      │
│ Primary / Secondary    │ PC & SOFTWARE        │
│ CTA                    │ NETWORK              │
│                        │ AUTOMATION           │
└────────────────────────┴──────────────────────┘
```

The right side must communicate capability or service context. Do not restore the old decorative orbit as the dominant Hero visual.

---

## 9. Problem Selector — LOCKED DIRECTION

Use customer problem language.

### คอมมีปัญหา

> คอมช้า เปิดไม่ติด โปรแกรมมีปัญหา

### Network / Wi-Fi

> Wi-Fi ช้า หลุดบ่อย หรือระบบ LAN มีปัญหา

### งานซ้ำทุกวัน

> ทำ Excel หรือกรอกข้อมูลเดิมซ้ำทุกวัน?

### Upgrade PC

Focus on:

- PC upgrades
- performance improvements
- assembly/configuration according to actual use

Do not use fear-based marketing.

---

## 10. Services — LOCKED CATEGORIES

### IT Support

Representative scope:

- PC / Notebook
- Windows
- Software troubleshooting
- General troubleshooting
- Remote Support where appropriate

### Network & Infrastructure

Representative scope:

- LAN
- Wi-Fi
- Network troubleshooting
- Small-office infrastructure

### Workflow Automation

Representative scope:

- repetitive workflows
- Excel/data processing
- Python
- SQL
- scheduled jobs

Do not position DaveDev Tech as a large enterprise MSP.

---

## 11. Proof of Work / Case Studies

Only use real work and real experience.

### Case-study direction 1 — Network Troubleshooting

```text
Problem
↓
Diagnosis
↓
Resolution
↓
Verification
```

### Case-study direction 2 — Attendance Workflow Automation

Technologies may include:

- Python
- SQL
- Scheduled Job

Organization and internal data must be anonymized.

### Result rules — REQUIRED

Never fabricate quantitative outcomes such as:

- “ลดเวลาทำงาน 80%”
- “ลดต้นทุน 50%”
- “ลูกค้ากว่า 100 บริษัท”

unless independently verified and explicitly approved for publication.

Qualitative outcomes are acceptable when true, for example:

- ลดขั้นตอน Manual
- ทำงานตาม Schedule
- ลดการทำข้อมูลซ้ำ
- ตรวจสอบ Workflow ได้ง่ายขึ้น

---

## 12. Process — LOCKED

```text
แจ้งปัญหา
   ↓
ประเมินเบื้องต้น
   ↓
เสนอแนวทาง
   ↓
ดำเนินการ
   ↓
Verify / Follow-up
```

The process must be understandable to non-technical customers.

---

## 13. About Dave

Heading direction:

> **Dave — IT Infrastructure & Support**

The section may reference genuine experience in areas such as:

- real-business IT Support
- supporting users
- network troubleshooting
- FortiGate
- server / virtualization
- Python automation
- Docker
- monitoring

The goal is trust, not a resume dump or an exhaustive technology list.

Do not expose employer/client-confidential information.

---

## 14. Guides / Articles

Purpose:

- SEO
- customer education
- trust building

Possible topics:

- คอมเปิดไม่ติดควรเช็กอะไรบ้าง
- Wi-Fi ช้าเกิดจากอะไร
- SSD ต่างจาก HDD อย่างไร
- ก่อน Upgrade RAM ต้องเช็กอะไร

Cards should support real article routes/content as the site grows. Do not create fake published articles solely to fill the UI.

---

## 15. Contact and Final CTA — LOCKED

### Verified contact channels

```text
Phone: 082 205 9652
Email: davedevtech@gmail.com
```

DaveDev Tech currently does **not** use LINE or Messenger as website contact channels.

Codex MUST NOT create or assume LINE/Messenger/WhatsApp contact options.

### CTA direction

Recommended copy direction:

> **มีปัญหา IT ที่อยากให้ช่วยดู?**
>
> คอมพิวเตอร์มีปัญหา Network/Wi-Fi ใช้งานไม่เสถียร หรือต้องการลดงานซ้ำด้วย Automation ติดต่อ DaveDev Tech เพื่อพูดคุยและประเมินปัญหาเบื้องต้น

Primary CTA:

> **โทร 082 205 9652**

Secondary CTA:

> **ส่งอีเมล**

Implementation:

```html
<a href="tel:0822059652">082 205 9652</a>
<a href="mailto:davedevtech@gmail.com">davedevtech@gmail.com</a>
```

On mobile, the phone CTA should invoke the device dialer.

Do not use a Google Search URL as the phone link.

### Business hours

```text
Monday–Saturday: 18:00–20:00
Sunday:          09:00–17:00
```

Homepage may display the hours in a concise format. Contact page/footer may provide fuller business information.

### Existing email migration — REQUIRED

If `hello@davedevtech.com` appears in the existing site, replace it with the verified address:

```text
davedevtech@gmail.com
```

unless a future explicit decision reactivates a domain mailbox.

---

## 16. Mobile — 390px

Mobile is a responsive composition, not a scaled desktop page.

### Header

```text
DaveDev Tech                         ☰
```

Menu open:

```text
บริการ
ผลงาน
บทความ
เกี่ยวกับเรา

[ปรึกษางาน]
```

The mobile menu must be keyboard accessible and expose its expanded state correctly.

### Hero

Desktop:

```text
Copy | Capability
```

Mobile:

```text
Eyebrow

Headline

Description

[Primary CTA]
[Secondary CTA]

Capability Panel
```

CTAs may be full width on narrow screens.

### Cards

Desktop multi-column card grids should stack appropriately on mobile.

### Process

Prefer a vertical process presentation on mobile if the horizontal desktop presentation becomes cramped.

### Spacing

Reduce section spacing systematically on mobile. Do not copy 96px desktop spacing onto every mobile section.

---

## 17. Responsive QA — REQUIRED

Test at minimum:

- 390px
- 768px
- 1024px
- 1440px

Breakpoints should be content-driven. Codex does not need a media query for every QA width.

Required outcomes:

- no horizontal overflow
- no clipped text
- no overlapping content
- usable navigation
- sensible card/grid transitions
- readable typography

---

## 18. Component States — REQUIRED

### Buttons

Support:

- Default
- Hover
- Active
- Focus-visible
- Disabled where applicable

Primary button:

```text
Default: #2563EB
Hover:   #1D4ED8
```

Focus must remain visible. Do not use `outline: none` without an accessible replacement.

### Links

Support appropriate Default, Hover, Focus-visible, and Current/Active states.

### Cards

Cards may use Default, Hover, and Focus-within states where semantically appropriate. A non-clickable card must not animate in a way that falsely implies clickability.

### Mobile navigation

Required behaviors:

- explicit open/closed state
- keyboard operable
- appropriate `aria-expanded`
- focus-visible support
- no essential navigation hidden behind hover

---

## 19. Motion — REQUIRED BASELINE

Motion is for feedback, hierarchy, and orientation — not decoration.

Recommended transition duration: 150–250ms.

Support:

```css
@media (prefers-reduced-motion: reduce) {
  /* reduce or remove non-essential motion */
}
```

---

## 20. Accessibility — REQUIRED

Use semantic HTML appropriately:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Requirements:

- one meaningful H1 on the Homepage
- logical H2/H3 hierarchy
- full keyboard access to interactive elements
- visible `:focus-visible`
- preserve/improve the V1 skip link
- reduced-motion support
- suitable text/interactive contrast
- meaningful alt text where images convey information
- decorative images must not create screen-reader noise
- form controls, if any, require labels
- mobile interactive targets should generally be at least ~44×44px
- no horizontal page scrolling at target viewports

Target WCAG level: **AA baseline** for the implemented Homepage.

---

## 21. JavaScript Policy — REQUIRED

Use JavaScript only where necessary.

Good candidates:

- mobile navigation
- interaction that cannot be implemented appropriately with semantic HTML/CSS

Avoid:

- converting the Astro site into a client-heavy SPA
- adding a large animation library
- adding a new frontend framework without a real requirement
- hydrating every component

---

## 22. Astro Architecture

Codex MUST inspect the actual repository before changing architecture.

Preferred conceptual structure:

```text
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── ProblemSelector.astro
│   ├── Services.astro
│   ├── ServiceCard.astro
│   ├── CaseStudies.astro
│   ├── Process.astro
│   ├── About.astro
│   ├── Guides.astro
│   ├── CTA.astro
│   └── Footer.astro
│
├── pages/
│   ├── index.astro
│   ├── services/
│   └── contact.astro
│
└── styles/
    └── global.css
```

This is a target architecture, not an instruction to create duplicate components when equivalent components already exist.

### Reuse before rewrite — REQUIRED

Inspect existing components such as:

- `Header.astro`
- `Hero.astro`
- `CTA.astro`
- `Footer.astro`
- `ServiceCard.astro`

Refactor reusable code instead of deleting and recreating it without reason.

### CSS architecture — RECOMMENDED

```text
Design tokens
↓
Global primitives
↓
Layout
↓
Components
↓
Responsive overrides
```

Prefer semantic CSS variables over repeating raw colors throughout the codebase.

Do not install Tailwind or another CSS framework unless it is already part of the project or explicitly approved.

---

## 23. Content Integrity — REQUIRED

Codex MUST NOT invent factual claims, including:

- customer counts
- client names
- testimonials
- revenue
- project counts
- years of experience
- SLA
- certifications
- response-time promises
- performance statistics
- case-study metrics
- additional contact channels

Use only verified content or clearly marked placeholders awaiting human review.

### Employer/client confidentiality

Case studies based on employment experience must be anonymized.

Do not expose:

- employer/client names without approval
- internal IP addresses
- credentials
- private infrastructure details
- employee data
- database records
- confidential operational data

Generic descriptions such as “manufacturing environment” or “internal attendance workflow” are preferred when context is needed.

---

## 24. Local Business Information / Structured Data

Local SEO data may use the verified business information in Section 2.

If structured data is implemented, Codex must:

- use verified business information only
- use an appropriate schema type supported by the site's actual business model
- not invent ratings/reviews/price ranges
- not invent social profiles
- keep business hours consistent with this specification

Domain/canonical URL must come from the project's verified production configuration; do not guess it from a similar domain name.

---

## 25. SEO — REQUIRED BASELINE

Homepage should provide or preserve:

- descriptive `<title>`
- meta description
- canonical URL using verified site configuration
- Open Graph metadata
- sensible heading hierarchy

Reuse existing SEO infrastructure where available.

Do not add structured data containing fabricated business claims.

---

## 26. Performance — REQUIRED BASELINE

Avoid:

- unnecessary JavaScript
- oversized images
- unnecessary font payloads
- large animation dependencies
- avoidable layout shifts
- excessive DOM complexity

Use Astro's static/server-rendering strengths where appropriate.

A high Lighthouse score is desirable but is not a reason to remove useful content or accessibility behavior. Fix material performance problems rather than gaming the metric.

---

## 27. Figma Reference and Precedence

Design reference:

**DaveDev Tech — Homepage V2 UX Wireframe**  
Figma file key: `h2a5OVPHHTTK2v7tHY4GzN`

Relevant existing frames include:

- Desktop wireframe
- Mobile wireframe
- Foundations
- High-Fidelity Desktop

### IMPORTANT

The existing Figma High-Fidelity frame may still contain the earlier Mint/Navy palette because the Figma Starter MCP quota prevented the final palette mutation.

**This specification has precedence over stale Figma colors.**

The implementation MUST use the locked Tech Blue palette from Section 5, even if the Figma reference still shows Mint.

Figma is a visual/structural reference; browser behavior and this specification are the implementation source of truth.

---

## 28. Implementation Phases — REQUIRED

Do not implement the entire redesign as one uncontrolled change.

### Phase 00 — Audit / Planning

Codex must inspect:

- repository structure
- `package.json` and package manager
- current `git status`
- existing Astro configuration
- current components/pages
- global CSS/tokens
- SEO/layout infrastructure
- current routes
- current contact data
- existing responsive/accessibility behavior

Then report:

1. current architecture
2. reusable components
3. technical risks
4. files expected to change
5. proposed Phase 01 plan

**STOP after the report. Do not edit files until Phase 01 is approved.**

### Phase 01 — Foundation

Scope:

- design tokens
- IBM Plex Sans Thai
- global CSS foundations
- container/grid primitives
- spacing/radius
- focus system
- baseline responsive typography

Then:

```text
Build
Review diff
Report warnings/errors
Commit only when instructed
```

### Phase 02 — Homepage

Scope:

- Header
- Hero
- Problem Selector
- Services
- Proof of Work
- Process
- About
- Guides
- Final CTA
- Footer

Then perform build and desktop QA.

### Phase 03 — Responsive + Interaction

Scope:

- mobile navigation
- 390px
- 768px
- 1024px
- 1440px
- hover/active/focus states
- reduced motion

Then perform build and responsive QA.

### Phase 04 — Quality / Shipping

Scope:

- accessibility review
- SEO review
- performance review
- content verification
- visual polish
- dead CSS cleanup
- production build
- final browser QA

---

## 29. Git Safety — REQUIRED

Codex must:

1. inspect `git status` before edits
2. never overwrite unrelated user changes
3. identify files expected to change
4. work phase-by-phase
5. run the project's real build command before declaring success
6. report warnings/errors accurately
7. never use destructive reset to solve implementation issues
8. never force-push
9. never push unless explicitly instructed
10. inspect the final diff before summarizing

Suggested commit subjects when the user chooses to commit:

```text
feat: establish DaveDev Tech V2 design foundations
feat: implement Homepage V2
feat: add responsive navigation and mobile layouts
chore: polish accessibility SEO and performance
```

---

## 30. Acceptance Criteria — REQUIRED

### Build

- production build succeeds
- no blocking build errors
- no new unexplained runtime/console errors

### Responsive

At 390 / 768 / 1024 / 1440px:

- no horizontal overflow
- no overlapping content
- no clipped copy
- navigation remains usable
- grids adapt appropriately
- CTA remains discoverable

### Typography

- IBM Plex Sans Thai loads correctly or an approved fallback is used if a documented technical constraint prevents it
- Thai and English remain readable
- hierarchy matches the specification

### Brand

- Tech Blue `#2563EB` is the primary accent
- stale V1 Mint is not present unintentionally
- page feels like a local IT service business, not a personal developer portfolio

### Accessibility

- keyboard navigation works
- focus is visible
- skip link works
- heading hierarchy is sensible
- reduced motion is supported
- mobile menu is accessible

### Content integrity

No fabricated:

- clients
- reviews
- statistics
- certifications
- case-study metrics
- contact details

### Contact

Production Homepage uses:

```text
082 205 9652
davedevtech@gmail.com
```

No LINE or Messenger CTA is displayed unless this specification is explicitly revised later.

### Architecture

- no unnecessary framework/dependency introduced
- reusable sections are componentized appropriately
- existing working code is reused where practical

---

## 31. Definition of Done

Homepage V2 is considered complete when:

```text
Design tokens             ✓
Typography                ✓
Desktop Homepage          ✓
Mobile Homepage           ✓
Responsive behavior       ✓
Component states          ✓
Accessibility baseline    ✓
SEO baseline              ✓
Verified business data    ✓
Production build          ✓
Browser QA                ✓
Final diff reviewed       ✓
Git working tree known    ✓
```

---

## 32. Out of Scope — Homepage V2

Do not add as part of this implementation unless separately approved:

- customer login
- admin dashboard
- payment/e-commerce system
- booking system
- live-chat platform
- CMS migration
- complex animation system
- dark mode
- multilingual site
- large JavaScript framework migration
- redesign of every service page at the same time
- new logo/brand identity redesign
- fake testimonials or placeholder customer logos

Homepage V2 should be completed and validated before broadening the redesign.

---

## 33. Codex Start Protocol — REQUIRED

When Codex receives this specification:

### Step 1

Read `DAVDEVTECH_V2_SPEC.md` completely.

### Step 2

Inspect the repository without modifying files.

### Step 3

Report:

```text
1. Current architecture
2. Current git/worktree state
3. Reusable components
4. Conflicts between V1 and this V2 spec
5. Technical risks
6. Files expected to change in Phase 01
7. Phase 01 implementation plan
8. Build/test commands that will be used
```

### Step 4

**STOP and wait for approval.**

Do not begin Phase 01 automatically.

---

## 34. Core Implementation Rule — LOCKED

> **Do not redesign the product while implementing the product.**

Locked product decisions include:

- DaveDev Tech naming
- Modern Local IT Consultancy direction
- Tech Blue palette
- IBM Plex Sans Thai
- Homepage information architecture
- customer-problem-first positioning
- verified business/contact information
- non-sticky initial V2 header
- accessibility baseline
- Astro-first architecture direction

Codex may make implementation-level decisions where necessary, but those decisions must preserve this specification's intent and must not silently change locked product decisions.

---

## 35. Ready-to-Use Codex Phase 00 Prompt

```text
Read DAVDEVTECH_V2_SPEC.md completely before doing anything else.

You are working on the DaveDev Tech Astro repository. Treat the specification as the implementation source of truth.

For this run, perform PHASE 00 — AUDIT / PLANNING ONLY.

Do not edit, create, delete, format, commit, or push any files.
Do not install packages.
Do not redesign anything.

Inspect the repository and report:
1. Current project architecture and package manager.
2. Current git status/worktree state, including existing uncommitted changes.
3. Existing components/pages/styles that can be reused for Homepage V2.
4. Conflicts or gaps between the current V1 implementation and DAVDEVTECH_V2_SPEC.md.
5. Technical risks or dependencies that should be resolved before implementation.
6. Exact files you expect Phase 01 — Foundation to modify or create.
7. A concise, ordered Phase 01 implementation plan.
8. The exact build/test commands you intend to run after Phase 01.

Pay particular attention to:
- preserving unrelated user changes;
- existing Astro structure;
- existing Header/Hero/CTA/Footer/ServiceCard components;
- current global CSS and design tokens;
- IBM Plex Sans Thai loading strategy;
- current SEO/layout infrastructure;
- responsive/accessibility behavior;
- existing contact information that conflicts with the verified values in the spec.

Important verified contact data:
Phone: 082 205 9652
Email: davedevtech@gmail.com
There is no LINE or Messenger contact channel.

IMPORTANT: The Figma reference may still show the old Mint palette. The spec's Tech Blue palette is authoritative.

Stop after the audit report and wait for approval before making any changes.
```

---

**END OF SPECIFICATION — V1.0 FROZEN**
