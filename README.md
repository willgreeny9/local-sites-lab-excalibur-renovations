# Excalibur Renovations Ltd — Local Sites Lab concept

Independent redesign concept for **Excalibur Renovations Ltd**, a Bishop's Stortford renovations, building and plumbing firm.

- **Source business site:** https://www.excalibur-renovations.co.uk/
- **Official logo (white wordmark):** http://www.excalibur-renovations.co.uk/assets/images/excalibur-renovations-logo-white-256x77.png → `public/images/logo-white.png`
- **Concept by:** William Green / [Local Sites Lab](https://localsiteslab.com)
- **Repo:** https://github.com/willgreeny9/local-sites-lab-excalibur-renovations

## Concept disclaimer

This is **not** the official Excalibur Renovations website and has **not** been endorsed by the business. It was created independently from publicly available information to show what a clearer, conversion-focused renovations brochure could look like. The concept remains `noindex` until owner approval.

## Architecture

Unique **Renovation Journey** brochure (see `research/design-brief.md`):

1. Full-bleed split hero (solid sand copy panel | team photo)
2. Credentials strip (Gas Safe / Oftec stated · Companies House · team of ten · est. 2008)
3. Trust chips (no invented review scores)
4. Quote CTA band
5. Paired project showcase (kitchen/bathroom/external/build)
6. Service pathway cards
7. About / founder
8. Areas
9. Contact quotation panel

Intentionally different from Local Sites Lab emergency-trade, drainage fleet, electrician pathway and Mack gallery-first concepts.

## Stack

- Next.js (App Router)
- React + TypeScript
- Global CSS design system (`app/globals.css`)
- Node test runner (`node --test`)

## Commands

```bash
npm ci
npm run dev
npm test
npm run lint
npm run build
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Renovation journey homepage |
| `/services` | Services overview + catalogue |
| `/building` | Building services |
| `/plumbing-heating` | Plumbing and heating |
| `/extensions-conversions` | Extensions and conversions |
| `/kitchens-bathrooms` | Kitchens and bathrooms |
| `/carpentry` | Carpentry and roofing |
| `/projects` | Project photography gallery |
| `/about` | History, credentials |
| `/areas-covered` | Bishop's Stortford base / areas |
| `/testimonials` | Trust notes (no invented ratings) |
| `/contact` | Free quotation / contact |
| `/privacy` | Concept privacy notes |
| `/robots.txt` | Disallow all |
| `/sitemap.xml` | Concept sitemap (still noindex) |

## Safeguards

- Metadata `robots: { index: false, follow: false }`
- `robots.ts` disallows all crawlers
- Sticky Local Sites Lab attribution bar on every page
- First-visit ConceptNotice modal (`excalibur-renovations-concept-notice-dismissed-v4`)
- Demo enquiry form is **not** connected; use verified tel/mailto
- British English; no invented ratings, prices or testimonials
- Gas Safe / Oftec labelled as current-site claims

## Content sources

See `research/design-brief.md` and `lib/business.ts`.

## Gaps

- No verified public platform review score at build time
- Gas Safe / Oftec not independently confirmed on public registers from the build environment
- `projects.html` returned 403 during crawl; imagery recovered from CSS asset URLs
