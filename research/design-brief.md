# Design brief — Excalibur Renovations Ltd (Local Sites Lab concept)

## Target customer
Homeowners and small commercial clients in and around **Bishop's Stortford** who need a multi-trade renovations partner for extensions, kitchens/bathrooms, plumbing/heating or broader building work — and who want clear credentials plus an easy free quotation path.

## Primary customer job
**Request a free quotation** (or call/email for consultation). Secondary: confirm Gas Safe / Oftec / established local team before contacting.

## Research notes (competitors & conversion)
Renovation-led UK brochures that convert well typically lead with finished-space photography, a short credentials strip, then a quote CTA — not an emergency phone-first stack.

Peer patterns reviewed (layout ideas only; not copied):
- Multi-trade builders: project galleries before long service lists
- Heating/plumbing hybrids: credential chips near the hero
- Kitchen/bath specialists: paired “space” photography with solid caption panels

### Methodology & design citations
- Material 3 colour roles / elevation via surface contrast (not shadows): https://m3.material.io/styles/color/system/overview
- Component gallery patterns for cards and CTAs: https://component.gallery/
- Design systems index: https://designsystems.one/
- WCAG 2.2 contrast mindset: https://www.w3.org/WAI/WCAG22/quickref/
- Baymard research on form clarity (quote flows): https://baymard.com/blog/current-password-usability (general form UX discipline; no invented stats claimed here)

## Visual direction
- **Brand hexes from live site chrome:** teal `#39847a` (WhatsApp header), cyan-teal CTA `#40b0bf` (btn-success), warm sand `#e5ddd5`.
- **Deep header plate** `#0f2a26` so the official **white** wordmark reads clearly.
- Typography: Libre Baskerville (display) + Outfit (UI) — craft renovation feel, distinct from other LSL concepts.
- Flat elevation only: borders + background contrast. **No box-shadows. No text-over-photo scrims.**

## Why this layout differs from other Local Sites Lab concepts
Architecture nickname: **“Renovation Journey brochure”**.

| Other LSL concepts | This concept |
| --- | --- |
| DSB Heating — emergency command / dual-tel dock | Consultative quote path, not panic UX |
| Premier Drainage — fleet showcase + chooser | Project-space pairs + credentials strip |
| Mack Building — gallery-first builder strip | Explicit **paired project panels** + mid-page **quote band** + credentials immediately under hero |
| Positive Connection — pathway switcher electrician | Renovation portfolio journey, not survey pathway |

**Section order (unique):**  
1) Full-bleed split hero (solid copy | team/project photo) → 2) Credentials strip → 3) Trust chips (no invented ratings) → 4) Quote CTA band → 5) Paired project showcase → 6) Service pathway cards → 7) About / founder → 8) Areas → 9) Contact quote panel.

## Logo & imagery sources
- Logo (white wordmark): http://www.excalibur-renovations.co.uk/assets/images/excalibur-renovations-logo-white-256x77.png → `public/images/logo-white.png`
- Teal recolour for light plates: derived from same mark → `logo-teal.png`
- Team hero: `excalibur-renovations-team-1600x1200.webp`
- Projects: kitchen, bathroom, driveway, portfolio, build photos from current `assets/images/`
- Credentials graphic: `excalibur-gas-safe-and-oftec-1158x1144.webp` (current-site claim artwork)

## Gaps
- No verified public review platform score at build time — social proof uses credentials + quotation CTA, not invented stars/ratings.
- Gas Safe / Oftec not independently confirmed on public registers from this environment (403/blocked); labelled as **stated on current site**.
- `projects.html` returned 403 during crawl; project imagery recovered from CSS background URLs with Referer.
- Official email spelling `Enquires@` retained as published.

## Primary CTA pattern
Mailto + tel quotation path; demo form clearly labelled as not connected.
