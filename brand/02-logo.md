# Logo

## The mark

The Lavder mark is the **LVDR monogram** — a single stroke derived from a stylized L. It works as mark, favicon, app icon, social avatar, and watermark.

Lavder Enterprise uses the same mark. There is no separate *Enterprise* lockup.

### Files

| File                                              | When to use                                 |
|---------------------------------------------------|---------------------------------------------|
| `assets/logos/lavder/svg/lvdr-monogram-black.svg` | Light surfaces (web, print)                 |
| `assets/logos/lavder/svg/lvdr-monogram-white.svg` | Dark surfaces (web dark mode, photography)  |
| `assets/logos/lavder/png/lvdr-icon-512.png`       | App icon, avatars, favicon source           |
| `assets/logos/lavder/png/lvdr-black-on-white.png` | Marketing images, templates                 |
| `assets/logos/lavder/png/lvdr-white-on-black.png` | Marketing images, templates                 |

Always prefer SVG. PNG only when the platform strictly requires a raster (social avatar, app icon).

## Clear space

Minimum clear space around the mark equals the **height of the stem** of the monogram (call it `x`). No text, image, or UI chrome within that box.

```
          x
      ┌───────┐
   x  │  ▟▙   │  x
      │  ▐▌   │
      │       │
      └───────┘
          x
```

## Minimum size

- Digital: **24 px** at 1× (favicon context — 16 px is acceptable but avoided).
- Print: **10 mm** on the short axis.

Below these sizes, the mark loses integrity. Use the 512 px icon PNG as the rasterization source for favicons.

## Wordmark

When a name is required alongside the mark (business card, footer, letterhead), typeset as:

```
LAVDER
```

in **TWK Lausanne 700 (Bold)**, all caps, tracking `0.08em` (wider), baseline-aligned with the centerline of the monogram. A 2× x-height gap between monogram and first letter.

For legal surfaces, extend to:

```
LAVDER ENTERPRISE SRL
```

same settings, single line.

## Lockups

Two approved lockups only:

1. **Horizontal** — monogram left, wordmark right. Default for headers, signatures, footers.
2. **Stacked** — monogram top, wordmark centered below. Use when horizontal does not fit (business cards, square social posts).

Any other arrangement (diagonal, rotated, curved wordmark, emblem treatments) is not approved.

## Color pairings

- **Monogram black** on `#FFFFFF` or `neutral-50`.
- **Monogram white** on `#111113`, `ink-pure`, or photography with sufficient contrast.
- Monogram in **brand orange (#F87016)** is allowed only for seasonal/promotional moments and never as the permanent brand mark.
- Monogram outlined (stroke only, no fill) — never.

## Don'ts

- Don't rotate, skew, or 3D-extrude the mark.
- Don't add drop shadows, glows, or gradients to the mark. (Brand gradient is for surfaces, never applied to the monogram.)
- Don't recolor the mark outside the pairings above.
- Don't reconstruct the mark from scratch — always use the SVG source.
- Don't place the mark on busy photography without a solid backing shape.
- Don't pair the mark with any other logo at an equal weight unless it's a formal partnership (then balance via clear space, not scale).

## Sub-brand marks

Sub-brands of Lavder Enterprise may have their own mark (*Dolce* has its own). The rules above apply to the Lavder mark only.

When a sub-brand appears next to the Lavder mark (endorsement), the sub-brand goes primary, Lavder mark goes secondary at ~60% visual weight, separated by a vertical rule in `neutral-200`.
