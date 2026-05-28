# Lavder Branding

Brand system for **Lavder Enterprise Srl** and every brand it owns — Lavder (agency), Dolce (cake app), and future sub-brands.

One source of truth for colors, typography, logo, voice, motion, and component patterns. Ingest it into Claude Design for AI-assisted production, install it as a Claude Code skill, or compile the tokens into your platform of choice.

---

## What's here

| Folder          | What it contains                                                                        |
|-----------------|------------------------------------------------------------------------------------------|
| [`brand/`](./brand)               | 9 markdown docs — the brand book. Start here.                       |
| [`tokens/`](./tokens)             | Machine-readable tokens. DTCG JSON + CSS variables + SCSS + Tailwind preset. |
| [`assets/`](./assets)             | Logos, fonts (TWK Lausanne + Inter), badges, favicons.              |
| [`components/`](./components)     | HTML+CSS reference for buttons, cards, forms, navigation, preview.  |
| [`documents/`](./documents)       | Branded document templates — preventivi, proposte. Render via Chrome headless to PDF. |
| [`claude-design/`](./claude-design) | Curated package for uploading to [Claude Design](https://claude.com/design). |
| [`SKILL.md`](./SKILL.md)          | Claude Code skill manifest — use as an invocable skill.             |
| [`CHANGELOG.md`](./CHANGELOG.md)  | Release log.                                                         |

## Canonical values (locked)

- Ink: **`#111113`** (near-black — never `#000000` for default text)
- Surface: **`#FFFFFF`**
- Brand orange: **`#F87016`**  ·  accent: **`#FCA400`**  ·  dark: **`#D05A0E`**
- Heading face: **TWK Lausanne** (Dinamo, licensed)
- Body face: **Inter** (OFL, free)
- Base unit: **4 px**  ·  Default radius: **8 px**  ·  Default container: **1200 px**

The single source of truth is [`tokens/tokens.json`](./tokens/tokens.json). Every other file (`variables.css`, `_tokens.scss`, `tailwind.preset.js`) is derived from it.

---

## Quick start

### Web project (vanilla CSS)

```html
<link rel="stylesheet" href="tokens/css/fonts.css" />
<link rel="stylesheet" href="tokens/css/variables.css" />
```

Then use any `--lvdr-*` custom property in your styles.

### Tailwind project

```js
// tailwind.config.js
const lvdr = require('./lavder-branding/tokens/tailwind.preset');
module.exports = {
  presets: [lvdr],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
};
```

### SCSS project

```scss
@use "lavder-branding/tokens/scss/tokens" as *;

.card { padding: lvdr-space(6); border-radius: lvdr-radius(lg); }
```

### WordPress (Lavder Theme)

The [Lavder Theme](https://github.com/lavderenterprise/lavder-theme) consumes these tokens via `theme.json`. Align any drift with the values here — this repo wins.

---

## Upload to Claude Design

See [`claude-design/README.md`](./claude-design/README.md) for the ordered upload list and verification checklist.

## Use as a Claude Code skill

Copy this repo into `~/.claude/skills/lavder-brand/` (or symlink). The `SKILL.md` manifest will be auto-loaded. Invoke with `/lavder-brand` or by describing a branded task.

---

## Contribute

1. Edit `tokens/tokens.json` first — it's the source of truth.
2. Regenerate derived files (CSS / SCSS / Tailwind) so they match.
3. If brand docs in `brand/` change, also update the consolidated `claude-design/brand-guidelines.md`.
4. Run the preview pages locally:

   ```sh
   cd lavder-branding && python3 -m http.server 8080
   open http://localhost:8080/components/preview.html
   ```

5. Commit with a conventional message. Push to `main`.

---

## License

Proprietary — see [LICENSE](./LICENSE). Third-party assets (Inter, Lucide) retain their open-source licenses. TWK Lausanne requires a separate Dinamo license for deployment.

© Lavder Enterprise Srl. Bucharest.
