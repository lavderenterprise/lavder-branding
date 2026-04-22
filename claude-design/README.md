# Claude Design — upload package

This folder contains a curated subset of the Lavder brand system, shaped for **Claude Design** onboarding. Upload these files (plus the `assets/` + `tokens/` folders) when creating the Lavder Enterprise organization design system.

## What Claude Design extracts

From the [documentation](https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design), Claude analyzes the uploaded assets and automatically derives:

- **Color palette** — primary, secondary, accent
- **Typography** — font families, sizes, weights
- **Components** — buttons, cards, navigation, reusable UI patterns
- **Layout patterns** — spacing, grid, page structures

## What to upload

Upload the following paths (in this order of priority):

1. **`claude-design/brand-guidelines.md`** — single-file consolidated brand book. Primary source.
2. **`claude-design/color-palette.html`** — visual swatch of every token with hex.
3. **`claude-design/typography-specimen.html`** — TWK Lausanne + Inter in situ.
4. **`claude-design/component-library.html`** — buttons, cards, forms, nav in one page.
5. **`tokens/tokens.json`** — machine-readable single source of truth.
6. **`tokens/css/variables.css`** — CSS custom properties.
7. **`assets/logos/lavder-enterprise/svg/lvdr-monogram-black.svg`** — mark.
8. **`assets/logos/lavder-enterprise/svg/lvdr-monogram-white.svg`** — inverse mark.

Together these cover: brand rules, visual palette, type, components, raw tokens, marks.

## After upload

Claude generates the organization design system. Verify:

- ✅ Primary color resolves to `#F87016` (orange).
- ✅ Ink resolves to `#111113` (not `#000000` or `#171717`).
- ✅ Headings bind to **TWK Lausanne**, body to **Inter**.
- ✅ Button radius = `8px`.
- ✅ Default spacing scale recognized (4 px base).

If any of the above is wrong, re-upload `tokens.json` + `brand-guidelines.md` and specify the correction in chat.

## Updating

When tokens change:

1. Edit `tokens/tokens.json` (source of truth).
2. Regenerate `variables.css`, `_tokens.scss`, `tailwind.preset.js` from tokens.json (scripted — see repo root `README.md`).
3. Re-upload to Claude Design, or use the "Refresh design system" action in the org settings.

Never edit derived files (`variables.css` etc.) without updating `tokens.json` first.
