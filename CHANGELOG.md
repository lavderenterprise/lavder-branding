# Changelog

All notable changes to the Lavder Enterprise brand system are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/), versioning follows [SemVer](https://semver.org/).

---

## [0.7.0] - 2026-06-01

### Changed
- **`documents/website-design/` rewritten from scratch into a staged pipeline** (was a long README plus scattered docs). It now runs as ordered layers, each with a gate that must pass before the next: `1-intake` (now including a **graphic-push dial**: Sober / Refined / Expressive / Extreme that calibrates the whole job), `2-research` (a **mandatory web-research pass before any code**: study the best studios for this brief, build a moodboard, diverge from the ledger), `3-art-direction` (a studio-grade art-direction layer: commit to one bold point of view + a named signature moment, atmosphere over flat color, dominant + sharp color, type as a lead actor, deliberate grid-breaks, one orchestrated load), `4-elements` (a **500+ element library** across uiverse / HeroUI / CodePen / kits with a **randomization protocol** so parts never repeat), `5-build` (build order + one coherent spacing system + rich, complete pages), `6-anti-ai` (a checklist that strips the AI tells: em-dash, animated counters, markdown-looking blocks, canonical fonts, cliche layouts), `7-quality` (the craft floor), `8-deliverable`. The README is the pipeline master (two layers: craft floor + art-direction ceiling).
- **New `fonts.md`**: a rotating library of non-canonical Google Font pairings by mood, banning Inter / Roboto / Arial / Poppins / Montserrat and Space Grotesk as a reflex.
- **`concept-ledger.md`** extended with `push-dial`, `fonts` and `elements` fingerprint fields (the element-ledger feeds anti-repeat).

### Removed
- `discovery-brief.md`, `sources.md`, `build-quality.md`, folded into `1-intake`, `4-elements` and `7-quality` respectively.

---

## [0.6.0] - 2026-06-01

### Added
- **Four new archetype worked examples**, completing the set of 6. Each has a deliberately distinct concept-ledger fingerprint (archetype, mood, hero-pattern, layout-signature, palette, signature-device all vary):
  - **`documents/website-design/reference-servizi/`** : Studio Legale Vittori (servizi). Editoriale/authoritative, mono + burgundy `#7A2E33`, Spectral + Inter, split-form hero, practice-areas index, process steps, FAQ. 3 pages + wireframe-style sitemap.
  - **`documents/website-design/reference-locale/`** : Osteria del Borgo (locale/hospitality). Heritage, dual-tone cream + olive, bordeaux `#6E2B2B` CTA, DM Serif Display + Mulish, gallery-hero collage, menu price-lists, photo gallery, reservation + orari. 3 pages + sitemap.
  - **`documents/website-design/reference-landing/`** : Scadenza (landing/SaaS). Conversion-first, high-contrast white/ink + electric indigo `#4F46E5`, Plus Jakarta Sans. Single long page (Tier 1) with HTML/CSS product UI mocks, logo marquee, feature bento, pricing table, FAQ, sticky CTA.
  - **`documents/website-design/reference-portfolio/`** : Brio (portfolio/creative). Bold-dark, near-black `#0E0E10` + coral `#FF6A4D`, Space Grotesk (oversized) + Inter, text-only typographic hero, project hover-reveal grid, h-scroll rail, big-type services, marquee. 2 pages (home + project case study) + sitemap.
  - Each is self-contained (own `styles.css`/`app.js`) and built on the shared craft layer (`build-quality.md`): horizontal containment, one section rhythm, reveal failsafe + reduced-motion, hover-overlay `z-index`, clean grid fills, animated accordions, themed scrollbars, buttons sized by role. People-free imagery via Lavder ImageGen (19 shots). DOM-verified containment at 390 and 1280, built in parallel by subagents.

### Changed
- **`documents/website-design/concept-ledger.md`** : 4 fingerprint rows added; all 6 archetypes now logged, each with a unique hero-pattern and mood.
- **`documents/website-design/README.md`** : Files table lists the 4 new reference folders.

---

## [0.5.0] - 2026-05-31

### Added
- **`documents/website-design/reference-ecommerce/`**: second worked example: **FIORÈLA**, a fictional botanical-cosmetics shop, built **only** from these guidelines as a self-sufficiency test. Mood "botanico materico" (warm, tactile): prugna `#6D4C7D` as the single CTA accent on cream/plaster, paper-grain texture, organic image frames, hand-drawn underline accents, Fraunces + Nunito Sans. A **full 5-page site** (home, shop/listing, product/PDP, cart, story), each long and rich (7-12 sections), on a shared `styles.css`/`app.js`, plus a 5-tab navigable `wireframe.html` and a wireframe-style `sitemap.html`. Distinctive devices: horizontal-scroll category rail (drag + arrows), bento ritual, before/after reveal slider, PDP sticky gallery + ingredient scroll-story, values marquee, auto-crossfade hero slideshow. 22 camera-real materico images via Lavder ImageGen (no faces).
- **`build-quality.md` §4 "Interaction & component polish"**: hover must never hide content (`z-index` overlays over images that zoom on hover), themed/hidden scrollbars on rails, accordions that animate open *and* closed (`details:has(> .body)`), button scale by role, generous measure for one-sided text, auto-crossfade hero. Plus an `elementFromPoint` stacking/hover verification method and a stronger grid-fill rule (cell spans must sum to whole rows).

### Changed
- **`documents/website-design/README.md`**: codified the rules that stop repetitive / incomplete output: build **every** primary page (Tier 2 = 6+, Tier 3 = 7-12 sections), inner pages never thinner than the home (§8, §14, §9.8); vary and balance composition section to section (§8); rotate section-intro devices and avoid a signature copy tic (§8); mandatory library-pattern sourcing as the creativity engine (§9.4); hero-slideshow device (§8); hover-never-hides-content note (§9.4).
- **`documents/website-design/concept-ledger.md`**: fingerprint vocabulary extended with `section-intro` and `signature-device` (rotate both across builds); FIORÈLA row added.

---

## [0.4.1] - 2026-05-31

### Added
- **`documents/website-design/build-quality.md`**: consolidated build-and-verify checklist (layout robustness, horizontal containment, motion/reveal robustness, responsive widths, verification method, pre-ship checklist), capturing the QA lessons from the Officine Lario build. Linked from README (Files table + §19).

### Fixed
- **`reference-corporate/`** layout repairs: bento moved to a 4-column grid (a 3-col grid with a 2×2 feature left an orphan empty cell and looked unbalanced); the "Perché" overlap card now has `position:relative; z-index` so it sits above the image instead of vanishing behind it; footer lists reset their default 40 px `padding-inline-start` (were indented from their headings). Earlier in the cycle: one consistent section vertical rhythm, and horizontal-containment fixes (sr-only skip link instead of `left:-9999px`, `body{overflow-x:clip}`, `width:100%; min-width:0` containers, wrapping eyebrow). All codified in `build-quality.md` + README §8-9.

---

## [0.4.0] - 2026-05-31

### Added
- **Rich, creative layout** for `reference-corporate/`: full-bleed image-background sections (hero with Ken Burns, a stats band, a featured-case band, the CTA), a **muted autoplay video background** band (`video/machining.mp4`), a **bento** lavorazioni grid, an **overlapping** card, **immersive full-image** sector cards, an oversized editorial statement, and a keyword **marquee**. Reveals moved to a robust IntersectionObserver (with a visibility failsafe); Lenis smooth scroll; unused GSAP dependency dropped.
- **`image-generation.md` §3b**: a hyper-detailed prompt standard (describe the whole frame: medium/format; foreground-midground-background with placement; the hero object's material/finish/action; camera + lens + angle + DOF; light direction; color/grade; texture/imperfection; negatives), with the worked Lario hero prompt.
- **`README.md` §8**: a "distinctive devices / richness bar" standard so pages are never shipped sparse (full-bleed image/video backgrounds, bento, overlap, immersive cards, editorial type, marquee), with a per-tier minimum.

### Changed
- Regenerated the Officine Lario image set with hyper-detailed prompts, adding 16:9 background slots (hero, floor, project, CTA).

---

## [0.3.2] - 2026-05-31

### Added
- **`documents/website-design/image-generation.md`**: imagery guideline: style follows use; how to prompt for authentic **camera photography** instead of the hyperreal/CGI "fake" look (name the medium + camera + lens + available light + grain + imperfection; drop "photorealistic/ultra-detailed/8k/render"); recipes per mood/sector; Lavder ImageGen usage; vetting; the Officine Lario before/after. Linked from README §9.5.

### Changed
- **`reference-corporate/`**: regenerated the imagery with the corrected camera-real recipe (documentary DSLR, available factory light, subtle grain) so it reads as real factory photography, not a render. Re-rendered `reference-corporate-home.png`.

---

## [0.3.1] - 2026-05-31

### Changed

- **`documents/website-design/reference-corporate/`**: replaced the placeholder stock photos with **bespoke AI-generated imagery** produced via the Lavder ImageGen service (OpenRouter → Nano Banana / Gemini 2.5 Flash Image): hero CNC with coolant, metrology CMM, 5-axis milling, workshop, automotive gears, manufacturing facility, hydraulic valve bodies. Dark-industrial, blue-accent, no people (brand rule). Re-rendered `reference-corporate-home.png`. Removed unused stock (grinding/tubes/warehouse).

---

## [0.3.0] - 2026-05-30

### Added: Website design guideline

- **`documents/website-design/`**: playbook for designing client websites and presenting them for pre-build approval. Core principle: the mockup is **client-branded** (Lavder's own orange/TWK/monogram live only in the presentation wrapper), split into a constant Lavder craft layer plus a variable client brand layer.
  - `README.md`: full playbook: two-layer principle, tier model (Landing / Vetrina / Complesso), two build tracks (A: WordPress Impreza + WPBakery / B: Next.js), end-to-end process with per-tier approval gates, design system applied to web (grid, type, color, components, imagery, motion, voice), 6 archetypes with recipes, 8-mood library, the concept-ledger anti-repetition mechanism, hybrid deliverable (hi-fi prototype + presentation), handoff per track, do/don't.
  - `discovery-brief.md`: per-client intake, brand extraction, and brand-express (when the client has no identity).
  - `sources.md`: curated component/section kits, animation (GSAP free, Lenis), inspiration galleries, icons, imagery, mapped per build track.
  - `concept-ledger.md`: living "seed" registry of every design's fingerprint, with the anti-repetition rule that keeps the portfolio from converging on one look.
  - `reference-corporate/`: first worked example: a **multi-page** navigable hi-fi prototype (corporate archetype, demo client Officine Lario, precision-mechanics B2B). Pages: home, lavorazione (service template, SEO), contatti (preventivo form + drawing upload), azienda (history/numbers/facility/sectors), plus `sitemap.html` and `wireframe.html`. Client-branded (industrial blue accent, mixed radius = soft cards + squared buttons, Space Grotesk + Inter, NOT Lavder orange). Self-contained own `styles.css` + `app.js` (no Tailwind CDN). **Real category stock images** (Pexels) in `img/`. **Rich motion**: Lenis smooth scroll + GSAP ScrollTrigger reveals, animated counters, hero parallax, progressive-enhancement + reduced-motion safe. Verified desktop + mobile + working menu.
  - Process: added **design-parameters intake quiz** (README §9.0) so the look is chosen with the client (style, palette, radius, logo, fonts, imagery, motion, pages), not unilaterally. `sources.md` font pool set to the **full Google Fonts library**.
  - `presentation-template.html`: Lavder-branded 16:9 deck (7 slides) framing the prototype. Renders to PDF via Chrome headless. `reference-corporate-home.png` is the embedded home screenshot.

---

## [0.2.0] - 2026-05-28

### Added: Documents section

- **`documents/`**: new top-level folder for branded institutional documents (preventivi, proposte, contracts, reports).
- **`documents/README.md`**: overview, PDF render command, subfolder index.
- **`documents/preventivi/`**: branded quote/proposal templates and conventions:
  - `README.md`: full guide: document structure (11 sections), voice, Italian conventions (IVA esente, colons not em-dashes, parens, `+` prefix), standard CYA clauses (garanzie, esclusioni, SAL 30/40/30, proprietà), Lavder Polyglot upsell, white-label conventions, pricing rounding, Chrome-headless PDF rendering, sed-pitfall gotcha.
  - `preventivo-template.html`: sanitized reference template with `[placeholders]`. Self-contained: tokens, fonts (relative `../../assets/fonts/`), cover, sections, totals card, garanzie/esclusioni, SAL.

---

## [0.1.0] - 2026-04-22

### Added: Initial release

- **Brand docs** (`brand/`): 9 markdown files covering company, voice, logo, color, typography, spacing, iconography, imagery, motion.
- **Design tokens** (`tokens/`):
  - `tokens.json`: W3C DTCG single source of truth.
  - `css/variables.css`: CSS custom properties with light/dark modes.
  - `css/fonts.css`: `@font-face` for TWK Lausanne + Inter.
  - `scss/_tokens.scss`: SCSS mirror.
  - `tailwind.preset.js`: Tailwind v3 preset.
- **Assets** (`assets/`):
  - LVDR monogram: SVG (black + white) + 7 PNG variants.
  - Fonts: TWK Lausanne (100–1000, TTF + WOFF + WOFF2) and Inter (variable + static).
  - 7 color badges (orange, white, blue, cyan, black, green, purple).
- **Components** (`components/`): buttons, cards, forms, navigation, + integrated preview page. Shared `_components.css`.
- **Claude Design package** (`claude-design/`): consolidated brand guide + visual swatches of palette, type, components, ready for upload.
- **`SKILL.md`**: Claude Code skill manifest.
- **`README.md`**, **`LICENSE`**, **`.gitignore`**.

### Canonical values locked
- `color.ink` = `#111113` (near-black, not `#000000`)
- `color.brand` = `#F87016`
- `color.brand-accent` = `#FCA400`
- Heading face: TWK Lausanne · Body face: Inter
