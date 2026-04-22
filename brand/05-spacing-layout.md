# Spacing & Layout

The system is built on a **4 px base unit** (`0.25rem`). Every spacing value in the scale is a multiple of that unit.

## Scale

| Token     | Value    | px   | Typical use                          |
|-----------|----------|------|--------------------------------------|
| `space.1` | 0.25rem  | 4    | Icon-to-label, tag internal padding  |
| `space.2` | 0.5rem   | 8    | Inline gaps, input border            |
| `space.3` | 0.75rem  | 12   | Button internal padding (vertical)   |
| `space.4` | 1rem     | 16   | Body vertical rhythm, card padding   |
| `space.5` | 1.25rem  | 20   | Button internal padding (horizontal) |
| `space.6` | 1.5rem   | 24   | Section internal gap                 |
| `space.8` | 2rem     | 32   | Between cards in a grid              |
| `space.10`| 2.5rem   | 40   | Between sub-sections                 |
| `space.12`| 3rem     | 48   | Between sections (mobile)            |
| `space.16`| 4rem     | 64   | Between sections (tablet)            |
| `space.20`| 5rem     | 80   | Between sections (desktop)           |
| `space.24`| 6rem     | 96   | Hero margins                         |
| `space.32`| 8rem     | 128  | Full-bleed section padding           |

### Rule of thumb

> Use only scale values. `16px`, `23px`, `17px` are not on the scale. If a designer asks for `20px`, check if the real need is `space.4` (16) or `space.5` (20) — never arbitrary.

## Grid & columns

Standard grid: **12 columns**, gutter `space.6` (24 px) desktop / `space.4` (16 px) mobile.

Breakpoints:

| Name | Min width | Columns | Gutter      |
|------|-----------|---------|-------------|
| `sm` | 640 px    | 4       | 16 px       |
| `md` | 768 px    | 8       | 16 px       |
| `lg` | 1024 px   | 12      | 24 px       |
| `xl` | 1280 px   | 12      | 24 px       |
| `2xl`| 1536 px   | 12      | 32 px       |

## Containers

| Token              | Width    | Use                          |
|--------------------|----------|------------------------------|
| `container.sm`     | 640 px   | Narrow single-column         |
| `container.md`     | 768 px   | Long-form article            |
| `container.lg`     | 1024 px  | Default marketing section    |
| `container.xl`     | 1200 px  | Default site container       |
| `container.2xl`    | 1440 px  | Wide marketing hero          |
| `reading-width`    | 72ch     | Pure prose pages (brand book, legal, blog) |

The default site container is `1200px`. Anything wider is an editorial decision and needs a reason.

## Radius

| Token          | Value   | Use                                       |
|----------------|---------|-------------------------------------------|
| `radius.none`  | 0       | Editorial, severe surfaces                |
| `radius.sm`    | 4 px    | Tags, inputs, small controls              |
| `radius.md`    | 8 px    | **Default.** Buttons, inputs, cards.      |
| `radius.lg`    | 12 px   | Large cards, modals                       |
| `radius.xl`    | 16 px   | Hero surfaces, feature cards              |
| `radius.2xl`   | 24 px   | Oversized marketing surfaces              |
| `radius.full`  | 9999 px | Pills, avatars, circular buttons          |

Prefer `radius.md` (8 px). The brand leans crisp, not pillowy.

## Shadows (elevation)

Elevation in Lavder is subtle. We prefer border contrast over heavy drop shadows.

| Token         | Use                                       |
|---------------|-------------------------------------------|
| `shadow.xs`   | Very slight lift (chip, flat card)       |
| `shadow.sm`   | Default card, input focus                |
| `shadow.md`   | Hover elevation, popovers                |
| `shadow.lg`   | Dropdowns, floating menus                |
| `shadow.xl`   | Modal, major overlay                     |
| `shadow.2xl`  | Deep focus (lightbox, story mode)        |
| `shadow.brand-glow` | Focus ring, major CTA halo — orange|

All shadow values are tuned off `rgba(17, 17, 19, X)` to match the ink tone.

## Layout principles

1. **Breath over detail.** Whitespace is the main layout tool. If in doubt, remove something.
2. **One hierarchy per screen.** One h1. One primary CTA. One orange. One focal image. Secondary elements support.
3. **Edge-to-edge or contained — not both.** A section is either full-bleed (background extends to viewport edges, content in container) or boxed (border/shadow, margin on all sides). Don't half-bleed.
4. **Asymmetry over grids.** TWK handles off-center layouts well. Use 7/5 column splits, not 6/6, when content allows.
5. **Alignment is non-negotiable.** Everything aligns to something. Baselines to baselines. Edges to edges. Never "eyeballed near-alignment".

## Don'ts

- Don't introduce off-scale spacing values.
- Don't nest more than two radius sizes on a single surface (e.g., don't wrap an 8 px card inside a 16 px card inside a 24 px modal).
- Don't use shadows darker than `shadow.2xl`. We are not a 2014 material-design product.
- **Buttons are squared, never pilled.** Use `radius.md` (8 px). `radius.full` is for tags, badges, avatars, and small icon-badges — never for CTAs, form controls, or anything a user would recognize as a button.
- **No vertical decorative text** in layouts (no `writing-mode: vertical-rl`, no 90°-rotated labels running up the side of a hero). If information matters enough to print, it deserves a horizontal setting. If it doesn't, it's ornament — remove it.
- **No floating legend boxes** (small off-to-the-side captions like *"01/∞"* or *"A holding of brands"* rotating at the edge of a hero). They read as designer-thinking-aloud, not brand presence.
