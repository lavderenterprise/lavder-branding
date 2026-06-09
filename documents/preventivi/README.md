# Preventivi

Branded quote and proposal documents for Lavder Enterprise — used both for direct clients and for white-label work delivered through partner agencies.

This folder defines the structure, voice, and visual conventions every Lavder preventivo follows. The reference template renders to PDF via Chrome headless and embeds TWK Lausanne + Inter from the assets folder.

## Files

| File | Purpose |
|---|---|
| [`preventivo-template.html`](./preventivo-template.html) | Main HTML reference template with placeholders. Cover holds **only** the logo + date — the centered title block and the bottom strip are supplied by the cover overlay. |
| [`preventivo-template-overlay-cover.html`](./preventivo-template-overlay-cover.html) | Single-page A4 overlay template: vertically-centered eyebrow + H1 + lede block, and the Destinatario · Riferimento · Validità strip anchored at the bottom. |
| [`preventivo-template-overlay-footer.html`](./preventivo-template-overlay-footer.html) | Single-page A4 overlay template: LAVDER ENTERPRISE legal text + LVDR monogram anchored at the bottom of the last page. |
| [`render-with-overlays.sh`](./render-with-overlays.sh) | Pipeline script: renders main + 2 overlay HTMLs and merges via pypdf |
| [`add-overlays.py`](./add-overlays.py) | Helper invoked by the pipeline. Stamps the cover overlay on page 1 and the footer overlay on the last page |

## Document structure

Every preventivo follows this section order. Sections may be omitted only when they would be empty (e.g. "Infrastruttura" if the project has none).

1. **Cover page** — full A4, page-break after. Split between the main HTML (top only) and the cover overlay (middle + bottom):
   - **Top** (main HTML): Logo monogram top-left (no wordmark); date + "Documento riservato" top-right in neutral-500
   - **Middle** (cover overlay, vertically centered at 50% of the page): Eyebrow `PREVENTIVO TECNICO-ECONOMICO` → H1 in TWK 700 at **52-72pt** with one word in `--lvdr-brand` (bias bigger for short titles; 72pt is the default) → lede paragraph in Inter, max ~280 characters
   - **Bottom** (cover overlay, anchored to the page bottom): Destinatario · Riferimento · Validità strip — flex `space-between`, full width, aligned left / center / right
2. **Sintesi esecutiva** — what's included, what's not, in one paragraph
3. **One section per project / site / deliverable** — eyebrow + h2 + price table
4. **Infrastruttura condivisa** — voci che servono più progetti contemporaneamente
5. **Note** — callout box (`--lvdr-n50` background, `--lvdr-brand` 2px border-left) per chiarire asterischi nelle tabelle
6. **Totale** — dark card (`--lvdr-ink` background, white text), one row per project + grand total in `--lvdr-brand-accent`
7. **Extra** — opzionali (manutenzione, formazione, audit, retest), can include monthly/annual rates
8. **Garanzie** — `ul.tight`, "Cosa garantiamo."
9. **Esclusioni** — `ul.tight`, "Cosa non è compreso."
10. **Tempi e SAL** — definition list (`dl.def`) grid 28% / 1fr
11. **Footer** — border-top neutral-200, flex space-between:
    - Left: `LAVDER ENTERPRISE · Documento riservato a [Cliente] Srl · Tutti gli importi sono IVA esente`
    - Right: LVDR monogram SVG, ~14px tall

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

### Simple case — single HTML to PDF

If you don't need a footer or cover-bottom strip at the actual bottom of the page (or you accept Chrome's flex-space-between behavior, which often lands them mid-page on shorter documents), render directly:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="lavder-preventivo-<cliente>-YYYY-MM-DD.pdf" \
  "file://$(pwd)/lavder-preventivo-<cliente>-YYYY-MM-DD.html"
```

### Real "pie di pagina" placement and systematic cover centering — overlay pipeline

Chrome's print engine has two hard limits in multi-page documents:

1. It cannot reliably anchor an element to the bottom of page 1 only or to the bottom of the last page only — pure CSS approaches (`@page :last`, `position: running()`, flex space-between with `min-height`, etc.) either fail or apply to every page.
2. It ignores `min-height` / `height: 100vh` on a `.cover` div, sizing it to its natural content instead of one full page. That means flex/grid vertical centering of the title block silently degrades to "stuck near the top" with empty space below.

The overlay pipeline fixes **both** by moving the cover middle block and the bottom strips into single-page A4 overlay documents where `100vh` reliably equals one A4 page. In those overlays, `position: absolute; top: 50%; transform: translateY(-50%)` truly centers vertically, and `position: absolute; bottom: 0` truly anchors to the page bottom.

**Approach**: render the document as 3 separate HTML files, then merge with pypdf:

1. **Main HTML** (`<basename>.html`) — the document content. The cover holds **only** the cover-top (logo + date); the centered title block and the bottom strip are NOT here. The body `<footer>` element is also removed.
2. **Cover overlay HTML** (`<basename>-overlay-cover.html`) — single-page A4 containing two absolutely-positioned blocks:
   - `.cover-middle` (eyebrow + H1 + lede) at `top: 50%; transform: translateY(-50%)` — dynamically centers the block on the page, regardless of how tall the eyebrow + H1 + lede stack ends up. Works the same whether the H1 is 1 line or 4, whether the lede is 1 paragraph or 3.
   - `.cover-bottom` (Destinatario · Riferimento · Validità) at `bottom: 0` — anchored to the page bottom.
3. **Footer overlay HTML** (`<basename>-overlay-footer.html`) — single-page A4 with the LAVDER ENTERPRISE legal text + LVDR monogram anchored at the bottom via `position: absolute; bottom: 0`.

The pipeline renders all three via Chrome headless, then `pypdf` stamps the cover overlay onto page 1 and the footer overlay onto the last page of the main PDF. Middle pages pass through clean.

**Run**:

```bash
# Once: install pypdf
pip3 install --user --break-system-packages pypdf

# Per preventivo
./render-with-overlays.sh /path/to/lavder-preventivo-<cliente>-YYYY-MM-DD
```

The script expects the three HTML inputs at `<basename>.html`, `<basename>-overlay-cover.html`, `<basename>-overlay-footer.html`, and produces `<basename>.pdf`.

**Why it works**: the overlay HTMLs are independent single-page A4 documents. In a single-page document `100vh` deterministically equals one A4 page (~297mm minus @page margins), so `position: absolute; bottom: 0` reliably anchors to the bottom and `position: absolute; top: 50%; transform: translateY(-50%)` reliably centers vertically. When pypdf stamps the overlay's single page onto a target page of the main PDF, the overlay's content keeps the same coordinates — so the centered block and the bottom strip land in the same place regardless of the main PDF's content length.

**File naming convention**: `lavder-preventivo-<slug-cliente>-YYYY-MM-DD.{html,pdf}` for the main; overlay HTMLs share the same prefix with `-overlay-cover.html` and `-overlay-footer.html`.

## Gotcha — modifiche batch via sed

Quando si scalano i prezzi in massa via `sed` (es. bump +25%), attenzione ai pattern che matchano suffissi: `s|600&nbsp;€|750&nbsp;€|g` trasformerà `3.600&nbsp;€` in `3.750&nbsp;€`.

Soluzioni:

1. Ordina la sequenza dei comandi `sed` dai numeri più lunghi (subtotali, totali) ai più corti (linee).
2. Dopo ogni step verifica con: `grep -oE '[+]?[0-9]+(\.[0-9]+)?&nbsp;€' file | sort | uniq -c`
3. In alternativa, usa pattern ancorati al carattere precedente, es. `>600&nbsp;€` per matchare solo l'inizio del contenuto di una cella `<td>`.
