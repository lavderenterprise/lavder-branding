# Iconography

Icons are structural. They clarify, never decorate.

## Style

- **Line style.** Stroke `1.5 px` at the 24 px size. Rounded caps and joins.
- **Geometric.** Icons are built on a 24 × 24 grid with 2 px padding. Meaningful shapes live in a 20 × 20 area.
- **Consistent metaphors.** We don't mix: a plus icon is always the same plus icon everywhere in the product.
- **No fill by default.** Fill is reserved for the "active" / "selected" state.

## Recommended set

**Lucide** (lucide.dev) — MIT-licensed, ~1400 icons, the whole catalog follows our style rules.
Install: `npm install lucide-react` / `lucide` / `lucide-static`.

When Lucide does not cover a specific symbol, custom icons must:
- Match Lucide grid (24 × 24) and stroke (1.5 px).
- Live in `assets/icons/` with kebab-case filenames.
- Ship as inline SVG, never PNG.

## Sizing

| Use case                    | Size  |
|-----------------------------|-------|
| Inline with body text       | 1em (scales with text) |
| Button / input prefix       | 16 px |
| Navigation, tabs            | 20 px |
| Feature card, list item     | 24 px |
| Hero illustration           | 32–48 px |

## Color

Icons inherit `currentColor` by default — tint with CSS.

| Context                    | Color                     |
|----------------------------|---------------------------|
| Default                    | `color.text` (ink)        |
| Muted / secondary           | `color.neutral.500`       |
| Active / selected           | `color.brand`             |
| Success / warning / error   | Corresponding semantic    |
| On dark surface             | `color.surface`           |

## Don'ts

- Don't mix icon sets (Lucide + Material + Feather in the same surface). Pick one family per product.
- Don't apply gradients or shadows to icons.
- Don't tint an icon with an off-palette color.
- Don't rotate icons to invent new meaning (a rotated arrow is still the same arrow, but the metaphor breaks).
- Don't place an icon without a purpose. If removing it doesn't hurt comprehension, it was decoration.

## Brand marks vs icons

The LVDR monogram is **not** an icon. It is the brand mark. It does not take the icon rules — see `02-logo.md`.
