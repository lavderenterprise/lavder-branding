# Lavder Enterprise — brand guidelines

Single-file consolidated brand book. The authoritative per-section docs live under `brand/`. This file is optimized for Claude Design onboarding and for humans who want one scroll.

---

## 1. Company

**Lavder Enterprise Srl** is a holding company. Italy-founded, Bucharest-headquartered. It owns:

- **Lavder** — Web & Marketing Agency. Founded 2019. Registered trademark. [lavder.com](https://lavder.com). 100+ clients/agencies/partners served.
- **Dolce** — Custom-cake consumer app.
- *(and future sub-brands — one per year target.)*

Positioning: **corporate · authoritative · modern**.
Core promise: *We build brands, products and systems that hold up at scale — technically, visually, commercially.*
Relationship to client: **partner di fiducia** — *trusted partner*, not vendor.
Tagline: *Tutti lo fanno. **Noi lo facciamo** bene.* (emphasis on middle clause via italic).
Languages: EN (primary), IT, RO.

**The Lavder mark** (LVDR monogram) is shared across Enterprise and Lavder. "Enterprise" appears only in legal/institutional contexts.

---

## 2. Voice & tone

**Voice**: senior operator — direct, confident, warm without performing.

**Tone** shifts by context:
- Legal/contract → formal, serious
- Sales → formal-ish, serious
- Marketing → plain, mostly serious
- Product UI → plain, neutral
- Empty/error states → plain, slight warmth

**Do**: verb-first sentences · concrete numbers · active voice · cut every non-earning word.

**Don't**: *synergy · solutions · leverage · game-changer · disruptor · 10x · we're excited to announce · em-dash padding · emoji on formal surfaces*.

**Signature verbs**: *Costruiamo · Trasformiamo · Su misura* (build / transform / bespoke).

**Approved IT CTA labels**: *Richiedi un preventivo · Scopri i servizi · Stima il costo del tuo progetto · Richiedi una consulenza · Lavora con noi · Scopri il programma di partnership*.

---

## 3. Logo

The **LVDR monogram** is the single mark. Shared by Lavder and Lavder Enterprise.

**Clear space**: stem-height `x` on all sides.
**Minimum size**: 24 px digital / 10 mm print.
**Pairings**:
- Black monogram on white/`neutral-50`
- White monogram on `ink`, `ink-pure`, or photography

**Lockups** (two approved only):
1. Horizontal — monogram left, wordmark `LAVDER` right (TWK 700, tracking 0.08em)
2. Stacked — monogram top, wordmark below

**Don'ts**: rotate · skew · 3D · drop-shadow · outline-only · recolor outside pairings.

**Files**: `assets/logos/lavder/svg/lvdr-monogram-{black,white}.svg`

---

## 4. Color

### Brand palette

| Token                | Hex       | Role                                        |
|----------------------|-----------|---------------------------------------------|
| `color.ink`          | `#111113` | Primary. Text, dark surfaces. **Never #000 for text.** |
| `color.surface`      | `#FFFFFF` | Light surface.                              |
| `color.brand`        | `#F87016` | Lavder orange. CTA, accent.                 |
| `color.brand-accent` | `#FCA400` | Warmer orange. Gradients, hover.            |
| `color.brand-dark`   | `#D05A0E` | Pressed/active state.                       |
| `color.ink-pure`     | `#000000` | Absolute black. Print, high-contrast only.  |

**Rule**: *one screen, one orange.*

### Neutrals (Zinc)

`#FAFAFA · #F4F4F5 · #E4E4E7 · #D4D4D8 · #A1A1AA · #71717A · #52525B · #3F3F46 · #27272A · #18181B`

Neutrals are cool-gray. Never warm.

### Semantic

`success: #22C55E · warning: #EAB308 · error: #EF4444 · info: #3B82F6`

### Gradients (only two approved)

- **Brand**: `linear-gradient(135deg, #F87016 0%, #FCA400 100%)`
- **Ink**: `linear-gradient(180deg, #111113 0%, #000000 100%)`

### Accessibility

- `ink` on `surface` → 19.6:1 ✅ AAA
- `brand` on `surface` → 3.0:1 ⚠️ large text only
- `ink` on `brand` → 6.5:1 ✅ AA body

---

## 5. Typography

**Two typefaces**:

- **TWK Lausanne** (Dinamo, licensed) — headings, display, hero, stat numbers
- **Inter** (OFL, free) — body, UI, labels, tables

**Production weights**:
- TWK: 300 (display-light), 500 (h3/h4), 600 (h2), 700 (h1/display), 800 (stats)
- Inter: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Scale** (1.25 major-third):

`11 · 12 · 14 · 16 · 18 · 20 · 24 · 30 · 36 · 48 · 60 · 72 · 96 · fluid display`

**Tracking** (TWK at display): `-0.02` → `-0.04em` as size increases.

**Rules**:
- Body copy → Inter, always.
- UI controls → Inter, always.
- All-caps → max 4 words (eyebrows, labels).
- Min font size: 12 px.

---

## 6. Spacing & layout

**Base unit**: 4 px (`0.25rem`).

**Scale**: `1 · 2 · 3 · 4 · 5 · 6 · 8 · 10 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64` (× 0.25rem).

**Grid**: 12 columns desktop · 8 tablet · 4 mobile. Gutter 24 px desktop / 16 px mobile.

**Containers**: 640 / 768 / 1024 / **1200 (default)** / 1440 px.

**Radius**:
- Default: **8 px** (`radius.md`)
- Range: 0 · 2 · 4 · **8** · 12 · 16 · 24 · 32 · 9999px (pill)

**Shadows** (all ink-toned, `rgba(17,17,19,X)`):
- `sm` · `md` · `lg` · `xl` · `2xl` · `brand-glow` (orange focus ring)

**Layout rules**:
1. Breath over detail. Whitespace is the tool.
2. One hierarchy per screen (one h1, one primary CTA, one orange).
3. Edge-to-edge *or* contained — never half-bleed.
4. Asymmetry over 6/6 splits when content allows.

---

## 7. Iconography

**Library**: Lucide (MIT, ~1400 icons).
**Style**: line, 1.5 px stroke, 24 × 24 grid, rounded caps.
**Fill**: only for active/selected state.
**Color**: `currentColor` default · brand for active · semantic for status.

Icon sizes: 16 (button prefix) · 20 (nav) · 24 (cards) · 32–48 (hero).

**Don'ts**: mixing icon families · gradients · shadows · rotating to invent meaning.

## 9b. Layout anti-patterns

- **Squared buttons, not pills.** Use `radius.md` (8 px) for every CTA. `radius.full` is for tags, avatars, and icon badges only.
- **No vertical decorative text** (no `writing-mode: vertical-rl`, no 90° rotated labels running up the hero side).
- **No auto-drifting scroll indicators** (no "SCROLL" label bouncing up-down in the hero).
- **No perpetual breathing animations** on fixed ornaments.
- **No floating off-to-the-side captions** ("01/∞", index legends, designer-thinking-aloud micro-labels).

---

## 8. Imagery

**Principles**:
- Real over rendered — photos of real people, spaces, products.
- High contrast, low saturation.
- One subject per frame. 60%+ negative space is welcome.
- Warm highlights, cool shadows (color grade).

**Screenshots**: device-free · `shadow.xl` · `radius.lg` · 1 px `neutral-200` border on white.

**Don'ts**: AI-generated people · Instagram filters · white-text-on-photo without 30% ink overlay · LVDR watermark baked into photos.

---

## 9. Motion

**Durations**: `instant 0 · fast 150 · base 240 · slow 400 · slower 640ms`.

**Easings**:
- `out` (default entry) — `cubic-bezier(0, 0, 0.2, 1)`
- `in-out` (position) — `cubic-bezier(0.4, 0, 0.2, 1)`
- `emphasized` (brand) — `cubic-bezier(0.2, 0, 0, 1)`

**Default UI transition**: `240ms ease-out`.

**Focus ring**: always visible, brand-glow shadow. Never suppress `:focus-visible`.

**Reduced motion**: ship `@media (prefers-reduced-motion: reduce)` override at the top of global CSS.

**Don'ts**: bounce as default · parallax on body copy · animate color on large surfaces · autoplay sequences of 4+ animations.

---

## 10. Components (reference)

### Button

- Radius: 8 px (`radius.md`)
- Height: 44 px default · 36 px sm · 56 px lg
- Padding: 12 × 20 px default
- Transition: 150 ms ease-out
- Focus: `shadow.brand-glow`
- Variants: primary (brand bg, ink fg) · secondary (outline) · ghost

### Card

- Radius: 12 px (`radius.lg`)
- Padding: 24 px
- Border: 1 px `neutral-200` on white · none on ink
- Shadow: `sm` default → `md` hover
- Hover: `translateY(-2px)`

### Input

- Radius: 8 px
- Padding: 12 × 16 px
- Border: 1 px `neutral-300`
- Focus: border → `brand`, + `shadow.brand-glow`

### Navigation

- Height: 72 px
- Brand: TWK 700 uppercase, tracking 0.02em
- Links: Inter 500, 14 px

---

## 11. File conventions

| Type | Format            |
|------|-------------------|
| Logo | SVG (production), PNG (raster fallback) |
| Icons | SVG inline       |
| Photos | WebP (primary), JPG (fallback) |
| Illustrations | SVG     |
| Fonts | WOFF2 + WOFF     |

Names: `kebab-case-descriptive.ext`.

---

## 12. Token source of truth

All values above originate from [`tokens/tokens.json`](../tokens/tokens.json) (W3C DTCG). Derived files (`variables.css`, `_tokens.scss`, `tailwind.preset.js`) must stay in sync — never edit them directly.
