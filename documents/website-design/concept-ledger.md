# Concept ledger

The "seed" registry. A living record of the **fingerprint** of every website design Lavder ships, so the next one deliberately diverges. This is how a systematic, AI-leveraged practice avoids the failure mode where every client gets the same site.

It operates the three variation mechanisms together (README §12): fixed system + variable skin, sector-guided variants, and an occasional unique concept. The ledger is what makes them add up across the portfolio instead of drifting toward one house look.

## The rule

**Before** starting a new design:
1. Open this ledger and read the recent entries, especially others in the **same archetype**.
2. Choose a combination of `archetype × mood × hero-pattern × layout-signature × palette-direction` that is **not already used** by a recent neighbor.
3. Hard constraints:
   - No two of the **last 5** designs share the same `(archetype + hero-pattern + layout-signature)` triple.
   - Within the **same archetype**, vary at least the `hero-pattern` **and** the `palette-direction` from the most recent one.
   - Vary the **section-intro** and the **signature-device** from the most recent same-archetype build. The eyebrow-with-a-dot and recurring copy tics ("fatto a mano", "X · Y") must not repeat build after build.
4. Record the chosen combination (and what it deliberately avoids) in the discovery brief §8.

**After** sign-off: append the design's fingerprint as a row below. Append-only; do not edit shipped rows.

## Fingerprint vocabulary

Keep values from these sets so entries stay comparable.

- **archetype:** `ecommerce` · `corporate` · `servizi` · `locale` · `landing` · `portfolio`
- **mood:** `editoriale` · `conversion` · `bold-dark` · `caldo` · `heritage` · `tech` · `lusso` · `clinico`
- **hero-pattern:** `split-7/5` · `full-bleed-photo` · `centered-statement` · `video-bg` · `product-hero` · `text-only` · `split-form` (hero with lead form) · `gallery-hero`
- **layout-signature:** `asymmetric-7/5` · `centered-narrow` · `fullbleed-alternating` · `grid-heavy` · `editorial-columns` · `sidebar`
- **palette-direction:** `light-warm` · `light-cool` · `dark` · `mono+accent` · `dual-tone` · `high-contrast`
- **section-intro:** how sections announce themselves: `eyebrow-dot` · `numbered` · `icon-label` · `standalone-display` · `kicker-rule` · `none`. Rotate it: the dotted eyebrow is **not** a default for every build.
- **signature-device:** the one memorable element of the build: `h-scroll-categories` · `sticky-ingredient-story` · `bento-ritual` · `marquee` · `before-after-reveal` · `overlap-editorial` · `none`. Vary it across neighbors.
- **track:** `A` (WordPress) · `B` (Next.js) · `static`
- **brand:** `client` (had identity) · `express` (Lavder created it)

## Ledger

Most recent first.

| Date | Client | Archetype | Mood | Hero-pattern | Layout-signature | Palette | Track | Brand | Notes / link |
|---|---|---|---|---|---|---|---|---|---|
| 2026-06-01 | Studio Legale Vittori (demo / reference) | servizi | editoriale | split-form | editorial-columns | mono+accent | A | express | Worked example #3. Law firm, authoritative editorial: burgundy `#7A2E33` single CTA accent on warm off-white, Spectral + Inter, restrained squared radius. section-intro `kicker-rule`; signature = split-form hero (consult card) + practice-areas index + process steps + FAQ. 3 pages (home / studio / contatti) + wireframe-style sitemap. `reference-servizi/` |
| 2026-06-01 | Osteria del Borgo (demo / reference) | locale | heritage | gallery-hero | grid-heavy | dual-tone | A | express | Worked example #4. Osteria / trattoria, heritage warmth: cream `#FAF4E8` + olive `#3B4A2F`, bordeaux `#6E2B2B` single CTA, DM Serif Display + Mulish, soft 8px. section-intro `numbered`; signature = gallery-hero collage + menu price-lists + photo gallery + reservation + orari / map. 3 pages (home / menu / contatti) + sitemap. `reference-locale/` |
| 2026-06-01 | Scadenza (demo / reference) | landing | conversion-first | centered-statement | centered-narrow | high-contrast | B | express | Worked example #5. SaaS landing (deadline / invoice tracker for freelancers), single long page (Tier 1, 12 sezioni): white / ink + electric indigo `#4F46E5`, Plus Jakarta Sans, soft 12px. section-intro `standalone-display` (no eyebrow); signature = HTML/CSS product UI mocks + logo marquee + feature bento + pricing table + FAQ + sticky CTA. `reference-landing/` |
| 2026-06-01 | Brio (demo / reference) | portfolio | bold-dark | text-only | grid-heavy | dark | B | express | Worked example #6. Creative studio, expressive dark: near-black `#0E0E10` + coral `#FF6A4D` (deliberately distinct from Officine Lario's dark + industrial blue), Space Grotesk (oversized) + Inter, sharp 6-8px. section-intro `none / minimal`; signature = text-only typographic hero + project hover-reveal grid + h-scroll work rail + big-type services + keyword marquee. 2 pages (home / progetto) + sitemap. `reference-portfolio/` |
| 2026-05-31 | FIORÈLA (demo / reference) | ecommerce | caldo | full-bleed-photo | fullbleed-alternating | light-warm | A | express | Reference example #2, built **only** from this repo's guidelines (self-sufficiency test). Botanical cosmetics, mood **botanico materico**: prugna #6D4C7D as the single CTA accent on cream/plaster, secondary naturals (salvia / argilla / oro) for details, paper-grain texture, organic image frames, hand-drawn underline accents, soft radius (cards 16 / buttons 10), Fraunces + Nunito Sans. **section-intro = rotated** (icon-label / numbered / rule / standalone display): NO dotted eyebrow. **signature-device = `h-scroll-categories` + `sticky-ingredient-story` + `before-after-reveal` + `bento-ritual` + `marquee`**. Composition deliberately alternated and balanced (hero text-left, splits zig-zag, newsletter centered). **Full 5-page site, each long** (home 11 / shop 7 / prodotto 7 / carrello 6 / storia 10 sezioni), inner pages as rich as the home. Camera-real materico AI imagery (Lavder ImageGen, 22 shots, no faces). Diverges from Officine Lario on archetype + mood + hero-pattern + layout-signature + palette + signature-device. Multi-page: `reference-ecommerce/` (+ 5-tab navigable wireframe + wireframe-style sitemap) |
| 2026-05-30 | Officine Lario (demo / reference) | corporate | tech | split-7/5 | asymmetric-7/5 | dark | A | express | Reference example. Precision-mechanics B2B, industrial blue accent (not Lavder orange), mixed radius (soft cards + squared buttons), AI-generated imagery (Lavder ImageGen, documentary camera-real look, hyper-detailed prompts), rich layout (full-bleed image + video backgrounds, bento, overlap, immersive cards), IntersectionObserver reveals + Lenis. Multi-page: `reference-corporate/` |

<!--
EXAMPLE ROWS (illustrative only, replace with real deliveries):

| 2026-06-10 | Cantina Rossi | locale | heritage | full-bleed-photo | fullbleed-alternating | light-warm | A | client | wine producer, provenance storytelling |
| 2026-06-03 | Studio Bianchi | servizi | clinico | split-7/5 | centered-narrow | light-cool | A | express | dental studio, booking-led, created brand direction |
| 2026-05-28 | Meccanica Verdi | corporate | tech | centered-statement | grid-heavy | dark | A | client | B2B manufacturing, stats-forward |

Note how no two share the same (archetype + hero-pattern + layout-signature) triple, and the two that are closest in time use different palette-directions.
-->

## Maintenance

- One row per shipped design (after sign-off).
- When the table passes ~40 rows, move entries older than ~18 months under a `## Archive` heading at the bottom (still searchable, out of the active scan).
- This can graduate to a machine-readable file (JSON/CSV) if a tool ever needs to query it; the markdown table is the source of truth until then.
