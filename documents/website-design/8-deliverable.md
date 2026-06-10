# Step 8 : Deliver

The output is a **navigable hi-fi prototype** wrapped in a **light Lavder presentation**. The prototype wears the client; the presentation wears Lavder.

## The prototype (the centerpiece)

- Self-contained HTML / CSS / JS (own `styles.css` + `app.js`, no Tailwind CDN), navigable, responsive (real desktop and mobile, not a flat image).
- Client-branded throughout; realistic copy and imagery; every primary page built and rich (Step 5).
- Delivered as a link the client opens and clicks through (served, not `file://`).

## The low-fi wireframe + sitemap (ships in the export, Tier 2/3)

The wireframe is not a mental step you pass through on the way to hi-fi: on Tier 2 and Tier 3 it is a pair of **real files that ship inside the export**, `sitemap.html` + `wireframe.html`, next to the hi-fi pages. (In the content-first order, `sitemap.html` is authored at the IA + Copy/SEO step, with the real copy; `wireframe.html` at Build.) Recurring failure to avoid: building the rich hi-fi site and never producing them, so the export carries no structural artifact and the Tier-3 wireframe gate was effectively skipped.

- **Two cross-linked files, not one.** `sitemap.html` (the IA) and `wireframe.html` (the page layouts), each with a top bar linking to the other (`→ Wireframe` / `→ Sitemap`). Both are monospace, greyscale, low-fi. **Copy the format of the existing `reference-*/` set** (e.g. `reference-ecommerce/`) so every project's structural artifacts look the same: do not improvise a one-off, and do not collapse the two into a single combined file with a "Sitemap" tab.
- **`sitemap.html` (the IA tree).** A root Home node listing the home sections, a connector, then a grid of page cards (each card lists that page's sections), a utility / legal row (login, account, language, privacy, cookie, returns, 404), and a legend (primary nav, ★ = primary action, language, build track).
- **`wireframe.html` (the page layouts).** Tabbed, **one tab per primary page** (the sitemap is its own file, not a tab here). Each page mirrors the real built sections with labeled dashed blocks, skeleton bars, hatched image placeholders, and dark blocks for full-bleed bands. A short meta line per page (page · archetype · tier · section count) and a legend at the foot.
- **Low-fi, deliberately.** Greyscale + monospace only; dashed, labeled blocks and skeleton bars; **none of the project's colours, fonts or images**. Each block names the section and its pattern (`Hero · split`, `Product grid · 12`, `Category rail · full-bleed`). It must read as structure, not as a faded version of the hi-fi.
- **Mirrors the real sections.** The blocks reflect the actual section order each page ends up with, so the wireframe and the hi-fi agree. If they drift, update the wireframe to match before delivery.

## The presentation wrapper (Lavder-branded)

Frames the value and makes Lavder visibly the author. Cover, objectives recap, the moodboard / direction note from Step 2, the sitemap, the mockups (one line of rationale each, tied to the art-direction POV), the brand direction if brand-express was used, next steps. Either a short deck rendered to PDF (like the case study) or an annotation layer around the prototype. The Lavder orange / TWK / monogram live here, never in the mockup.

## Output and naming

- Prototype source: `~/Downloads/lavder-design-<client>-YYYY-MM-DD/` (or hosted URL), with `sitemap.html` + `wireframe.html` at its root for Tier 2/3.
- **The copy/SEO package ships inside the source** as `copy-seo/` (`keyword-map.md`, `briefs/<page>.md`, `meta-schema-plan.md`; worked example: `examples/etruria-retail/copy-seo/` in the skill), plus `sitemap.xml` for crawlers (distinct from the low-fi `sitemap.html`).
- **Track A also ships `impreza-build.json`** in the source root (the porting manifest `lavder-impreza-harness` reads first).
- Presentation: `~/Downloads/lavder-design-<client>-YYYY-MM-DD.{html,pdf}`.
- When the source is zipped for handoff, **verify the archive actually contains `sitemap.html` and `wireframe.html`** (`unzip -l`): shipping a zip of only the hi-fi pages is the exact failure this guards against.

## Gates and sign-off

- Tier 1 Landing: one gate (hi-fi). Tier 2 Vetrina: `sitemap.html` + hi-fi. Tier 3 Complesso: the low-fi gate (`sitemap.html` + `wireframe.html`, above) first and signed off, then hi-fi. These are produced, shipped files, not a step done "in your head".
- Each gate is a real sign-off, logged, tied to the preventivo where relevant (design sign-off unlocks the staging tranche).

## Log the fingerprint (anti-repetition memory)

After sign-off, append the design's fingerprint to [`concept-ledger.md`](./concept-ledger.md): archetype, push dial, mood, hero-pattern, layout-signature, palette, section-intro, signature-device, fonts, and the elements pulled (the element-ledger row). This is what makes the next project diverge instead of converging on a house look. Append-only; do not edit shipped rows.

## Italian and voice conventions

Client copy in the client's voice (their register, `voi` for B2B / `tu` for B2C). Italian conventions are constant: colon not em-dash, plain Italian over needless anglicisms, concrete over abstract. The README is in English (matches the sibling guides); the deliverable copy is in the client's language.
