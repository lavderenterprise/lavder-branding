# Changelog

All notable changes to the Lavder Enterprise brand system are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/), versioning follows [SemVer](https://semver.org/).

---

## [0.3.2] — 2026-05-31

### Added
- **`documents/website-design/image-generation.md`** — imagery guideline: style follows use; how to prompt for authentic **camera photography** instead of the hyperreal/CGI "fake" look (name the medium + camera + lens + available light + grain + imperfection; drop "photorealistic/ultra-detailed/8k/render"); recipes per mood/sector; Lavder ImageGen usage; vetting; the Officine Lario before/after. Linked from README §9.5.

### Changed
- **`reference-corporate/`** — regenerated the imagery with the corrected camera-real recipe (documentary DSLR, available factory light, subtle grain) so it reads as real factory photography, not a render. Re-rendered `reference-corporate-home.png`.

---

## [0.3.1] — 2026-05-31

### Changed

- **`documents/website-design/reference-corporate/`** — replaced the placeholder stock photos with **bespoke AI-generated imagery** produced via the Lavder ImageGen service (OpenRouter → Nano Banana / Gemini 2.5 Flash Image): hero CNC with coolant, metrology CMM, 5-axis milling, workshop, automotive gears, manufacturing facility, hydraulic valve bodies. Dark-industrial, blue-accent, no people (brand rule). Re-rendered `reference-corporate-home.png`. Removed unused stock (grinding/tubes/warehouse).

---

## [0.3.0] — 2026-05-30

### Added — Website design guideline

- **`documents/website-design/`** — playbook for designing client websites and presenting them for pre-build approval. Core principle: the mockup is **client-branded** (Lavder's own orange/TWK/monogram live only in the presentation wrapper), split into a constant Lavder craft layer plus a variable client brand layer.
  - `README.md` — full playbook: two-layer principle, tier model (Landing / Vetrina / Complesso), two build tracks (A: WordPress Impreza + WPBakery / B: Next.js), end-to-end process with per-tier approval gates, design system applied to web (grid, type, color, components, imagery, motion, voice), 6 archetypes with recipes, 8-mood library, the concept-ledger anti-repetition mechanism, hybrid deliverable (hi-fi prototype + presentation), handoff per track, do/don't.
  - `discovery-brief.md` — per-client intake, brand extraction, and brand-express (when the client has no identity).
  - `sources.md` — curated component/section kits, animation (GSAP free, Lenis), inspiration galleries, icons, imagery, mapped per build track.
  - `concept-ledger.md` — living "seed" registry of every design's fingerprint, with the anti-repetition rule that keeps the portfolio from converging on one look.
  - `reference-corporate/` — first worked example: a **multi-page** navigable hi-fi prototype (corporate archetype, demo client Officine Lario, precision-mechanics B2B). Pages: home, lavorazione (service template, SEO), contatti (preventivo form + drawing upload), azienda (history/numbers/facility/sectors), plus `sitemap.html` and `wireframe.html`. Client-branded (industrial blue accent, mixed radius = soft cards + squared buttons, Space Grotesk + Inter, NOT Lavder orange). Self-contained own `styles.css` + `app.js` (no Tailwind CDN). **Real category stock images** (Pexels) in `img/`. **Rich motion**: Lenis smooth scroll + GSAP ScrollTrigger reveals, animated counters, hero parallax, progressive-enhancement + reduced-motion safe. Verified desktop + mobile + working menu.
  - Process: added **design-parameters intake quiz** (README §9.0) so the look is chosen with the client (style, palette, radius, logo, fonts, imagery, motion, pages), not unilaterally. `sources.md` font pool set to the **full Google Fonts library**.
  - `presentation-template.html` — Lavder-branded 16:9 deck (7 slides) framing the prototype. Renders to PDF via Chrome headless. `reference-corporate-home.png` is the embedded home screenshot.

---

## [0.2.0] — 2026-05-28

### Added — Documents section

- **`documents/`** — new top-level folder for branded institutional documents (preventivi, proposte, contracts, reports).
- **`documents/README.md`** — overview, PDF render command, subfolder index.
- **`documents/preventivi/`** — branded quote/proposal templates and conventions:
  - `README.md` — full guide: document structure (11 sections), voice, Italian conventions (IVA esente, colons not em-dashes, parens, `+` prefix), standard CYA clauses (garanzie, esclusioni, SAL 30/40/30, proprietà), Lavder Polyglot upsell, white-label conventions, pricing rounding, Chrome-headless PDF rendering, sed-pitfall gotcha.
  - `preventivo-template.html` — sanitized reference template with `[placeholders]`. Self-contained: tokens, fonts (relative `../../assets/fonts/`), cover, sections, totals card, garanzie/esclusioni, SAL.

---

## [0.1.0] — 2026-04-22

### Added — Initial release

- **Brand docs** (`brand/`) — 9 markdown files covering company, voice, logo, color, typography, spacing, iconography, imagery, motion.
- **Design tokens** (`tokens/`):
  - `tokens.json` — W3C DTCG single source of truth.
  - `css/variables.css` — CSS custom properties with light/dark modes.
  - `css/fonts.css` — `@font-face` for TWK Lausanne + Inter.
  - `scss/_tokens.scss` — SCSS mirror.
  - `tailwind.preset.js` — Tailwind v3 preset.
- **Assets** (`assets/`):
  - LVDR monogram — SVG (black + white) + 7 PNG variants.
  - Fonts: TWK Lausanne (100–1000, TTF + WOFF + WOFF2) and Inter (variable + static).
  - 7 color badges (orange, white, blue, cyan, black, green, purple).
- **Components** (`components/`) — buttons, cards, forms, navigation, + integrated preview page. Shared `_components.css`.
- **Claude Design package** (`claude-design/`) — consolidated brand guide + visual swatches of palette, type, components, ready for upload.
- **`SKILL.md`** — Claude Code skill manifest.
- **`README.md`**, **`LICENSE`**, **`.gitignore`**.

### Canonical values locked
- `color.ink` = `#111113` (near-black, not `#000000`)
- `color.brand` = `#F87016`
- `color.brand-accent` = `#FCA400`
- Heading face: TWK Lausanne · Body face: Inter
