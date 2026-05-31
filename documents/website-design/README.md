# Website design

How Lavder designs a website and presents it to the client for approval, **before** a line of production code is written. The design phase produces the artifact the client signs off on: the proof that the look, the structure and the journey are right. The selling is already done by the preventivo; this is where the project becomes real and visible.

This guide is different from `preventivi/` and `case-studies/` in one fundamental way, and everything else follows from it:

> **A preventivo and a case study are Lavder-branded artifacts. A website design is client-branded.** The site you are designing belongs to the client and wears the client's identity. Lavder's orange, TWK Lausanne and monogram appear **only in the presentation wrapper**, never inside the mockup.

## Files

| File | Purpose |
|---|---|
| [`README.md`](./README.md) | This playbook: principle, process, tiers, tracks, design system, archetypes, moods, deliverable |
| [`discovery-brief.md`](./discovery-brief.md) | Client intake template + brand extraction (and brand-express when the client has no identity) |
| [`sources.md`](./sources.md) | Approved libraries, component kits, animation, inspiration, icons, imagery, mapped per build track |
| [`image-generation.md`](./image-generation.md) | How to generate/source imagery so the style matches the use (real camera photo vs the fake CGI look); prompt recipes per mood/sector; Lavder ImageGen usage; vetting |
| [`concept-ledger.md`](./concept-ledger.md) | The "seed" registry: a living record of every design's fingerprint, so no two clients get the same site |
| `reference-corporate/` | Worked example: a **multi-page**, navigable hi-fi prototype (corporate archetype, demo client Officine Lario). Client-branded, self-contained (own `styles.css` + `app.js`, real stock images, GSAP + Lenis motion). Pages: `index.html` (home), `lavorazione.html`, `contatti.html`, `azienda.html`, plus `sitemap.html` and `wireframe.html`; `img/` holds the photos. Copy the folder per archetype |
| `presentation-template.html` | The Lavder-branded 16:9 presentation wrapper that frames the prototype (cover, objectives, sitemap, brand direction, mockup, rationale, next steps) |
| `reference-corporate-home.png` | Home screenshot embedded in the presentation deck. Regenerate when the mockup changes |

## 1. The cardinal principle: two layers

Every Lavder website design is built from two layers that must stay separate in your head.

**The craft layer (Lavder, constant).** What makes a site "built well by Lavder" regardless of who the client is. It never changes:
- the 4 px spacing scale and the 12-column / 1200 px grid,
- the accessibility floor (WCAG 2.2 AA, 12 px minimum type, always-visible focus rings),
- motion discipline (purposeful, fast, reduced-motion honored),
- real imagery over stock-and-render,
- alignment discipline and "breath over detail",
- the anti-template rules (no pilled CTAs, no vertical decorative text, no bouncing "scroll" word, no perpetual breathing ornaments).

**The brand layer (client, variable).** What the site wears, lifted from the client (or created when the client has none):
- color palette and the one-accent discipline applied to the *client's* accent,
- typefaces (the client's, or a recommended pairing),
- logo and imagery direction,
- voice and tone,
- the chosen mood (see [Mood library](#11-mood-library)).

Where Lavder's own brand lives: the **presentation wrapper** (cover, dividers, rationale) is Lavder-branded (orange, TWK, monogram). The **mockup inside it** is 100% client-branded. This is the same two-brand discipline the case-study deck learned, pushed one step further: in a case study Lavder narrates a finished product; here Lavder presents the client's own future site and must disappear from it.

## 2. When this is used

- **Phase:** after the preventivo is signed, before development starts.
- **What it gates:** the design sign-off unlocks the **40% "staging/design approvato"** milestone in the preventivo SAL. No design approval, no build, no second payment tranche.
- **What it is not:** it is not the finished site, and it is not a sales pitch. It is the visual contract. Revisions are cheap here and expensive later, so this is where disagreement is supposed to happen.

## 3. The tier model

The tier sets how many approval gates the design goes through, how deep the deliverable is, and which build track is typical. Pick the tier at kickoff from the preventivo scope.

| Tier | Typical client | Gates | Deliverable | Typical track |
|---|---|---|---|---|
| **1 · Landing** | one-page, lead-gen, event, single-product | hi-fi direct (1) | prototype + one-page rationale | A (Impreza) or static |
| **2 · Vetrina** | corporate, professional services, local business (5–12 pages) | hi-fi direct (1) + sitemap | prototype + presentation deck | A (Impreza + WPBakery) |
| **3 · Complesso** | e-commerce, multi-stakeholder, custom app-like | wireframe gate + hi-fi gate (2) | prototype + full deck | A (WooCommerce) or **B (Next.js)** |

Rules of thumb:
- **Go straight to hi-fi** on Tier 1–2. Clients read hi-fi better than wireframes, AI leverage makes iteration cheap, and it aligns with the single staging gate in the preventivo.
- **Add a wireframe gate** only on Tier 3, where the structure is genuinely uncertain or several stakeholders must agree before visual work is worth doing.
- When a project sits between tiers, price and gate it as the higher one.

## 4. The two build tracks

The design phase is build-agnostic: the prototype is always HTML/Tailwind. But the project is built on one of two tracks, chosen with the client, and the choice changes the **feasibility check** (Fase 3) and the **handoff** (Section 17).

| | **Track A · WordPress** | **Track B · Next.js** |
|---|---|---|
| Engine | Impreza Pro + WPBakery | Next.js (custom) |
| Best for | vetrina, local, content sites, WooCommerce, fast/economical builds | premium, app-like, bespoke interaction, performance-critical |
| Leverage | the `lavder-wp-engine` MCP + the Impreza harness build it semi-autonomously | hand-built or scaffolded, more design freedom |
| Cost/speed | lower cost, faster | higher cost, slower |
| Design constraint | think in Impreza/WPBakery sections; check feasibility before approval | near-unconstrained |

How to choose: budget and tier first (Tier 1–2 default to A, Tier 3 splits), then interaction ambition (heavy custom interaction or product-like UI pushes to B), then who maintains it (client wants to self-edit content easily favors A). When unsure, present the design once and quote both tracks in the preventivo as a fork.

## 5. The process end to end

```
Brief / Discovery
   └─→ Architettura informativa & Sitemap
          └─→ Struttura delle sezioni          (wireframe only on Tier 3)
                 └─→ Visual design hi-fi
                        └─→ Presentazione al cliente
                               └─→ Revisione  ⇄  Approvazione  ──→ Handoff (Track A or B)
```

Gates by tier: Tier 1–2 have one gate (hi-fi). Tier 3 has two (wireframe, then hi-fi). Each gate is a real sign-off, logged, and tied to the preventivo where relevant.

## 6. Fase 1 · Brief & Discovery

Goal: leave discovery with enough to design without guessing. Use [`discovery-brief.md`](./discovery-brief.md) as the intake. Extract:

- **Objectives** (one primary: sell, generate leads, inform, book, showcase) and how success is measured.
- **Audience** (who decides, who uses, B2B vs B2C, language(s)).
- **Competitors and references** (3 sites they like, 3 they hate, and *why* in their words).
- **Content reality** (what copy/photos/products exist today, what is missing, who writes it).
- **Constraints** (deadline, budget tier, existing systems to integrate, must-keep pages, SEO/redirects).

### Brand extraction

The mockup wears the client's brand, so capture it precisely, do not eyeball it:
- **Colors:** lift exact hex from the logo file, existing site CSS, or brand guidelines. Record primary, accent, neutrals.
- **Type:** the client's typefaces if defined. Identify them (WhatTheFont, the existing site's CSS).
- **Logo:** get vector (SVG/AI/PDF), both a compact mark and an extended wordmark when they exist.
- **Imagery:** real photography they own; note quality and gaps.

### Brand-express (when the client has no identity)

Common in the Italian SMB market. When the client has no usable brand, Lavder creates a minimal direction **on the spot**, as part of the design, and shows it as a small "brand direction" board inside the presentation: a primary + accent color, a font pairing, logo treatment (or a recommendation to commission one), and one mood. Keep it light: this is a direction to validate, not a full identity project (that is a separate, billable scope). Record it in the brand layer and the [concept-ledger](#12-the-randomness-the-concept-ledger).

## 7. Fase 2 · Architettura informativa & Sitemap

Decide the pages and how they nest before touching visuals. Start from the chosen [archetype](#10-archetypes--recipes), then adjust to the client's content reality.

- Produce a **sitemap**: page list, hierarchy, primary nav vs footer nav vs utility, and the one primary action per page.
- Map every page to its **goal** and its **primary CTA** (reuse approved CTA labels from `/brand/01-voice-tone.md`).
- Flag pages that need content the client does not yet have (this is where projects stall).
- On Tier 2–3 the sitemap is part of the deliverable (a slide in the deck).

## 8. Fase 3 · Struttura delle sezioni

Lavder designs **section by section**, not pixel by pixel. This is deliberate: it matches how both build tracks assemble pages (Impreza/WPBakery rows and elements; React section components), so the design translates cleanly.

**The canonical section catalogue** (pick and order per archetype):

`hero` · `value strip / USP` · `services or products grid` · `social proof (client logos, testimonials, reviews, ratings)` · `about / story` · `process / how it works` · `stats / numbers` · `gallery / portfolio` · `pricing` · `FAQ` · `lead form / contact` · `CTA band` · `footer`.

**Section thinking rules:**
- One section, one job, one hierarchy. One h1 on the page (the hero), one primary CTA per fold.
- Alternate rhythm: do not stack three identical card-grids in a row. Vary section shape (full-bleed vs contained, light vs dark, text-led vs image-led).
- **Feasibility check (per track).** Before a section reaches hi-fi, sanity-check it against the build track. Track A: can Impreza/WPBakery build this economically, or does it need custom code that blows the budget? Track B: any heavy interaction that needs a real plan? Kill or simplify infeasible ideas now, not at handoff.
- On **Tier 3** this phase produces a low-fi **wireframe** (grayscale, structure only) that gets its own approval gate before any visual work.

## 9. Fase 4 · Design visivo applicato al web

This is the design system applied to the web. Read it as: **the craft layer is fixed; the brand layer is filled from the client.** All tokens reference the system in [`/tokens`](../../tokens); the brand-layer values are the client's, not Lavder's.

### 9.0 Design-parameters intake (quiz-driven)

Do **not** decide the look unilaterally. Before building hi-fi, lock the brand-layer parameters **with the client** (or with the account owner standing in for them) through a short interactive quiz. The point of this tool is **controlled, bespoke** output: the human picks, Lavder executes. Quiz, do not assume:

- **Style / mood** (from the [mood library](#11-mood-library)).
- **Palette + accent** (exact hex; one accent per screen).
- **Border radius / shape** (squared 0-4 px, soft 8-12 px, mixed = soft cards + squared buttons, or fully rounded 16 px+).
- **Logo & branding** (client uploads a real logo, or Lavder creates a text monogram / proposes 2-3 directions / generates one).
- **Fonts** (any family from the **full Google Fonts library**; see [`sources.md`](./sources.md)).
- **Imagery strategy** (real category stock, AI-generated, placeholders, or a mix).
- **Motion level** (rich GSAP + Lenis, sober reveal + hover, or static).
- **Pages** to build in the prototype.

Use the `AskUserQuestion`-style flow (multiple-choice with an "other" escape for custom hex/fonts). Record the choices in the [discovery brief](./discovery-brief.md) §8 and log the resulting fingerprint in the [concept-ledger](./concept-ledger.md).

### 9.1 Grid & layout (craft, constant)
- 12 columns, 24 px gutter desktop / 16 px mobile. Default container **1200 px**; wider needs a reason (`/brand/05-spacing-layout.md`).
- 4 px spacing scale only. No off-scale values (`17px`, `23px` are banned).
- **Asymmetry over even splits:** prefer 7/5 column splits to 6/6 when content allows.
- **Edge-to-edge or contained, never half-bleed.** A section is full-bleed (background to the viewport edge, content in container) or boxed. Not both.
- Breakpoints: `sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`. Design desktop and mobile; do not ship a desktop-only mockup.

### 9.2 Typography (scale = craft; typefaces = brand)
- Hierarchy, scale and tracking are constant (`/brand/04-typography.md`): a display face for headings, a clean face for body and UI, the 1.25 scale, negative tracking on large display, **12 px minimum**, all-caps max 4 words.
- The **typefaces are the client's.** If the client has none, recommend a pairing in brand-express (a strong display + a neutral workhorse body, e.g. a grotesk display + Inter). Never set body or UI controls in a display face.

### 9.3 Color (palette = brand; discipline = craft)
- The palette is the **client's**, lifted exactly in discovery.
- The **one-accent discipline is Lavder's and constant:** one loud accent per screen. If a fold has a primary CTA in the accent, do not reuse the accent on a non-CTA element in the same fold.
- **WCAG 2.2 AA is non-negotiable:** 4.5:1 body, 3:1 large text. Never default to pure `#000000` for text. If the client's brand color fails contrast as text, use it on a button (ink/white on it) and keep body text in a dark neutral.
- Layer surfaces by elevation, communicate depth with shadow not random tints.

### 9.4 Components (pull, do not reinvent)
- Build the mockup from the kits in [`sources.md`](./sources.md), restyled to the client's tokens. Do not hand-roll a button when a kit section is 90% there.
- Re-skin everything to the brand layer: a pulled section must look like the client, not like the kit's demo.
- Interaction states are part of design, not an afterthought: hover, focus-visible (always a visible ring), active, disabled, loading, empty, error.
- Buttons are squared (`radius.md` 8 px). `radius.full` is for tags/avatars/badges only, never CTAs.

### 9.5 Imagery (craft, constant)
- **Real over rendered** (`/brand/07-imagery.md`): real people, spaces, products. Use Unsplash/Pexels as *placeholders* in the mockup, then swap for the client's real assets before build.
- **AI-generated imagery:** follow [`image-generation.md`](./image-generation.md). Prompt for *photography* (medium + camera + lens + available light + grain), **not** "photorealistic/ultra-detailed" — the latter yields a fake CGI sheen. Style follows the use; vet every image; never fabricate AI humans.
- **Never AI-generated humans.** AI illustration is acceptable; AI people are not.
- One subject per frame, negative space is content, high contrast / low saturation.
- Alt text for every meaningful image; `alt=""` for decorative. No "image of...".

### 9.6 Motion (craft, constant, even with fancy tools)
- The tools are allowed: **GSAP** (now fully free, including ScrollTrigger) and **Lenis** (smooth scroll) for marketing surfaces; **Framer Motion** for Track B / React UI state. See [`sources.md`](./sources.md).
- The discipline is Lavder's and governs them (`/brand/08-motion.md`): purposeful first, 240 ms default, ease-out, **`prefers-reduced-motion` honored on every animation**, no bouncing "scroll" indicators, no perpetual breathing ornaments, no pervasive scroll-linking. A pinned hero reveal is fine; motion-for-motion's-sake is not.
- If a pulled component (Aceternity, Magic UI) brings flashy motion, keep it only if it passes the discipline. Fancy is not an excuse to break the brand.

### 9.7 Voice & tone (voice = brand; conventions = craft)
- The copy is in the **client's** voice (their formality, their B2B/B2C register), not Lavder's house voice.
- Italian conventions are constant: colon not em-dash, `voi` for B2B and `tu` for B2C, plain Italian over needless anglicisms, concrete over abstract. See Section 18.
- In the mockup, write **plausible real copy**, never lorem ipsum and never "Test User". Realistic placeholder copy is part of selling the design.

### 9.8 The constant craft checklist (anti-template)
Run this on every mockup, regardless of client or mood. A "no" is a defect:
- [ ] One h1, one primary CTA per fold, one accent per screen.
- [ ] All spacing on the 4 px scale; everything aligned to something.
- [ ] AA contrast everywhere; visible focus ring; 12 px minimum type.
- [ ] Squared CTAs; no pilled buttons.
- [ ] No vertical decorative text, no bouncing scroll word, no perpetual breathing ornament, no floating "01/∞" legends.
- [ ] Real or realistic imagery; no AI humans; no default/system data.
- [ ] Mobile designed, not just desktop.
- [ ] Reduced-motion path exists for every animation.

## 10. Archetypes & recipes

Designs are assembled from **archetypes**: a starting recipe per client type. Pick one, then personalize with the brand layer and a mood. Each recipe is a default to adapt, not a cage.

For each archetype: **objective · home sections · sitemap shape · suggested moods · tier · typical track.**

### E-commerce
- **Objective:** sell. Minimize friction from landing to cart.
- **Home:** hero (hero product/offer) · category grid · best-sellers · social proof (reviews, ratings) · USP strip (shipping, returns, payments) · newsletter · footer (rich).
- **Sitemap:** home · shop (category → product) · cart/checkout · about · contact · policies.
- **Moods:** conversion-first, bold, lusso (for premium), caldo (for food).
- **Tier 3 · Track A (WooCommerce) or B.**

### Corporate / istituzionale
- **Objective:** credibility and inbound. Common in Italian manufacturing/B2B.
- **Home:** hero (positioning) · numbers/stats · what we do (services/sectors) · why us · client logos · case/projects · CTA band · footer.
- **Sitemap:** home · azienda · servizi/prodotti · settori · case/progetti · contatti.
- **Moods:** editoriale/minimal, heritage (Made-in-Italy), tech (for industrial-tech).
- **Tier 2 · Track A.**

### Servizi professionali (studio legale, commercialista, medico, consulenza)
- **Objective:** trust and booking. Sober, authoritative.
- **Home:** hero (clear who/what) · services · approach/method · team credentials · testimonials · FAQ · contact/booking · footer.
- **Sitemap:** home · studio/chi siamo · servizi (one page each for SEO) · team · contatti.
- **Moods:** clinico/wellness (health), editoriale (legal/finance), conversion-first.
- **Tier 2 · Track A.**

### Locale / hospitality (ristorante, hotel, attività fisica)
- **Objective:** make them come or book. Atmosphere first.
- **Home:** full-bleed photo hero · the offer (menu/rooms/services) · gallery · reviews · location/map/hours · booking CTA (sticky) · footer.
- **Sitemap:** home · menu/camere/servizi · gallery · contatti/prenota.
- **Moods:** caldo/locale, lusso (high-end), bold (trendy venues).
- **Tier 1–2 · Track A.**

### Landing / lead-gen / one-page
- **Objective:** one action (a form, a call, a purchase). Everything serves it.
- **Sections:** hero (promise + CTA) · proof (logos/numbers) · how it works · benefits · testimonials · objection-handling FAQ · final CTA · minimal footer.
- **Sitemap:** one page (+ thank-you, + privacy).
- **Moods:** conversion-first, bold.
- **Tier 1 · Track A or static.**

### Portfolio / personal brand / creative
- **Objective:** showcase work, get hired/commissioned.
- **Home:** statement hero · selected work (grid/case) · about · services · contact.
- **Sitemap:** home · work (→ project) · about · contact.
- **Moods:** editoriale, bold, lusso.
- **Tier 1–2 · Track A or B.**

## 11. Mood library

The mood is the brand-layer aesthetic direction, chosen per client. It changes the *feel* (color temperature, type personality, density, imagery, motion intensity) while the craft layer stays fixed. Eight directions cover the Italian SMB spectrum:

| Mood | Feel | Fits |
|---|---|---|
| **Editoriale / minimal premium** | breath, asymmetry, strong display type, few accents | corporate, professional services, portfolio (the default) |
| **Conversion-first / lead-gen** | action above the fold, early proof, central forms, short paths | landing, services, e-commerce |
| **Bold / dark / contrast** | dark heroes, full-bleed blocks, gradients, big numbers | brands wanting impact, creative, trendy venues |
| **Caldo / locale / hospitality** | warm palette, ambience photography lead, prenota/contact prominent | restaurants, food, lodging, local business |
| **Heritage / Made-in-Italy / artigianale** | warm, textured, storytelling, craft and provenance | food & wine, manufacturing, artisan, tradition |
| **Tech / SaaS / moderno** | clean, subtle gradients, product-led, light or dark | industrial-tech, software, B2B product |
| **Lusso / elegante / fashion** | abundant whitespace, refined type, large imagery, restraint | high-end retail, fashion, luxury hospitality |
| **Clinico / wellness / studio** | calm, soft palette, trust, generous spacing | medical, dental, spa, wellness, soft-professional |

Moods can blend (e.g. heritage + lusso for a high-end winery), but pick a dominant one. Record the choice in the concept-ledger.

## 12. The "randomness": the concept-ledger

The risk in a systematic, AI-leveraged practice is that every Lavder site starts to look the same. The defense is the **concept-ledger** ([`concept-ledger.md`](./concept-ledger.md)): a living registry that records the **fingerprint** of every design Lavder ships, so the next one deliberately diverges.

It runs all three variation mechanisms together:
1. **Fixed system, variable skin** (the default leverage play): craft layer constant, brand layer swapped.
2. **Sector-guided variants:** archetype + mood already push a restaurant away from a law firm.
3. **Unique concept:** when a client deserves it, an original concept on top.

The ledger is the "seed" that ties them together. Before starting a new design, **consult the ledger** and pick a combination (archetype × mood × hero-pattern × layout-signature) not yet used, or different enough from recent neighbors. After shipping, **log the fingerprint**. See the file for the schema and the rule.

## 13. Components & sources

What to pull from, restyled to the client. Full living list with links in [`sources.md`](./sources.md). In short:
- **Section/page kits (free):** Preline, DaisyUI, Flowbite, HyperUI, Tailblocks.
- **Animated / fancy components:** react-bits, Aceternity UI, Magic UI, Skiper UI (governed by the motion discipline).
- **App / dashboard (Track B):** shadcn/ui, 21st.dev.
- **Animation:** GSAP + ScrollTrigger (free), Lenis (smooth scroll), Framer Motion (React), plus CodePen for isolated effects.
- **Inspiration:** Godly (motion), Refero, Mobbin, Land-book, Lapa Ninja, Awwwards.
- **Icons:** Lucide (canonical). **Images:** Unsplash / Pexels as placeholders, then the client's real assets.
- **Track A build reference:** Impreza Pro demos + WPBakery elements (what is feasible/economical to build).

## 14. The deliverable (hybrid)

The deliverable is a **navigable hi-fi prototype** wrapped in a **light Lavder presentation**.

**The prototype (the centerpiece):**
- HTML/Tailwind, navigable, responsive (real desktop + mobile, not a flat image).
- Client-branded throughout; realistic copy and imagery, no lorem/Test User.
- Covers the home plus the key templates (e.g. a service page, a product page), not every page.
- Delivered as a link the client can open (hosted) and click through.

**The presentation wrapper (Lavder-branded):**
- Cover · objectives recap · sitemap · the mockups (with one line of rationale each) · the brand direction (if brand-express was used) · next steps.
- Either a short deck (rendered to PDF like the case study) or an intro/annotation layer around the prototype. This is where the *value* is posed and where Lavder is visibly the author.

**Output & naming:**
- Prototype source: `~/Downloads/lavder-design-<client>-YYYY-MM-DD/` (or hosted URL).
- Presentation: `~/Downloads/lavder-design-<client>-YYYY-MM-DD.{html,pdf}`.

## 15. Presentation to the client

- **Walk it live.** Open the prototype and narrate the journey the way a user would travel it. Do not email a link cold and hope.
- **Pose the value first** (the preventivo lesson): explain why the structure serves their objective before discussing taste. Tie choices to their stated goals and audience.
- **One narrative, their words.** Echo the brief back: "you said X, so the hero does Y."
- **Frame revisions** at the same time you present (see Section 16), so feedback lands inside the agreed rounds.
- **Do not** over-apologize, do not present three half-options hoping they pick one (present one confident direction; alternatives only if genuinely warranted), do not let the conversation drift into pixel-nitpicking before the structure is approved.

## 16. Revision & approval

- **Included rounds** are set in the preventivo. State them up front: "this design includes N revision rounds; further rounds are billed at the agreed rate." Protects the margin (revisions are where projects bleed).
- Collect feedback consolidated, in writing, per round, not as a trickle of messages.
- **Sign-off** is explicit and logged. Design approval unlocks the preventivo's 40% staging tranche and the build.
- After sign-off, **lock the design.** Post-approval changes are change-requests, not revisions.

## 17. Handoff to development (per track)

What development receives, by track:

**Track A · WordPress (Impreza Pro + WPBakery):**
- The section map: each section tagged to its Impreza/WPBakery row + elements.
- Tokens (colors, type, spacing) as the theme's globals; client fonts.
- Assets exported (logo SVG, real images optimized to WebP).
- The prototype as the visual source of truth.
- The `lavder-wp-engine` MCP and the Impreza harness build against this.

**Track B · Next.js:**
- Tokens as CSS variables / Tailwind config; client fonts self-hosted.
- Components mapped to the chosen kit (shadcn/ui base + section sources).
- Assets and the prototype as source of truth.
- Motion specs (GSAP/Framer) where used, with reduced-motion paths.

Both: a short "design intent" note flagging the non-obvious (the one domain detail, the deliberate asymmetry, the interaction that matters).

## 18. Voice & language

- Copy is in the **client's voice**, not Lavder's. Match their register.
- **Italian conventions (constant):** colon `:` not em-dash; `voi` for B2B, `tu` for B2C; plain Italian over anglicisms (`risultato` over `output`, `strumento` over `tool`), but keep industry terms (`web`, `brand`, `marketing`).
- Reuse approved CTA labels from `/brand/01-voice-tone.md` (`Richiedi un preventivo`, `Richiedi una consulenza`, etc.) unless the client's voice needs its own.
- No buzzword filler, no "we're excited to announce", no emoji on formal surfaces.

## 19. Per-client checklist

When starting a new design:
- [ ] Tier chosen (gates + deliverable depth) and build track chosen (A or B).
- [ ] Discovery complete; brand extracted (exact hex, real fonts, vector logo) or brand-express direction drafted.
- [ ] Sitemap approved (Tier 2–3); archetype + mood selected.
- [ ] **Concept-ledger consulted** for a non-repeating combination.
- [ ] Mockup built from sources, fully re-skinned to the client; craft checklist (9.8) all green.
- [ ] Feasibility checked against the chosen track.
- [ ] Realistic copy + real/placeholder imagery (no lorem, no AI humans, no Test User).
- [ ] Presentation wrapper assembled; revision rounds stated.
- [ ] After sign-off: design locked, fingerprint logged in the ledger, handoff package prepared.

## 20. Lessons (do & don't)

- **Do** keep the mockup 100% client-branded; **don't** let Lavder orange/TWK leak into the site.
- **Do** lift the client's exact colors and fonts; **don't** eyeball a hex or guess a font.
- **Do** create a brand-express direction when the client has none; **don't** turn it into an unbilled full identity project.
- **Do** go straight to hi-fi on Tier 1–2; **don't** make a non-designer client read wireframes.
- **Do** add a wireframe gate on Tier 3; **don't** start visual work while the structure is still contested.
- **Do** design section by section to match the build; **don't** design something the track can't build economically, then discover it at handoff.
- **Do** consult and update the concept-ledger; **don't** ship your third lookalike hero this quarter.
- **Do** keep GSAP/Lenis motion purposeful and reduced-motion-safe; **don't** let a flashy pulled component break the motion discipline.
- **Do** present live and pose the value first; **don't** email a cold link or offer three timid half-options.
- **Do** state revision rounds before feedback starts; **don't** absorb unlimited revisions into the fixed price.
- **Do** write realistic copy in the client's voice; **don't** ship lorem ipsum or "Test User".

## 21. Rendering & output

The presentation deck (when produced as PDF) renders like the other Lavder documents:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="lavder-design-<client>-YYYY-MM-DD.pdf" \
  "file://$(pwd)/lavder-design-<client>-YYYY-MM-DD.html"
```

The prototype is delivered **hosted/navigable**, not as a PDF (a website that can't be clicked defeats the point). Verify on real viewport sizes (desktop + mobile), check fonts load, focus rings are visible, and reduced-motion behaves, before sending.
