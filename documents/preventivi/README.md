# Preventivi

Branded quote and proposal documents for Lavder Enterprise — used both for direct clients and for white-label work delivered through partner agencies.

This folder defines the structure, voice, and visual conventions every Lavder preventivo follows. The reference template renders to PDF via Chrome headless and embeds TWK Lausanne + Inter from the assets folder.

## Files

| File | Purpose |
|---|---|
| [`preventivo-template.html`](./preventivo-template.html) | Reference template with placeholders. Copy, fill, render. |
| [`_styles.md`](./_styles.md) | CSS conventions and token usage specific to preventivi |

## Document structure

Every preventivo follows this section order. Sections may be omitted only when they would be empty (e.g. "Infrastruttura" if the project has none).

1. **Cover page** — full A4, page-break after
   - Logo monogram top-left, no wordmark
   - Date + "Documento riservato" top-right, neutral-500
   - Eyebrow: `PREVENTIVO TECNICO-ECONOMICO`
   - H1 in TWK 700, 38pt, with **one** word in `--lvdr-brand`
   - Lede paragraph in Inter, max ~280 characters
   - Bottom strip: Destinatario · Riferimento · Validità — flex `space-between`, full width, aligned left / center / right
2. **Sintesi esecutiva** — what's included, what's not, in one paragraph
3. **One section per project / site / deliverable** — eyebrow + h2 + price table
4. **Infrastruttura condivisa** — voci che servono più progetti contemporaneamente
5. **Note** — callout box (`--lvdr-n50` background, `--lvdr-brand` 2px border-left) per chiarire asterischi nelle tabelle
6. **Totale** — dark card (`--lvdr-ink` background, white text), one row per project + grand total in `--lvdr-brand-accent`
7. **Extra** — opzionali (manutenzione, formazione, audit, retest), can include monthly/annual rates
8. **Garanzie** — `ul.tight`, "Cosa garantiamo."
9. **Esclusioni** — `ul.tight`, "Cosa non è compreso."
10. **Tempi e SAL** — definition list (`dl.def`) grid 28% / 1fr
11. **Footer** — `<footer>` HTML at the end of body. Appears **only on the last page**, with a top border ("bordino") above:
    - Text: `LAVDER ENTERPRISE SRL · Documento riservato a [Cliente] · Tutti gli importi sono IVA esente`
    - Bordino: `border-top: 1px solid var(--lvdr-n200); padding-top: 16px`
    - Logo monogram on the right (SVG, ~14px)
    - **Positioning to actual page bottom**: see "Bottom positioning" section below
    - **Legal entity**: always "LAVDER ENTERPRISE SRL" (with "SRL"), never just "LAVDER ENTERPRISE"

## Bottom positioning (cover-bottom + footer)

Chrome's print rendering is hostile to "place this element at the bottom of its page". Neither `flex space-between`, `grid 1fr`, `min-height` alone, `@page :last`, `position: fixed`, nor `position: running()` work reliably on their own. The combination below — **flex on .cover + flex-grow on cover-middle for vertical centering + position: absolute on cover-bottom + fixed-height spacer before footer** — is what works.

### Cover (page 1) — final, tested

After many iterations, this is the only setup that reliably anchors the cover-bottom strip to the actual bottom of page 1 **and** keeps the H1+lede in their natural upper-area position (matching the original De Planet layout):

```css
.cover {
  page-break-after: always;
  /* No flex, no grid, no explicit height/min-height — Chrome's print engine ignores them for .cover */
}

.cover-middle {
  margin-top: 60mm; /* push H1+lede down from the logo (mimics De Planet's space-between rhythm) */
}

.cover-bottom {
  /* Normal visual styles (internal flex for the 3 fields, border-top, padding-top, gap, etc.) */
  position: absolute;
  bottom: 0;
  left: 16mm;
  right: 16mm;
}
```

Why it works:
- `.cover-middle` with `margin-top: 60mm` visually simulates the De Planet `justify-content: space-between` rhythm (H1 in the upper-middle area, not glued to the logo). Tune the value (typically 50–80mm) based on how dense `.cover-top` is.
- `.cover-bottom` with `position: absolute; bottom: 0` is removed from flow and anchored to the initial containing block (the page content area). Chrome shows it **only on page 1** because `.cover` has `page-break-after: always`, and the absolute-positioned child's rendering lifecycle is tied to the parent's pages. `bottom: 0` places it exactly at the bottom of the content area, right above the `@page` bottom margin — the user will read this as "real footer / pie di pagina".

### What NOT to do (failure modes learned the hard way)

- **Do not** apply `display: flex; flex-direction: column; justify-content: space-between; min-height: 261mm` to `.cover`. It works for long documents (e.g. De Planet, 7 pages) but Chrome ignores `min-height` for shorter documents and the cover-bottom ends up halfway down page 1.
- **Do not** apply `display: flex` + `flex-grow: 1` + `justify-content: center` to `.cover-middle`. It moves H1 to the visual center of the page, which the client reads as "the style has changed / page is broken".
- **Do not** use explicit `height: 261mm` on `.cover` — Chrome ignores it in print.
- **Do not** use `bottom: 18mm` on `.cover-bottom` — the client reads it as "not at the bottom of the page". Use `bottom: 0`.

### Footer (last page)

```html
<main>
  <!-- all sections -->
</main>

<div class="footer-spacer"></div>

<footer>
  <div class="legal">LAVDER ENTERPRISE SRL · ...</div>
  <svg>...</svg>
</footer>
```

```css
.footer-spacer {
  height: 170mm; /* tune per document — see calibration below */
}

footer {
  page-break-inside: avoid;
  padding-top: 16px;
  border-top: 1px solid var(--lvdr-n200);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* etc. */
}
```

Spacer calibration:
1. Render the PDF with a guess (e.g., 120mm).
2. Open the last page, observe how many mm the footer sits above the bottom margin.
3. Add that gap to the spacer height.
4. Re-render. Adjust ±5mm if needed.

For a typical preventivo of 3–5 pages, the spacer ends up between 100mm and 200mm depending on how much content runs onto the last page.

### What does NOT work in Chrome print

- `flex space-between` on `.cover` with `min-height: 261mm` alone (Chrome doesn't respect min-height for flex-grow purposes).
- `grid-template-rows: auto 1fr auto` on `.cover` with explicit `height: 261mm` (same issue).
- `display: table` + `display: table-row` (same).
- `min-height: 100vh` on `body` with flex column (works for single-page docs only).
- `@page :last { @bottom-center { content: ... } }` (Chrome doesn't support `:last`).
- `position: running()` + `content: element(name)` (Chrome doesn't support it).
- `position: fixed; bottom: 0` on footer (shows on **every** page).
- `margin-top: auto` or large `margin-top: <Xmm>` on footer (often creates a phantom extra page).

## Voice and language

Follows [`/brand/01-voice-tone.md`](../../brand/01-voice-tone.md). Specifically for preventivi:

- **Section headers as declarative phrases**: "Cosa includiamo, cosa no.", "Cosa garantiamo.", "Cosa non è compreso.", "Tempi e SAL."
- **Verb-first**, no hedging, no buzzwords
- **Lede paragraphs** ≤ 35 words, concrete

## Italian conventions (institutional documents)

- **"IVA esente"** — never "IVA esclusa". Lavder Enterprise Srl (Romanian-domiciled) bills Italian B2B clients under reverse charge.
- **Punctuation**: use colon `:` for appositions and explanations. **Do not use em-dash `—`** in body copy. Em-dash is fine in code, JSON, or `<title>`.
- **Parentheses** for clarifications: `Totale base (esente IVA)`, not `Totale base — IVA esente`.
- **Plus prefix** for additive/optional prices: `+4.000 €`, `+2.500 €`.
- **Numero**: migliaia con punto, nessun decimale per cifre tonde: `1.650 €`, `15.050 €`.
- **NBSP** tra cifra ed euro: `&nbsp;€` per evitare a-capo brutti.

## Standard CYA clauses

Always include these blocks unless the project explicitly excludes them.

### Garanzie

- PageSpeed ≥90 mobile+desktop garantito solo su pagine chiave concordate (home + catalogo + contatti + 1-2 landing)
- LCP <2.5s sulle stesse pagine, in condizioni standard Google (4G simulata)
- Compatibilità con gli ultimi 2 major browser (Chrome, Edge, Safari, Firefox) + mobile equivalenti
- Garanzia decade su modifiche, plugin di terze parti o contenuti pesanti aggiunti dal Cliente dopo il Go-Live
- Rendering CJK (se applicabile): garantito tecnicamente; revisione linguistica a carico Cliente

### Esclusioni

- Copy, testi, traduzioni — forniti dal Cliente, già pronti per upload
- Configurazione avanzata CRM / marketing automation lato sequenze ed email — a carico risorsa interna Cliente
- Licenze commerciali (WPML, Polylang Pro, ecc.) — acquisto e intestazione a carico Cliente
- Manutenzione post-Go-Live — non inclusa nel prezzo di sviluppo, disponibile come canone separato

### SAL e pagamenti

- **30%** alla firma dell'offerta (sblocca avvio attività + consegna accessi)
- **40%** a staging approvato (design firmato, integrazioni testate)
- **30%** a Go-Live + KPI verificati sulle pagine chiave

### Tempistica

8-15 settimane indicative da kickoff a Go-Live, in condizioni standard di fornitura materiali da parte del Cliente. Ritardi causa Cliente comportano rivalutazione tempi senza penali.

### Proprietà intellettuale

Codice sorgente, database, design, template e contenuti restano di esclusiva proprietà del Cliente al saldo del SAL relativo. Nessun vendor lock-in: tutte le licenze commerciali sono intestate al Cliente fin dalla messa in produzione.

## Lavder Polyglot — upsell standard

Quando il preventivo include sviluppo multilingua, **sempre** menzionare Lavder Polyglot nella nota callout:

> Le voci marcate con asterisco si riferiscono all'impiego di plugin terzi standard (WPML o Polylang Pro). Il prezzo si dimezza nel caso si opti per **Lavder Polyglot**, la nostra soluzione proprietaria di gestione multilingua. La licenza è inclusa nel primo anno; dal secondo anno il rinnovo è a 99 €/anno per sito, con uno sconto del 20% riservato alle agenzie partner.

## White-label conventions

Quando il preventivo è destinato a un'agenzia partner (white-label):

- **Mittente**: `LAVDER ENTERPRISE` in cover e footer
- **Destinatario in cover**: ragione sociale completa dell'agenzia partner (es. `Progetto Immagina Srl`)
- **Pricing in offerta**: il prezzo WL che Lavder fattura all'agenzia. L'agenzia applica il proprio markup verso il cliente finale.
- **Tono**: agnostico al cliente finale. Non nominare mai direttamente l'end-client dell'agenzia, salvo nel campo "Riferimento" (es. `Riferimento: Capitolato {End-Client} S.r.l.`).
- **Footer**: `Documento riservato a [Agenzia] Srl` — il riferimento all'agenzia, non al cliente finale.

## Pricing rounding

- Arrotonda ogni voce al multiplo di 50 € più vicino per leggibilità
- Ricalcola sempre i subtotali come somma effettiva delle righe (non come moltiplicazione dal totale)
- Per bump proporzionali (es. +25% retroattivo): moltiplica ogni voce, poi arrotonda a 50, poi ricalcola i subtotali

## Rendering a PDF

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="lavder-preventivo-<cliente>-YYYY-MM-DD.pdf" \
  "file://$(pwd)/lavder-preventivo-<cliente>-YYYY-MM-DD.html"
```

Convenzione di naming: `lavder-preventivo-<slug-cliente>-YYYY-MM-DD.{html,pdf}`.

## Gotcha — modifiche batch via sed

Quando si scalano i prezzi in massa via `sed` (es. bump +25%), attenzione ai pattern che matchano suffissi: `s|600&nbsp;€|750&nbsp;€|g` trasformerà `3.600&nbsp;€` in `3.750&nbsp;€`.

Soluzioni:

1. Ordina la sequenza dei comandi `sed` dai numeri più lunghi (subtotali, totali) ai più corti (linee).
2. Dopo ogni step verifica con: `grep -oE '[+]?[0-9]+(\.[0-9]+)?&nbsp;€' file | sort | uniq -c`
3. In alternativa, usa pattern ancorati al carattere precedente, es. `>600&nbsp;€` per matchare solo l'inizio del contenuto di una cella `<td>`.
