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
4. Record the chosen combination (and what it deliberately avoids) in the discovery brief §8.

**After** sign-off: append the design's fingerprint as a row below. Append-only; do not edit shipped rows.

## Fingerprint vocabulary

Keep values from these sets so entries stay comparable.

- **archetype:** `ecommerce` · `corporate` · `servizi` · `locale` · `landing` · `portfolio`
- **mood:** `editoriale` · `conversion` · `bold-dark` · `caldo` · `heritage` · `tech` · `lusso` · `clinico`
- **hero-pattern:** `split-7/5` · `full-bleed-photo` · `centered-statement` · `video-bg` · `product-hero` · `text-only` · `split-form` (hero with lead form) · `gallery-hero`
- **layout-signature:** `asymmetric-7/5` · `centered-narrow` · `fullbleed-alternating` · `grid-heavy` · `editorial-columns` · `sidebar`
- **palette-direction:** `light-warm` · `light-cool` · `dark` · `mono+accent` · `dual-tone` · `high-contrast`
- **track:** `A` (WordPress) · `B` (Next.js) · `static`
- **brand:** `client` (had identity) · `express` (Lavder created it)

## Ledger

Most recent first.

| Date | Client | Archetype | Mood | Hero-pattern | Layout-signature | Palette | Track | Brand | Notes / link |
|---|---|---|---|---|---|---|---|---|---|
| 2026-05-30 | Officine Lario (demo / reference) | corporate | tech | split-7/5 | asymmetric-7/5 | dark | A | express | Reference example. Precision-mechanics B2B, industrial blue accent (not Lavder orange), mixed radius (soft cards + squared buttons), AI-generated imagery (Lavder ImageGen, documentary camera-real look), GSAP+Lenis motion, stats-forward. Multi-page: `reference-corporate/` |

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
