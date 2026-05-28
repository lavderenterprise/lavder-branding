# Changelog

All notable changes to the Lavder Enterprise brand system are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/), versioning follows [SemVer](https://semver.org/).

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
