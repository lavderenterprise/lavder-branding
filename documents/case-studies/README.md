# Case studies

Client case-study decks for Lavder Enterprise: a narrative, journalistic walkthrough of a project we designed and built. Landscape 16:9, rendered to PDF via Chrome headless, fonts embedded from `/assets/fonts`.

A case study is **not** a sales deck. It tells the story of one project — client, needs, solution, engineering, impact — with concrete, specific content. The selling is done by the person presenting it; the deck stays a credible, branded artifact. **Do not add pitch slides** ("why choose us", "request a consultation", pricing, "we want to be your partner"). End on impact + a sober "Grazie".

## Files

| File | Purpose |
|---|---|
| [`README.md`](./README.md) | This playbook: structure, design system, content, conventions |
| [`case-study-fabbri-reference.html`](./case-study-fabbri-reference.html) | The Fabbri Arredamenti deck — the canonical worked example. Copy it, adapt content + assets + client accent, re-render |
| [`screenshots.md`](./screenshots.md) | How to produce clean product screenshots (run the app, seed realistic demo data, capture light + dark) |
| [`capture-screenshots.mjs`](./capture-screenshots.mjs) | Puppeteer tool that logs in and captures the screenshots |

## Output & naming

- Source: `~/Downloads/lavder-casestudy-<client>-YYYY-MM-DD.html`
- Deliverable: `~/Downloads/lavder-casestudy-<client>-YYYY-MM-DD.pdf`
- The reference renders on Giacomo's machine as-is (absolute `file://` paths for fonts + screenshots).

## Format

- **16:9 widescreen**, 1280×720 px per slide. `@page { size: 13.333in 7.5in; margin: 0 }`, each `.s` is exactly `1280px × 720px`, `overflow:hidden; page-break-after:always`.
- Render with Chrome headless (see [Rendering](#rendering-to-pdf)).
- ~22-26 slides. The Fabbri reference is 24.

## Narrative structure

Four numbered chapters plus a conclusion. Every chapter opens with a full-bleed **divider** carrying a giant ghost number; content slides follow.

```
Cover
─ 01 · Il cliente        chi è, cosa fa, perché un gestionale di mercato non basta
─ 02 · Le esigenze       il processo reale, cosa abbiamo trovato, il brief "parole loro"
─ 03 · La soluzione      il prodotto: overview → mappa moduli → una slide per modulo
─ 04 · Sotto il cofano   stack tecnologico, sicurezza & infrastruttura
Conclusione · L'impatto  i numeri concreti del dopo
Grazie                   chiusura sobria, niente CTA
```

Slide-by-slide blueprint (the Fabbri build):

1. **Cover** — dark. Orange eyebrow (sector), huge headline with **one orange word**, lede naming the client, footer `lavder.com · Lavder Enterprise S.R.L.`
2. **Divider 01 · Il cliente** — dark, ghost `01`. Branded with the client logo (see [Logo](#logo-rules)).
3. **Chi è il cliente** — client chip (real logo + name + "città · dal ANNO"), headline, sector tags, a "MARCHI PARTNER" / context grid.
4. **Numeri che pesano** — big inline numbers about the client (punti vendita, brand, stati ordine, anni di mestiere), each with a colored unit char.
5. **Divider 02 · Le esigenze** — "Quattro settimane in showroom... prima di una riga di codice."
6. **Anatomia di una vendita** — the N-step cycle as a numbered card grid, + a final highlighted "cliente fidelizzato" cell.
7. **Cosa abbiamo trovato** — 3 pain-point cards, vivid and concrete ("lo stato vive su un post-it", "report a fine giornata").
8. **Brief, parole loro** — the requirements in the client's own words, red-diamond bullet list.
9. **Divider 03 · La soluzione** — branded with the client's extended logo + client accent (this chapter is the product).
10. **Il prodotto** — overview: 3 principle mini-cards + a browser-framed screenshot.
11. **Architettura** — "N moduli, M famiglie funzionali": a uniform module map (one 4-col grid, families stacked).
12-18. **Un modulo per slide** — eyebrow `MODULO X`, evocative headline, short body, then bullets / colored status pills / a domain-detail callout, + a browser-framed screenshot (alternate left/right). Cover the real product modules; surface a domain detail competitors miss (for Fabbri: "lo stralcio").
19. **Divider 04 · Sotto il cofano** — "Cinque minuti tecnici."
20. **Stack tecnologico** — 12 tech cards with letter-badges + a "nessun lock-in" line.
21. **Sicurezza & infrastruttura** — 6 cards (deploy, auth, ruoli, HTTPS, backup, aggiornamenti).
22. **Divider Conclusione · L'impatto** — orange.
23. **I numeri dell'impatto** — 3 big numbers with a `before → after` mono annotation under each (`45 min → ~15 min`).
24. **Grazie** — dark, client × Lavder co-brand, real contacts. No CTA.

## Chapter dividers

The signature device. Full-bleed color slide:
- `— 0X / 04` in mono, top-left of the text block.
- Huge title (TWK 800, ~90px) bottom-left, one sentence of lede under it.
- A **giant ghost number** bottom-right, same family at ~440px, barely lighter/darker than the background (`rgba(255,255,255,.05)` on dark, `rgba(14,14,16,.07)` on orange).
- Background rhythm: alternate dark / orange so chapters feel distinct. In Fabbri: client chapters can be client-branded dark (extended logo + client-accent mono), the rest Lavder dark/orange.

## Design system

### Fonts
- Display: **TWK Lausanne** (weights 400-950), embedded via `@font-face` from `/assets/fonts/TWKLausanne/Web/*.woff2`.
- Body: **Inter** variable, from `/assets/fonts/Inter/`.
- Mono: system `ui-monospace` for chapter numbers, URLs, and `before → after` annotations.

### Color — the two-brand system
This is the most important rule. The deck carries **two** brands and keeps them separate:

- **Lavder orange `#F87016`** = the author / narrator. Used on the framing chapters (cover, *Il cliente*, *Le esigenze*, *Sotto il cofano*, *L'impatto*, closing): eyebrows, icons, big-number units, **one emphasized orange word per headline**, dividers' `— 0X / 04`.
- **Client accent** (Fabbri red `#F2222E`) = the client / the product. Used on the **product chapter** (*La soluzione*) and on a few deserving client highlights elsewhere (e.g. the heritage phrase on the client slide). On those slides the eyebrows, headline emphasis, icons and callouts switch to the client color.

Implementation: the product slides get `class="s fab"`; a single rule re-points the CSS variables in that scope so everything inherits the client color with zero per-element edits:
```css
.s.fab { --red:#F2222E; --orange:#F2222E; }
.s.fab .card .ico, .s.fab .callout .ico, .s.fab .ico { background:#FDE7E8; } /* light-red icon chips */
```
Status pills keep their **functional** colors (bozza grey, inviato blue, approvato amber, arrivato green, consegnato red, convertito/chiuso purple) on every slide — they mirror the real app.

Lessons paid for in iterations:
- **Orange to emphasize one word per headline is good** — keep it. Do not make headlines monochrome.
- **Do not flood the deck with one accent.** Orange is Lavder, the client color is the client. Mixing them indiscriminately reads as a bad copy.

### Logo rules
Right logo for the background, always:
- **Lavder monogram**: white on dark/orange, black (`#0E0E10`) on white. Header lockup is monogram + `Lavder`.
- **Client logo**: most clients ship a **compact mark** (square, full color) and an **extended logo** (wordmark). Prefer the extended one. The extended/negative version (white wordmark) only reads on **dark**; the compact color mark reads on **light**.
  - Client slide (white): compact color logo in the chip.
  - Solution divider + closing (dark): extended logo.
  - **Co-brand header** on content slides: top-left `Lavder`, top-right the **client logo only** (no client name text), ~20px tall, compact mark on the light content slides.

Never put a logo where it disappears (black on black, white wordmark on white).

### No gimmicks, no halos
- No decorative colored corners/wedges, no faded background icons. The color blocks + typography + ghost numbers carry the design.
- **No glow/overlay around screenshots.** Browser frames get a thin 1px border and **no drop-shadow**. Screenshots must not float on a mismatched background block.

## Components

| Component | Notes |
|---|---|
| **Browser frame** (`.bw`) | macOS dots + a mono URL pill (`gestionale.client.it / path`), then the screenshot. 1px border, **no shadow**, rounded 13px. The framing device for every screenshot. |
| **Status pills** (`.pill`) | dot + label, functional colors. Mirror the app's real states. |
| **Module map** (`.modgrid` + `.mod`) | one **uniform 4-col grid**, families stacked under red/orange `.fam` headers. All cards equal width — never different widths per family. |
| **Big numbers** (`.bignums`) | TWK 800 ~78px, accent-colored unit char (`%`, `+`, `y`, `s`, `d`). Optional `before → after` mono line under (strikethrough old → bold new). |
| **Info cards** (`.card`) | light-tint icon chip + bold title + grey body; optional diamond-bullet sub-list. |
| **Steps grid** (`.step`) | numbered cards for the sale cycle; last cell highlighted. |
| **Tech cards** (`.tc`) | mono letter-badge + name + sub-label. |
| **Callout** (`.callout`) | bordered tint box for a domain detail; `.callout.hl` adds an icon. |
| **Eyebrow** (`.eye`) | accent dot + uppercase letterspaced label. `.eye.o` = orange variant. |

## Screenshots

Real product UI, captured clean — never default/system data. Full workflow in [`screenshots.md`](./screenshots.md). In short: run the app locally, **seed realistic demo data** (real-sounding Italian names, sensible quantities, the client's modules/states), capture every page in **light and dark** at 2× via [`capture-screenshots.mjs`](./capture-screenshots.mjs), then drop into browser frames. Light shots on white slides, dark shots on dark slides; show the same screen in both themes once to prove theme support.

## Voice & content

Follows [`/brand/01-voice-tone.md`](../../brand/01-voice-tone.md). For case studies specifically:

- **Concrete and journalistic.** Real brand names, real years, real states, vivid pain ("È arrivato?" "È partito?"). No generic marketing.
- **Section headers as declarative phrases**, verb-first, no buzzwords.
- **Content types that work** (reuse the spine):
  - *Numeri che pesano* — 3-4 numbers that frame the client's complexity.
  - *Anatomia di una vendita* — the real process as a numbered cycle.
  - *Cosa abbiamo trovato* — 3 concrete breakages.
  - *Brief, parole loro* — requirements in the client's words.
  - *Architettura* — the full module map (proves scope).
  - *Un modulo per slide* — and surface a **domain detail** competitors miss.
  - *Sotto il cofano* — stack + security (proves it will last).
  - *L'impatto* — 3 `before → after` numbers.
- **Punctuation**: prefer the colon `:`; avoid the em-dash `—` in body copy (Giacomo strips them). Em-dash is fine in code/`<title>`.

## Lavder identity on case-study surfaces

- Present as **Lavder Enterprise S.R.L.**; header lockup is the short `Lavder`.
- Contact: `lavder.com`. **Do not** print "Bucharest", the CUI/VAT, or "Caso studio" on the closing — case-study surfaces stay clean (legal/registry detail belongs on institutional docs, not here).
- Client's own city (e.g. Firenze) appears only for the **client**, never attributed to Lavder.

## Per-client customization checklist

When adapting the reference for a new client:
- [ ] Client name, logo files (compact + extended), city, founding year, sector tags, partner/context grid.
- [ ] **Client accent color** — set `--fab` and the `.s.fab` overrides to the client's brand color.
- [ ] Screenshots: re-run [`screenshots.md`](./screenshots.md) against the client's app (light + dark), update browser-frame URLs.
- [ ] Content: real numbers, the real sale cycle, real pain points, the real module list, a real domain detail, the real stack, real impact figures.
- [ ] **Verify every fact** with the client before sending — locations, dates, partner names, and especially impact metrics.
- [ ] Keep the two-brand color discipline: Lavder orange on framing, client color on the product chapter.

## Rendering to PDF

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="lavder-casestudy-<client>-YYYY-MM-DD.pdf" \
  "file://$(pwd)/lavder-casestudy-<client>-YYYY-MM-DD.html"
```

Verify by rasterizing pages (`pdftoppm -png -r 96 out.pdf page`) and eyeballing each slide: fonts embedded, images loaded, no overflow, logos visible on their backgrounds, no halos.

### Gotcha — print fragmentation on tall images
A single image taller than the page box inside a flow grid can be dropped/clipped by Chrome's paged-media engine (a slide came out blank this way). Fix: cap tall screenshots in a fixed-height framed window (`overflow:hidden`) or position hero images absolutely, so nothing exceeds 720px in normal flow.

## Lessons learned (do & don't)

- **Do** keep it a case study; **don't** turn it into a sales/pitch deck.
- **Do** emphasize one word per headline in orange; **don't** make headlines monochrome.
- **Do** brand the client's chapters with the client logo + color; **don't** let the client branding disappear, and **don't** flood the whole deck in the client color.
- **Do** frame screenshots in clean browser windows; **don't** add drop-shadows/halos or leave empty app background around them.
- **Do** use real, seeded demo data; **don't** ship default "Test User / Mario Rossi" screenshots.
- **Do** keep module maps a single uniform grid; **don't** mix card widths per family.
- **Do** print only `Lavder Enterprise S.R.L.` + `lavder.com`; **don't** add Bucharest / CUI / "Caso studio" to the closing.
