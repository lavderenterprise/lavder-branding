# Color

The Lavder palette is intentionally narrow. Three brand colors do the work. Neutrals carry the system. Semantic colors speak only when they must.

## Brand palette

| Token                | Hex       | Role                                                              |
|----------------------|-----------|-------------------------------------------------------------------|
| `color.ink`          | `#111113` | Primary. Dominates the system. Text, UI, dark surfaces.          |
| `color.surface`      | `#FFFFFF` | Light surface. Paired with ink.                                  |
| `color.brand`        | `#F87016` | The Lavder orange. CTA, active, link, single accent per screen.  |
| `color.brand-accent` | `#FCA400` | Warmer orange. Gradients, highlights, hover with `brand`.        |
| `color.brand-dark`   | `#D05A0E` | Pressed / active state for interactive elements.                 |
| `color.ink-pure`     | `#000000` | Absolute black. Print, high-contrast borders, icons on white.    |

### Usage rule

> **One screen, one orange.** The brand color is loud enough that two instances compete. If a page has a primary CTA in `brand`, do not use `brand` again on the same fold for a non-CTA element.

## Neutrals

| Token               | Hex       |
|---------------------|-----------|
| `color.neutral.50`  | `#FAFAFA` |
| `color.neutral.100` | `#F4F4F5` |
| `color.neutral.200` | `#E4E4E7` |
| `color.neutral.300` | `#D4D4D8` |
| `color.neutral.400` | `#A1A1AA` |
| `color.neutral.500` | `#71717A` |
| `color.neutral.600` | `#52525B` |
| `color.neutral.700` | `#3F3F46` |
| `color.neutral.800` | `#27272A` |
| `color.neutral.900` | `#18181B` |

Neutrals are cool-gray (Zinc family). Never warm-gray — the warmth belongs to the orange.

## Semantic colors

Use only for their declared meaning. Never decoratively.

| Token     | Hex       | Meaning                                             |
|-----------|-----------|-----------------------------------------------------|
| `success` | `#22C55E` | Confirmed action, positive state.                   |
| `warning` | `#EAB308` | Recoverable issue, user attention needed.           |
| `error`   | `#EF4444` | Failed action, destructive confirmation.            |
| `info`    | `#3B82F6` | Neutral notification, tip.                          |

## Gradients

Two approved gradients:

- **Brand gradient** — `linear-gradient(135deg, #F87016 0%, #FCA400 100%)`.
  Use on: hero backgrounds, large CTA surfaces, illustrations. Never on text.
- **Ink gradient** — `linear-gradient(180deg, #111113 0%, #000000 100%)`.
  Use on: dark-mode heroes, section dividers, cards with depth.

No other gradients are approved. No rainbow, no brand-to-neutral, no three-stop.

## Accessibility contrast

All brand-approved text/background pairings meet **WCAG 2.2 AA** minimum. Key combinations verified at 4.5:1 for body text and 3:1 for large text (≥18 pt or ≥14 pt bold).

| Text          | Background    | Ratio   | Result         |
|---------------|---------------|---------|----------------|
| `ink`         | `surface`     | 19.6:1  | ✅ AAA          |
| `ink`         | `neutral-100` | 18.3:1  | ✅ AAA          |
| `neutral-600` | `surface`     | 7.5:1   | ✅ AAA          |
| `brand`       | `surface`     | 3.0:1   | ⚠️ large text only |
| `surface`     | `brand`       | 3.0:1   | ⚠️ large text only; prefer `ink` on `brand` |
| `ink`         | `brand`       | 6.5:1   | ✅ AA body      |
| `surface`     | `ink`         | 19.6:1  | ✅ AAA          |

### Rule

> Do not place body text in `brand` on white. Use `ink` on white, or `ink` on `brand` for a button. If you must use orange text, size it ≥ 24 px and weight ≥ 600.

## Backgrounds & elevation

Layered surfaces in light mode go: `surface` → `neutral-50` → `neutral-100`. In dark mode: `ink` → `neutral-900` → `neutral-800`.

Elevation is communicated primarily through shadow, not color. See `05-spacing-layout.md` → Shadows.

## Don'ts

- Don't introduce new brand colors without adding them to `tokens.json`.
- Don't tint the orange toward red or yellow outside the declared `brand-accent` and `brand-dark`.
- Don't use `ink-pure` (`#000000`) as the default text color. Use `ink` (`#111113`).
- Don't lower contrast for aesthetic reasons. Any text below 4.5:1 must be justified in a PR.
