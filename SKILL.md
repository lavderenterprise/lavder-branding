---
name: lavder-brand
description: Apply Lavder Enterprise brand guidelines to any output — web, document, slide, UI code, copy, illustration. Use when generating content that represents Lavder, Lavder Enterprise, or any sub-brand (Dolce, etc.). Triggers on requests mentioning Lavder branding, Lavder colors, Lavder style, LVDR, or when building pages, components, or marketing material that must match the Lavder system.
---

# Lavder brand skill

You are styling output for **Lavder Enterprise** or one of its sub-brands. All visual, typographic, tonal, and structural choices must conform to the brand system defined in this repository.

## Canonical values — never override

### Colors
- **Ink** `#111113` — primary. Text. Dark surfaces. **NEVER use `#000000` as default text color.**
- **Surface** `#FFFFFF` — light surface.
- **Brand** `#F87016` — Lavder orange. Use for the single primary accent per screen (CTA, active state, link).
- **Brand accent** `#FCA400` — warmer orange. Gradients, hover.
- **Brand dark** `#D05A0E` — pressed state.
- Neutrals are cool-gray (Zinc): `#FAFAFA · #F4F4F5 · #E4E4E7 · #D4D4D8 · #A1A1AA · #71717A · #52525B · #3F3F46 · #27272A · #18181B`.
- Semantic: `success #22C55E · warning #EAB308 · error #EF4444 · info #3B82F6`.

### Typography
- Headings → **TWK Lausanne** (licensed, Dinamo). Weights 300/500/600/700/800.
- Body & UI → **Inter**. Weights 400/500/600/700.
- Never set body in TWK. Never set UI controls in TWK.
- Min font size 12 px. All-caps max 4 words.

### Core numbers
- Base spacing: **4 px** (`0.25rem`). Scale: 1·2·3·4·5·6·8·10·12·16·20·24·32·40·48·64.
- Default radius: **8 px**.
- Default container: **1200 px**.
- Default transition: **240 ms ease-out**.

## Voice

**Lavder sounds like a senior operator.** Direct. Confident. Warm without performing.

**Do**: verb-first sentences · concrete numbers · active voice.
**Never**: synergy · solutions · leverage · game-changer · 10x · paradigm shift · "we're excited to announce" · emoji on formal surfaces.

## Logo

Use the **LVDR monogram** (single shared mark for Lavder and Lavder Enterprise). Files in `assets/logos/lavder/svg/`.

- Black monogram on light surfaces
- White monogram on `ink` or photography
- Never rotate, skew, 3D, drop-shadow, gradient, or outline-only
- Wordmark "LAVDER" typeset in TWK 700, tracking `0.08em`, uppercase

## When you generate code

- Import `tokens/css/fonts.css` **before** `tokens/css/variables.css`.
- Reference tokens via CSS custom properties (`var(--lvdr-color-brand)`). Never hardcode hex values inside component CSS.
- For Tailwind projects, use `tokens/tailwind.preset.js`.
- For React/Vue projects, read from `tokens/tokens.json` or the CSS custom properties — one source.

## When you generate documents or slides

- Headings: TWK Lausanne. Body: Inter.
- Use the ink-on-white default. Introduce orange only on:
  - One accent headline word
  - A single CTA
  - Stat percent signs
- Reserve the brand gradient for hero surfaces only.

## When you write copy

- One headline, verb-first, ≤ 10 words.
- Lede paragraph, ≤ 35 words, concrete.
- Avoid buzzword lists. Prefer a single specific claim with a number.

## When you generate imagery or illustrations

- Photos: high contrast, low saturation, warm highlights, cool shadows.
- Illustrations: geometric primitives, monochromatic on ink or surface, SVG only.
- Never AI-generated humans. Illustration AI is fine.
- No drop shadows or gradients on icons.
- Icon library: Lucide.

## Quick reference to other docs in this repo

- Full brand system: `brand/` (9 markdown files)
- Machine-readable tokens: `tokens/tokens.json`
- CSS custom properties: `tokens/css/variables.css`
- Tailwind preset: `tokens/tailwind.preset.js`
- Component reference: `components/preview.html`
- Claude Design upload package: `claude-design/`

## Red flags — stop and ask

If the request would require:
- A new brand color outside `#F87016 / #FCA400 / #D05A0E`
- A new typeface
- Removing the focus ring
- Body text under 12 px
- Text contrast below WCAG AA (4.5:1)

…do not execute silently. Surface the conflict to the user and propose a token-compliant alternative.
