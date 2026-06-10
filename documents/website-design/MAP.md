# Lavder Website-Design System : Complete Map

> **Scope + currency note.** This map covers the **upstream branding-repo system** (`documents/website-design/`) as audited on 2026-06-06: the 8-step canon, 73 files. The `lavder-website-design` **skill has since evolved past it**: a content-first 10-step order (see `SKILL.md`, which governs), a Brand/Product register, a copy/SEO layer (`references/copy-seo/`), `knowledge/`, `tools/` and detector gates, none of which are counted here. Read this map for the upstream system's anatomy; read `SKILL.md` + the skill-root `README.md` for what runs today.

A full, file-by-file map of `documents/website-design/`. Every text file (12 guideline docs, the presentation wrapper, and the 9 sub-site folders) was read line 1 to last line and mapped here. Written in English to match the sibling guideline docs.

- **Generated:** 2026-06-06 (read-only audit; no source files were modified to produce this map).
- **Scope:** 73 text files, ~13,900 lines (`.md` + `.html` + `.css` + `.js`). Images and `.zip` exports are referenced, not transcribed.
- **Method:** the 12 `.md` docs + `presentation-template.html` mapped directly; the 9 site folders mapped by parallel readers, each reading every file in full.

---

## 0. How to read this map

The system is **one manual + eight ordered step-docs + three shared services + worked examples**. Sections 1–2 explain the model and the pipeline. Section 3 is the flat inventory. Section 4 maps the documents (the "brain"). Sections 5–6 map every built site (the "body"). Sections 7–10 are the synthesis: shared architecture, the connection graph, every inconsistency found, and a one-line fingerprint digest.

---

## 1. What this system is (two layers + the dial)

The folder exists to produce client websites that **look like a design studio made them, not an AI**. The whole apparatus fights "AI slop" (centered hero + eyebrow + two buttons, three equal cards, animated counters, purple-on-white, Inter everywhere).

**Every site is two layers stacked (never confused):**
- **The craft floor** (constant, non-negotiable) : containment, one spacing system, a11y, reduced-motion, feasibility, no broken margins. Defined in `7-quality.md`. Never relaxes.
- **The art-direction ceiling** (variable, per project) : the bold, specific, atmospheric POV that makes a site memorable. Defined in `3-art-direction.md`. Chosen at intake, researched, executed.

All floor + no ceiling = the AI-slop trap (correct, safe, forgettable). All ceiling + no floor = a broken art project. **Both ship, always.** The client's **brand** rides on top of both; Lavder's own orange/TWK/monogram appear **only** in the presentation wrapper, never in the mockup.

**The control that drives everything : the graphic-push dial** (chosen at intake, written in the brief, never drifted from):

| Dial | Name | Meaning | Typical fit |
|---|---|---|---|
| 1 | Sober | Restraint as the statement; refined minimalism | banks, legal, medical, trust-first B2B |
| 2 | Refined | Polished, characterful, composed | most corporate, services, premium product |
| 3 | Expressive | Strong AD front-and-centre; a signature moment | hospitality, food, fashion, creative-leaning |
| 4 | Extreme | Editorial / maximalist / experimental | portfolios, launches, art, culture |

The dial is "how loud the design speaks," not "how much effort." It calibrates type scale, color intensity, motion, composition, and element choice in every later step.

---

## 2. The pipeline (8 steps, layer + gate)

Each step **adds a layer** then **passes a gate** before the next begins. "A loop with memory, not a one-way slide": a failed gate sends you back to the step that caused it.

| # | Step | Layer added | Gate to pass | Doc |
|---|---|---|---|---|
| 1 | **Intake** | base directions + the dial (interactive quiz, `AskUserQuestion`) | brief filled; dial chosen; archetype + tier + track locked | `1-intake.md` |
| 2 | **Research** | real web research pass; 6–10 references; what to steal / avoid | written direction note + moodboard + ledger-divergence check | `2-research.md` |
| 3 | **Art direction** | commit to ONE POV + name the one memorable moment | POV + signature named in a sentence; calibrated to dial + brand + track | `3-art-direction.md` |
| 4 | **Elements** | pull real components from the 500+ library, randomized | each element re-skinned + logged in the element-ledger | `4-elements.md` |
| 5 | **Build** | assemble: tokens → structure → components → motion → imagery | every page rich; one spacing system; rotating non-canonical fonts | `5-build.md` |
| 6 | **Anti-AI** | hunt and remove the tells | the anti-AI checklist passes with zero "no" | `6-anti-ai.md` |
| 7 | **Quality** | the craft floor (containment, a11y, responsive, feasibility) | pre-ship checklist passes, DOM-verified not eyeballed | `7-quality.md` |
| 8 | **Deliver** | wrap prototype in the Lavder presentation; log fingerprint | deliverable packaged; concept-ledger row appended | `8-deliverable.md` |

**Tiers** (how much site, how many gates): Tier 1 Landing = one long page, one gate (hi-fi). Tier 2 Vetrina = a few pages, sitemap + hi-fi. Tier 3 Complesso = full site, **low-fi gate (`sitemap.html` + `wireframe.html`) then hi-fi**.
**Tracks** (what is feasible): Track A WordPress (Impreza + WPBakery), Track B Next.js. The prototype itself is build-agnostic HTML/CSS/JS; the track only changes the Step-7 feasibility check and handoff.

**The 9 non-negotiables** (hold at every dial): research before build · rotate never default · no em-dash ever · no AI tells · coherent spacing · distinctive Google Fonts · atmosphere over flat color · client-fit + track-feasibility gate everything · build the whole site (every page long and rich).

---

## 3. Complete file inventory (73 files)

**Guideline documents (12 · ~894 lines)**
| File | Lines | Role |
|---|---|---|
| `README.md` | 124 | Operating manual: layers, dial, pipeline, non-negotiables, tiers/tracks, file index |
| `1-intake.md` | 58 | Step 1 quiz; brand extraction ("redesign = refine, not rebrand"); brand-express; brief template |
| `2-research.md` | 44 | Step 2 web-research pass; galleries; cross-pollination; direction-note template |
| `3-art-direction.md` | 77 | Step 3 POV + signature; the AD dimensions; the 8-way site-structure pool; break-sections; alignment |
| `4-elements.md` | 129 | Step 4 the 500+ library; 5-step identification method; beauty test; code-eval; Brace worked record; the HARD gate |
| `5-build.md` | 45 | Step 5 build order; spacing system; type; rich-and-complete; grids-tile; robustness |
| `6-anti-ai.md` | 47 | Step 6 the tells checklist (em-dash, counters, kicker eyebrow, outline-everything, tiny text, CGI) |
| `7-quality.md` | 70 | Step 7 craft floor: containment, a11y, interaction polish, responsive, how-to-verify, pre-ship checklist |
| `8-deliverable.md` | 42 | Step 8 prototype + low-fi `sitemap.html`/`wireframe.html` + presentation wrapper + fingerprint log |
| `fonts.md` | 69 | Rotating non-canonical Google-font catalogue + 7-step selection layer + rotation ledger |
| `image-generation.md` | 122 | Camera-real prompting (real-over-rendered); the AI trap; recipes; vet-every-image |
| `concept-ledger.md` | 68 | Anti-repetition registry: fingerprint vocabulary + the 9-row ledger table |

**System assets**
| File | Lines | Role |
|---|---|---|
| `presentation-template.html` | 238 | The Lavder-branded 16:9 sign-off deck (7 slides) that frames the prototype |
| `reference-corporate-home.png` | n/a | Screenshot used inside the presentation template (slide 5) |
| `reges-larp.zip`, `etruria-retail.zip` | n/a | Packaged exports of the two client deliverables |

**Sub-site folders (9)** : line totals are code files only (`.html`+`.css`+`.js`+brief):
| Folder | Client | Archetype | Tier·Track | Code files | Lines | sitemap / wireframe |
|---|---|---|---|---|---|---|
| `reference-corporate/` | Officine Lario | corporate | 3·A | 8 | ~1,297 | ✓ / ✓ |
| `reference-ecommerce/` | FIORÈLA | ecommerce | 3·A | 9 | ~2,354 | ✓ / ✓ |
| `reference-servizi/` | Studio Legale Vittori | servizi | 2·A | 6 | ~1,523 | ✓ / ✗ |
| `reference-locale/` | Osteria del Borgo | locale | 2·A | 7 | ~2,005 | ✓ / ✗ |
| `reference-landing/` | Scadenza | landing | 1·B | 3 | ~942 | ✗ / ✗ |
| `reference-portfolio/` | Brio | portfolio | 2·B | 5 | ~1,044 | ✓ / ✗ |
| `reference-jewelry/` | Brace | ecommerce | 3·A* | 3 | ~838 | ✗ / ✗ |
| `reges-larp/` | REGES | ecommerce | 3·B | 10 | ~1,512 | ✓ / ✓ |
| `etruria-retail/` | Etruria Retail | corporate | 3·B | 11 | ~1,271 | ✓ / ✓ |

\* Brace's `brief.md` says Track B; the ledger and the built site behave as Track A express (see §9).

Note the **sitemap/wireframe columns map exactly to the tier gates**: Tier 1 (landing) has neither, Tier 2 has sitemap only, Tier 3 has both. Jewelry is a 2-page demo and predates the gate convention.

---

## 4. The guideline documents (the brain)

### `README.md` : the operating manual
Section 1 the two layers · Section 2 the dial table · Section 3 the 8-step pipeline table (layer + gate) · the opening prompt (fire Step 1 first, via `AskUserQuestion`) · Section 4 the 9 non-negotiables · Section 5 tiers & tracks · Section 6 the file index · Section 7 a one-paragraph version. This is the hub; it links every other doc.

### `1-intake.md` : Step 1
The 10-question quiz (client+sector, brand assets, voice/register, archetype, tier, build track, **the dial**, pages, imagery strategy, hard constraints). **Brand extraction** for clients with identity, with the hard rule **"Redesign = refine, do not rebrand"** (extract the real colours/logo/name; inventing a fresh palette is a separate, explicit decision : the named failure: redesigning a burgundy+dust-blue retailer as terracotta+olive). **Brand-express** for clients without identity. Ends with the `CLIENT/BRAND/VOICE/ARCHETYPE/TIER·TRACK/PUSH-DIAL/PAGES/IMAGERY/FONTS/CONSTRAINTS/DIVERGE-FROM` brief block.

### `2-research.md` : Step 2
Why it is mandatory (AI output = the statistical middle; escape it by anchoring on specific recent excellent work). What to do: WebSearch/WebFetch queries crossing sector × dial × medium; mine the galleries (Awwwards, Godly, Land-book, SiteInspire, Mobbin, Refero…); look sideways not just at competitors; collect 6–10 refs with "the one thing to steal." Read concretely (layout move, type, color, atmosphere, signature, motion). Check the ledger and fill `DIVERGE FROM`. Output: `REFERENCES / WHAT WORKS / WHAT TO AVOID / STEAL LIST`.

### `3-art-direction.md` : Step 3 (the layer AI skips)
Commit to ONE POV in a sentence + name the one unforgettable moment. The dimensions, each scaled by the dial: **typography** as a lead actor, **color** (dominant + one sharp accent, single CTA color per screen), **background/atmosphere** (depth not flat fill), **spatial composition** (break the grid on purpose), **motion** (one orchestrated moment), **detail/finish** (studio signals). **Randomize the skeleton** from an 8-structure pool (`canonical-stack` · `horizontal-lookbook` · `immersive-scroll` · `brutalist-index` · `editorial-broken-grid` · `sidebar-canvas` · `draggable-canvas` · `sticky-narrative`), excluding the last 1–2 builds. Break the sections (≥1 full-bleed container break), no over-narrow centered text, alignment is a decision. Output: the `POV/SIGNATURE/TYPE/COLOR/ATMOSPHERE/COMPOSITION/MOTION` note.

### `4-elements.md` : Step 4 (the 500+ library, randomized)
Sources table (uiverse = small crafted parts, MIT; HeroUI = accessible React patterns, Track B; CodePen = signature/experimental; section kits = scaffolds; animated kits = Track B motion; galleries = inspiration only). The library taxonomy (navs, heroes, buttons, cards, forms, toggles, loaders, accordions, marquees, galleries, dividers, backgrounds, cursors, footers…). **The 5-step identification method**: (1) hunt the *sensation* not the component, include ≥1 visible-at-rest part; (2) discovery protocol per source : route by element type, exhaust the right source before reconstructing; (3) the beauty test (personality-with-purpose + a non-default technique + restraint + re-skinnability); (4) **evaluate the code** (license/credit, self-contained, code health, performance, a11y, fit); (5) re-skin/integrate/log. The **Brace worked record** (the OliverZeros CTA, adamgiebl input, havardob segmented control, reconstructed cards/divider). The randomization protocol + the **HARD gate**: the build must contain real recognisable library elements (≥3–5), pulled live + re-skinned + logged : hand-rolling a plain button and calling it "the uiverse button" fails the gate.

### `5-build.md` : Step 5
Build order: **tokens first → structure (for Tier 2/3 produce the real `sitemap.html`+`wireframe.html` and pass that gate before hi-fi) → components → motion → imagery**. The spacing/margin system (one scale, one section rhythm "err generous never padding-top:0", one container, one border/radius/shadow). Type from the rotating set, 12px minimum. Rich-and-complete (every page built; Tier 2 ≥6 sections, Tier 3 7–12; no inner page thinner than home). Grids must tile cleanly (respect the columns, spans complete the grid). Robustness baked in.

### `6-anti-ai.md` : Step 6
Text tells (**em-dash = the cardinal sin**, grep U+2014 to zero; no markdown-looking blocks; no lorem; no boilerplate; no emoji-as-icons). Classic AI components to remove (animated counters, three-equal-cards, canonical centered hero, lazy social proof, reflex glassmorphism). Color/type tells (no purple-on-white, no canonical fonts, no timid even palette, **no tiny detail text** ≥13–15px labels / 16px body). Layout/motion tells (**no repeated kicker eyebrow + faded rule** : naming it a "stamp" does not exempt it; no over-narrow centered text; ≥1 container break; **don't outline everything** : elevation over borders, reset UA `<button>`/`<select>` borders; no flat backgrounds; no perpetual motion). Imagery tells (no CGI sheen, no fabricated people).

### `7-quality.md` : Step 7 (the craft floor)
Horizontal containment (`body.scrollWidth === innerWidth` at 360/1440; never `left:-9999px`; `min-width:0` + `width:100%`; `overflow-x:clip`). Spacing/structure. A11y (WCAG 2.2 AA, focus-visible, 12px min, full-bleed overlays). Interaction polish (hover never hides content : explicit z-index; safe card hover; themed rail scrollbars; accordions animate both ways; buttons sized by role; no counters). Motion robustness (visible by default; IO + failsafe; reduced-motion). Responsive 360/768/1024/1280/1440. **How to verify**: real localhost, read the DOM not one screenshot, `elementFromPoint`, bounding boxes. Feasibility on the track. The pre-ship checklist.

### `8-deliverable.md` : Step 8
The prototype (self-contained HTML/CSS/JS, client-branded, served not `file://`). **The low-fi wireframe + sitemap** (Tier 2/3 ship **two cross-linked files** `sitemap.html` + `wireframe.html` in the `reference-*/` monospace format : sitemap = IA tree, wireframe = tabbed per-page; do not collapse into one combined file). The Lavder presentation wrapper. Output naming under `~/Downloads/lavder-design-<client>-YYYY-MM-DD/` (verify the zip actually contains both structural files). Gates & sign-off. Log the fingerprint. Italian/voice conventions (colon not em-dash).

### `fonts.md` : the rotating catalogue
The 7-step selection layer (decide two roles; choose by brand+archetype+dial; prefer famous but try niche; pair by contrast; **rotate against the ledger**; **rotate the pairing *structure* not only the families** : single-sans / serif-body / mono-led / all-grotesque, because "elegant heading + normal body on every site is a tell"; load only what you use). Banned primaries (Inter, Roboto, Arial, Helvetica, system-ui, Open Sans, Lato, Poppins, Montserrat; Space Grotesk only with reason; and not the "AI-elegant" Fraunces/Prata/Jost as a reflex). The catalogue by category (neo-grotesque, geometric, text serif, didone, engraved, expressive, slab, mono). The rotation ledger of what's used.

### `image-generation.md` : imagery
**Real over rendered.** Style follows use (archetype × mood × sector). The realism dial and **the AI trap** (asking for "photorealistic/8k/cinematic" gives the CGI sheen : instead prompt for *photography*: documentary photograph, 35mm, available light, grain). The prompt anatomy + the "describe the whole frame" detail standard. Words to drop (`hyperrealistic`, `octane render`, `8k`, `cinematic`…). Recipes by mood/sector. **Vet every image** (geometry, invented text, CGI sheen, no fabricated people, set consistency). Log the photographic register. The Officine Lario before/after case.

### `concept-ledger.md` : the anti-repetition memory
The rule (before: read recent rows, choose an unused `archetype × mood × hero × layout × palette` combo, no two of the last 5 share the same triple, vary section-intro + signature; after: append the fingerprint, append-only). The **fingerprint vocabulary** (archetype · mood · site-structure · hero-pattern · layout-signature · palette-direction · section-intro · signature-device · push-dial · fonts · elements · track · brand). The 9-row ledger (Officine Lario → Etruria, see §10). Maintenance rules. **This is the feedback loop: read at Step 2, written at Step 8.**

### `presentation-template.html` : the Lavder sign-off deck
A 16:9, 7-slide deck (`1280×720` slides, `@page 13.333in×7.5in` for PDF). **This surface IS Lavder-branded** (orange `#F87016`, accent `#FCA400`, TWK Lausanne + Inter `@font-face` from `../../assets/fonts/`, the LVDR monogram SVG). Slides: **1 Cover** (client/archetype/build) · **2 Obiettivi** (3 cards + primary-action callout) · **3 Sitemap** (Home node → 5 page cards) · **4 Brand direction** (palette swatches + type, "the identity is yours not ours") · **5 La Home** (browser-framed `reference-corporate-home.png`) · **6 Scelte di design** (5 numbered rationales) · **7 Prossimi passi / Grazie** (revisions → approval → development). Filled with the Officine Lario demo; reuse = swap client name, objectives, sitemap, swatches, screenshot, rationale. Chrome-headless print command in the trailing comment. Uses an `.eyebrow` with a dot : acceptable here because this is the **Lavder** wrapper, not a client mockup.

---

## 5. The reference examples (7, one per archetype)

> "Copy the closest one as a craft starting point, never as a look to repeat." Each folder = one ledger row. All share the **house spine** (see §7): a token-driven `styles.css` + a progressive-enhancement `app.js`, verbatim header/footer, reveal-with-failsafe, `overflow-x:clip`.

### `reference-corporate/` : Officine Lario (corporate · tech · Tier 3 · Track A) : ledger #1, oldest
- **Tokens:** dark base `--graphite #0E1116` / `--ink #14181D` / `--steel #1A1F27`; industrial-blue accent `--accent #1B6FF2` (+`#1456C9`/`#E8F0FE`/on-dark `#7FB0FF`); neutrals `#F5F7FA`→`#334155`. **Mixed radius** `--r-card 14px` (soft) vs `--r-btn 3px` (squared) : the memorable identity. Fonts **Space Grotesk + Inter**, `--ease cubic-bezier(0,0,.2,1)`.
- **Files:** `index.html` (244, rich showcase: Ken-Burns hero → marquee → bento → video band → overlap card → immersive sectors → certs) · `azienda.html` (136, history/timeline/numbers/sectors) · `lavorazione.html` (128, SEO service template w/ breadcrumb + specs) · `contatti.html` (115, inert quote form + dropzone) · `styles.css` (305) · `app.js` (72: menu, Lenis, offset anchors, reveals+2600ms failsafe, rAF counters) · `sitemap.html` (104) · `wireframe.html` (193, 4 tabs).
- **Signature:** Ken Burns full-bleed hero + duplicated-track marquee + 2×2 bento + `-96px` overlap card + immersive sector cards + animated counters. The primitive vocabulary later folders re-use.
- **Issues:** **Tier mismatch** : ledger says Tier 3, the sitemap/wireframe label it Tier 2 (the wireframe comment even says "Tier-3 artifact" while its own meta chip says "Tier 2"). Dead GSAP/ScrollTrigger `<script>`s on subpages (nothing consumes them); `data-parallax` attribute declared but never wired; `--n700` unused; `#7FB0FF` repeated as a literal instead of a token.

### `reference-ecommerce/` : FIORÈLA (ecommerce · botanico materico · Tier 3 · Track A) : ledger #2, biggest
- **Tokens:** warm-light : cream `--cream #FBF7F2`, paper `#F5ECE0`/`#EFE2D2`, ink `#2B2622`; single CTA accent prugna `--plum #6D4C7D`; decorative-only naturals sage `#7C8A66`/clay `#BC6F4E`/gold `#C28A3A`; radius soft (`--r-card 16px`/`--r-btn 10px`). Fonts **Fraunces + Nunito Sans**.
- **Files:** `index.html` (297, 11 sections) · `shop.html` (293, 9-product grid + FAQ) · `prodotto.html` (317, sticky PDP gallery + ingredient story + before/after) · `carrello.html` (325, cart + order-bump) · `storia.html` (277, brand story) · `styles.css` (439) · `app.js` (163: 5 `[device]` interactions : hero slideshow, marquee, drag+arrow h-rail, clip-path before/after, sticky PDP gallery, animated `<details>`) · `sitemap.html` (101) · `wireframe.html` (142, 5 tabs). Track A **WooCommerce** (declared in both low-fi files).
- **Signature:** the "materico" layer : `feTurbulence` paper grain (`body::before`), hand-drawn SVG `.draw` underline, organic blob radii, washi-`.tape`, and a **3-way rotated section-intro** (`.kick` leaf / `.knum` numeral / `.krule` rule) instead of one eyebrow. Built only from the repo guidelines (the self-sufficiency reference).
- **Issues:** orphan asset `img/story.jpg` (unused); cart `data-cart-count` hardcoded `2` while the cart lists 3 lines (cosmetic, demo-only); `lucide@latest` unpinned vs Lenis `@1.0.42`.

### `reference-servizi/` : Studio Legale Vittori (servizi · editoriale · Tier 2 · Track A) : ledger #3
- **Tokens:** warm off-white `--paper #F7F4EF` + ink `#1C1A17`; single accent **burgundy `--bord #7A2E33`** (+`#5E2227`/`#F3E9E5`); squared radii (`--r-card 6px`/`--r-btn 4px`); minimal shadows (design via hairline + whitespace). Fonts **Spectral + Inter**.
- **Files:** `index.html` (359, all signatures) · `studio.html` (258, editorial columns + dropcap + values + sedi) · `contatti.html` (275, full consult form + map placeholder) · `styles.css` (402) · `app.js` (112: menu, Lenis, reveals+failsafe, counters, bidirectional accordion, demo consult-form) · `sitemap.html` (117).
- **Signature:** **kicker-rule** eyebrow (30px burgundy bar + small-caps) · **split-form hero** (authoritative statement + bordered consult card) · **practice-areas hairline index** (6 whole-card-link cells) · **4 numbered process steps** · `:has()` FAQ accordion · offset burgundy `framed-accent` photo frame + editorial rule-grid background.
- **Issues:** clean. `--n400` unused; `:has()`/`color-mix()` are modern-browser-only (fine for a 2026 prototype).

### `reference-locale/` : Osteria del Borgo (locale · heritage · Tier 2 · Track A) : ledger #4
- **Tokens:** dual-tone cream `--cream #FAF4E8` (+`#F3E9D4`) + brand-dark olive `--olive #3B4A2F` + single CTA **bordeaux `--bord #6E2B2B`**; ink `#2A2620`; detail gold `#B8853A`; soft `--r 8px`. Fonts **DM Serif Display + Mulish**.
- **Files:** `index.html` (363, gallery-hero collage) · `menu.html` (264, tabular-num price lists + degustazione box) · `contatti.html` (252, reservation + CSS map + eventi accordion) · `styles.css` (418) · `app.js` (128: menu, Lenis, reveals+failsafe, counters, photo-gallery rail, accordion, reservation demo) · `sitemap.html` (103) · **`index-concept.html` (477)** : a SECOND, self-contained candlelit variant.
- **Signature:** gallery-hero photo collage + numbered `.snum` section-intros (thin double-rule) + two-column tabular-num price lists + olive/bordeaux alternating bands + CSS-gradient map placeholder.
- **Issues:** `index-concept.html` is a fully separate candlelit concept (**Bodoni Moda + Hanken Grotesk**, dark amber/ox-blood `#1C140C`/`#E6AB4C`/`#7E2626`, "Lago di Como") that **contradicts the committed `index.html`** (DM Serif + Mulish, cream/olive/bordeaux, "Greve in Chianti") : palette + geography drift; it self-labels "Concept · frontend-design" and shares no CSS/JS. `app.js` line 121 is a dead no-op (`out.scrollIntoView ? null : null`); footer `#mappa` is a dead anchor on Home; "ragu" vs "ragù" copy inconsistency.

### `reference-landing/` : Scadenza (landing · conversion-first · Tier 1 · Track B) : ledger #5
- **Tokens:** high-contrast white `#FFFFFF` + ink `#111317` on cool washes `#F4F5FB`/`#EEF0FE`; single CTA **electric indigo `--indigo #4F46E5`**; UI-mock-only status greens/ambers/reds; radius `12px`. Font **Plus Jakarta Sans only** (weight does the work, 400–800).
- **Files:** `index.html` (461, one long ~12-section page) · `styles.css` (385) · `app.js` (96: menu, Lenis, offset anchors, reveals+failsafe, height-animated accordion, **no-overflow sticky bottom CTA** that shows mid-page and retracts before the final band). Tier 1 = **no sitemap/wireframe** (one gate).
- **Signature:** paused-on-hover logo marquee + **fused HTML pricing table** (Pro rises out of the joined row) + **two HTML/CSS product-UI mocks** (no product photos at all) + rotating `+→×` FAQ + mid-page sticky CTA. Standalone-display section-intro, no eyebrow.
- **Issues:** clean. `P.IVA 00000000000` placeholder; a "Pagata" invoice isn't really a "scadenza"; a couple of inline `style=` colors.

### `reference-portfolio/` : Brio (portfolio · bold-dark · Tier 2 · Track B) : ledger #6
- **Tokens:** near-black `--bg #0E0E10` / `#141417` / `#1B1B1F`, inverse paper `#F2F0EC`; single accent **coral `--coral #FF6A4D`** (`#E8542F`), on-coral near-black `#140B07`; sharp `--r-card 8px`/`--r-btn 6px`. Fonts **Space Grotesk (oversized) + Inter**.
- **Files:** `index.html` (257, text-only hero + 8 sections) · `progetto.html` (193, case study) · `styles.css` (361) · `app.js` (136: menu, Lenis, reveals+failsafe, counters, drag+arrow h-rail, **hero word-stagger**) · `sitemap.html` (97).
- **Signature:** text-only typographic hero with a faint 46vw coral glyph + four numbered devices : **project grid hover-reveal**, **h-scroll work rail** (drag + arrows + coral scrollbar), **big-type services list**, **keyword marquee**.
- **Issues:** clean. Dribbble icon under a "Behance" aria-label; some hardcoded hex colors inline in `progetto.html`; surplus unused CSS rules; "next project" links to itself (single case-study template).

### `reference-jewelry/` : Brace (ecommerce/jewelry · notturno-luxe · Tier 3 · dial 4) : ledger #7
- **Tokens (inline per page):** midnight `--night #0B1A2E` / `#0E2238` / `#06101C`, panels `#11253C`/`#15304C`; gold `--gold #C9A24B` + champagne `--gold-2 #E7CB86`; pearl `--pearl #EFE8DA`; sapphire `#3C6FA6`; mostly `1px`/`2px` radius. Fonts **Gilda Display (faux-italic via `skewX(-8deg)`) + Schibsted Grotesk**.
- **Files:** `brief.md` (62, the Step-1/2/3 brief) · `index.html` (493, one-page home, all CSS+JS inline) · `pezzo.html` (283, PDP, inline). **No shared `styles.css`/`app.js`, no `sitemap.html`/`wireframe.html`** (2-page demo).
- **Signature:** "Una scintilla nel buio" : fixed star-field `.sky` + fractal-noise `.grain`, a breathing radial-gold hero glow, one full-bleed gem band, auto-numbered (`decimal-leading-zero`) draggable product rail. Harvested + credited (MIT): OliverZeros/bitter-parrot-97 ripple CTA, adamgiebl/hot-cat-14 underline input, havardob sliding-tabs segmented control, MuhammadHasann sliding-info card, Creatlydev sheen button, uiverse switch.
- **Issues:** **major brief-vs-build divergence** : `brief.md` specifies a clay-editorial concept (Cormorant Garamond + Figtree, garnet, Track B, roman numerals); the built site is the midnight-luxe concept above (the brief was never reconciled; the ledger matches the *build*). Brief says Track B, ledger says Track A. Malformed hex `--pearl-2:#C7Ccd6` in index (correct `#C7CCD6` in pezzo) : token drift. Dead CSS: the credited Nawsome `.loadwrap` loader and a `.marq` marquee are styled but never rendered. ~9 leftover unused `img/` assets from the abandoned concept. The home never links to `pezzo.html` (PDP reachable only by URL). Credit inconsistency (top comment credits Creatlydev for the gold button; inline credits OliverZeros).

---

## 6. The client deliverables (2)

### `reges-larp/` : REGES (ecommerce · forge · Tier 3 · Track B · dial 3) : ledger #8
Redesign of reges.store (LARP / rievocazione / fantasy).
- **Tokens:** soot `--soot #141518` (+`#101113`, panels `#1A1C20`/`#212429`) · iron `--iron #2B2E33` (+`#3A3E44`, anvil `#22262B`) · ash `#ECE6DB`/`#BDB5A7`/`#8C8578` · **ember `--ember #D9531E` + spark `--ember-2 #F0813B`** · brass `#C08A3E`/`#D9A95E`. Border-light by design. Fonts **Big Shoulders Display + Hanken Grotesk + Spline Sans Mono**.
- **Files:** `index.html` (235, 10-section forge narrative) · `negozio.html` (146, filter-chip toolbar + 12 cards) · `prodotto.html` (177, PDP + spec sheet) · `carrello.html` (135, cart, step 1/3) · `chi-siamo.html` (145, makers + 17-yr timeline) · `contatti.html` (124, form + CSS map + `+/×` FAQ) · `styles.css` (238) · `app.js` (53: nav-solid, **deterministic embers** (14 spans, no Math.random), reveals+failsafe, drag/wheel rails, `data-img` paint, and a **SKU→image map** `{1004:prod-tinker, 1019:prod-aldaren, 1133:prod-sicario, 2218:prod-fenrir, 3007:prod-cotta, 4101:prod-custode, 5003:prod-brocchiero, 5210:prod-elmo, 6011/6022:prod-bracciali, 7002:prod-arco, 8040:prod-corvo, 9001:prod-tenda}`) · `sitemap.html` (104, IA tree) · `wireframe.html` (155, 6 tabs). All `data-img` + SKU files exist in `img/` (21 jpg).
- **Signature "scia di brace":** rising embers + forge-glow (flicker orb + ambient radials) + heat-hover cards (`--shadow`→`--shadow-ember`) + struck-spark divider. One lifted part (`.lk-line`, portseif/uiverse popular-octopus-83, MIT, re-skinned); everything else reconstructed.
- **Issues:** orphaned `.stamp` eyebrow CSS (defined, never rendered : the banned kicker, left in CSS); malformed nested `<b>` in `negozio.html` L54; decorative catalog counts don't reconcile (763 rail vs 743 headline vs "Dieci reparti"); `6022` ("Cintura") borrows the `prod-bracciali` photo; Aldaren price shown flat `189€` on index/negozio but `<s>229€</s>189€` on the PDP. `reges-larp.zip` lives at the parent level (correct).

### `etruria-retail/` : Etruria Retail (corporate · warm-institutional · Tier 3 · Track B · dial 3) : ledger #9
Redesign of etruriaretail.it (Tuscan supermarket retail group). Brand **extracted, not invented**.
- **Tokens:** **wine `--wine #9A2A2E`** / `#7A1F26` + **dust-blue `--blue #5E8595`** / `#3F6373` + warm cream `--paper #F6F1E7` (+ `--cream #FAF6EE`); ink `#23201E`; real greens `--olive #5B7A52`/`#445C3D`; `--radius 16px`. **`--cart`** is an SVG-data-URI cart wordmark (wine stroke) replacing the brand "e". **Alias tokens** `--terra→--wine`, `--ochre→--blue` (so page-inline styles written against the old palette re-skin automatically). Fonts **single-family Familjen Grotesk** for all three roles (`--fam`/`--disp`/`--body`).
- **Files:** `index.html` (197, 9 sections) · `chi-siamo.html` (113) · `insegne.html` (82) · `punti-vendita.html` (97, store directory + locator) · `sempre-con-te.html` (93, loyalty) · `franchising.html` (105, the ★ lead page) · `contatti.html` (87, form + `+/×` FAQ) · `styles.css` (200) · `app.js` (26: **JS-injected institutional utility bar**, scroll/`body.scrolled` toggle, reveals+failsafe, `data-img` paint) · `sitemap.html` (107, IA tree, 6 cards + Franchising ★) · `wireframe.html` (164, 7 tabs). 17 jpg in `img/`.
- **Signature:** warm food/land imagery + a food **"mosaico"** (deliberately clean equal `repeat(4,1fr)` 1:1 grid, "no spans, no holes") + full-bleed land band + 3D loyalty card + utility bar + cart-icon wordmark glyph + arrow-slide `.lk` links (technique studied from Javierrocadev).
- **Issues:** stale terracotta focus-shadow `rgba(187,84,48,.12)` in `punti-vendita.html` L16 (old palette, not wine : the `border-color` re-skins via alias but the hand-written shadow RGB was missed); the mosaico `.tall`/`.wide` markup hooks are intentionally unstyled (anti-orphan); `--olive`/`--cream` are real values, not aliases; the sempre-con-te app-CTA band uses olive + an off-palette ochre-amber radial. `etruria-retail.zip` at parent level.

---

## 7. Cross-cutting architecture (how the builds are wired)

**The house spine (every multi-page site except jewelry):**
- One **`styles.css`** = a `:root` token system (palette + `--font-*`/`--disp`/`--body`/`--mono` + radius set + shadow + `--ease cubic-bezier(0,0,.2,1)` + `--container`), then layout, type (clamp scales), components, a reveal block, and a `@media (prefers-reduced-motion: reduce)` kill-switch.
- One **`app.js`** = a single `DOMContentLoaded`/IIFE: Lucide boot, `reduce` guard, mobile menu, **Lenis smooth scroll** (own rAF loop, only if `!reduce`), offset same-page anchors (off-page hashes fall through), **reveal-on-scroll** (`.anim` gate + IntersectionObserver threshold ~.12 + **2600 ms failsafe**), and per-site `[device]` interactions (counters, h-rails, sliders, accordions, demo forms).
- **Verbatim header + footer** copied across pages (only `aria-current` changes); cache-busted `?v=N` links.

**The build-quality robustness patterns (cited in CSS headers, applied everywhere):** `body{overflow-x:clip}`, `.container{width:100%; min-width:0}`, footer `ul` reset, sr-only `.skip` via `clip`, reveals **visible-by-default** then hidden only once JS adds `.anim` (so content never gets stuck at opacity 0), bento spans that fill whole rows, themed rail scrollbars (`color-mix`), accordions that animate both directions, explicit z-index so hover-zoom never hides overlays.

**The low-fi gate house format (the `sitemap.html` / `wireframe.html` files):** identical across corporate/ecommerce/servizi/locale/portfolio/reges/etruria : `font-family: ui-monospace,"SF Mono",Menlo`, greyscale tokens `--g:#9aa0a6 · --d:#5f6368 · --l:#e3e5e8 · --bg:#f4f5f6 · --ink:#3a3c40` (+ `--dark:#33312e` for full-bleed bands in wireframes), dashed nodes/blocks, ★ = primary action, the two files cross-linked (`→ Wireframe` / `→ Sitemap`), and a "Build: Track X" stamp in the sitemap legend. The wireframe is tabbed per-page and mirrors the real built sections.

**Universal disciplines that held in every folder (verified A-Z):**
- **No em-dash (U+2014) anywhere** : confirmed clean across all 73 files. Ranges use the en-dash entity or U+2212 minus.
- **Single-accent discipline** : exactly one CTA color per site (blue / plum / burgundy / bordeaux / indigo / coral / ember / wine); secondary colors are decorative-only.
- **Progressive enhancement** : every site renders with JS off; all motion is reduced-motion-gated; CDNs (Lucide/Lenis) feature-detected. REGES and Etruria carry no Lenis at all (lighter, self-contained).

**The connective data object : the brief:** each pipeline step appends a block to one running brief (`CLIENT…` → `REFERENCES/STEAL LIST` → `POV/SIGNATURE` → `ELEMENTS` → built pages). `reference-jewelry/brief.md` is the only brief persisted as a file (and the one that drifted from its build).

---

## 8. The connection graph

```
                       README.md  (hub / operating manual : links everything)
                          │
   ┌──────────────────────┼─────────── the 8-step spine ───────────────────────────┐
   │  1 Intake → 2 Research → 3 Art-direction → 4 Elements → 5 Build → 6 Anti-AI → 7 Quality → 8 Deliver
   │     │           │            │                │                                        │
   │     └─ fonts.md ┘            │                └─ fonts.md, image-generation.md          │
   │     (type role, used by 1·3·5·6)                                                        │
   │                                                                                         │
   │     concept-ledger.md  ◄── read at Step 2 ───────────────── written at Step 8 ──────────┘
   │        (the memory loop: every shipped fingerprint, so the next project diverges)
   │
   └─ 8 Deliver → presentation-template.html  (Lavder-branded wrapper)  +  client deliverable folder:
                     index + inner pages (hi-fi)  ·  sitemap.html + wireframe.html (low-fi gate)
                     ·  styles.css + app.js (shared spine)  ·  img/  ·  <client>.zip

   reference-*/  ── physical worked examples, one per archetype; each = one concept-ledger row.
                    Step 5 says: copy the closest as a craft base, never as a look to repeat.
```

The three **shared services** (`fonts.md`, `image-generation.md`, `concept-ledger.md`) are referenced *across* steps rather than sitting in the chain. `concept-ledger.md` is the only one that is both **read early and written late** : that round trip is what makes the portfolio diverge instead of converging on a house look.

---

## 9. Issues & inconsistencies found (reading A-Z)

None are user-facing breakages on the built sites; they are internal drift, dead code, or doc/build mismatches worth knowing. Highest-value first:

1. **Brace : brief vs build divergence (largest).** `reference-jewelry/brief.md` describes a clay-editorial forge concept (Cormorant Garamond + Figtree, garnet, Track B, roman numerals) that **does not match the shipped midnight-luxe site** (Gilda Display + Schibsted, sapphire, Track A express, decimal numerals). The brief was never reconciled; the ledger matches the build, not the brief. Plus: malformed hex `--pearl-2:#C7Ccd6` (index) vs `#C7CCD6` (pezzo); dead `.loadwrap`/`.marq` CSS (the credited loader is never rendered); ~9 unused leftover `img/` assets; PDP not linked from the home; an author-credit inconsistency.
2. **Officine Lario : Tier label contradiction.** Ledger = Tier 3; its own `sitemap.html`/`wireframe.html` say Tier 2 (the wireframe comment even calls itself a "Tier-3 artifact" while its meta chip reads "Tier 2"). Also dead GSAP/ScrollTrigger scripts and an unwired `data-parallax`.
3. **Osteria : a second, contradictory concept file.** `index-concept.html` (candlelit, Bodoni Moda + Hanken, "Lago di Como") diverges from the committed `index.html` (DM Serif + Mulish, "Greve in Chianti") in palette, fonts and geography; it self-labels as a frontend-design concept. Minor: a dead no-op line in `app.js`, a dead `#mappa` anchor on Home.
4. **Etruria : one stale color.** `punti-vendita.html` L16 keeps an old-terracotta focus shadow `rgba(187,84,48,.12)` instead of wine `rgba(154,42,46,…)` (the `border-color` re-skins via the alias token, but the hand-written shadow RGB was missed). The alias layer otherwise works as intended.
5. **REGES : leftover banned kicker in CSS.** `.stamp` (the eyebrow stamp the anti-AI rule forbids) is still **defined in `styles.css`** though no HTML renders it; a malformed nested `<b>`; decorative catalog counts that don't reconcile; one shared product photo across two SKUs.
6. **FIORÈLA : minor.** Orphan `img/story.jpg`; a hardcoded header cart count vs a 3-line cart; mixed CDN pinning.
7. **Lower-severity, several folders:** unused tokens (`--n700` Officine, `--n400` Vittori, `--r-input` Brio); surplus unused CSS rules (Brio); a Dribbble icon under a "Behance" label (Brio); `:has()`/`color-mix()` modern-only (Vittori, Osteria); demo placeholders (`P.IVA 00000000000`, inert forms) : all expected for prototypes.

**A doc-vs-build note:** the README/Step-4 phrase "the 500+ element library" is a **taxonomy of where to pull from** (uiverse/HeroUI/CodePen/kits), not 500 files in the repo : the library is external; the repo holds the *method* and the *element-ledger* of what's been used.

---

## 10. Quick-reference fingerprint digest (the ledger)

Most recent first. Full prose rows live in `concept-ledger.md`.

| # | Client | Archetype | Mood | Hero | Palette | Fonts | Dial | Tier·Track |
|---|---|---|---|---|---|---|---|---|
| 9 | Etruria Retail | corporate | warm-institutional | split-shot | wine `#9A2A2E` + dust-blue `#5E8595` + cream | Familjen Grotesk (single-sans) | 3 | 3·B |
| 8 | REGES | ecommerce | forge | split-plate | soot `#141518` + ember `#D9531E` + brass | Big Shoulders + Hanken + Spline Mono | 3 | 3·B |
| 7 | Brace | ecommerce | notturno-luxe | split-framed | midnight `#0B1A2E` + gold `#C9A24B` | Gilda Display + Schibsted Grotesk | 4 | 3·A* |
| 6 | Brio | portfolio | bold-dark | text-only | near-black `#0E0E10` + coral `#FF6A4D` | Space Grotesk + Inter | 4 | 2·B |
| 5 | Scadenza | landing | conversion-first | centered-statement | white/ink + indigo `#4F46E5` | Plus Jakarta Sans | 2–3 | 1·B |
| 4 | Osteria del Borgo | locale | heritage | gallery-hero | cream `#FAF4E8` + olive `#3B4A2F` + bordeaux | DM Serif Display + Mulish | 3 | 2·A |
| 3 | Studio Legale Vittori | servizi | editoriale | split-form | burgundy `#7A2E33` on off-white | Spectral + Inter | 2 | 2·A |
| 2 | FIORÈLA | ecommerce | caldo / botanico | full-bleed-photo | cream `#FBF7F2` + prugna `#6D4C7D` | Fraunces + Nunito Sans | 3 | 3·A |
| 1 | Officine Lario | corporate | tech | split-7/5 | graphite `#0E1116` + blue `#1B6FF2` | Space Grotesk + Inter | 2 | 3·A |

No two adjacent rows share the same `(archetype + hero + layout)` triple or palette-direction : the divergence the ledger exists to enforce. \* Brace's brief says Track B; ledger/build behave as Track A express.

---

*End of map. Every file in `documents/website-design/` is accounted for above. To keep this current, re-run the read after any new deliverable lands (and append its concept-ledger row first).*
