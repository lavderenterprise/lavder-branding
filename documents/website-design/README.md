# Website design : the Lavder studio pipeline

The job of this folder is one thing: produce client websites that look like they came out of a **design studio**, not out of an AI. Generic "AI slop" (the centered hero with an eyebrow and two buttons, the three equal feature cards, the animated counters, the purple gradient on white, Inter everywhere) is the failure mode. We beat it with a **staged pipeline**: a small set of base directions in, then a chain of layers and gates out, each one raising the result before the next begins.

This README is the operating manual. The detail lives in the numbered steps. Read this once, then run the steps in order on every project.

---

## 1. The two layers (never confuse them)

Every Lavder website is two layers stacked. Keep them separate in your head.

- **The craft floor (constant, non-negotiable).** What makes a site "built well" no matter who the client is: containment, one spacing system, accessibility, reduced-motion, feasibility on the chosen build track, no broken margins. This layer never relaxes. It is the difference between a pretty screenshot and a shippable site. Detail: [`7-quality.md`](./7-quality.md).
- **The art-direction ceiling (variable, per project).** The bold, specific, atmospheric point of view that makes a site memorable. This is the layer AI usually skips and the one a real studio obsesses over. It is chosen at intake (the **graphic-push dial**), researched, then executed. Detail: [`3-art-direction.md`](./3-art-direction.md).

A result that is all floor and no ceiling is the AI-slop trap: correct, safe, forgettable. A result that is all ceiling and no floor is a broken art project. **We always deliver both.**

The client's **brand** rides on top of both layers (their colors, type direction, logo, voice). Lavder's own orange / TWK / monogram appear only in the presentation wrapper, never in the mockup.

---

## 2. The control that drives everything: the graphic-push dial

At intake the human picks **how far to push** the art direction. This single dial calibrates every later layer (type scale, color intensity, motion, composition, element choice). Pick it deliberately, write it in the brief, and never drift from it.

| Level | Name | What it means | Typical fit |
|---|---|---|---|
| **1** | **Sober** | Quiet, trustworthy, restraint as the statement. Refined minimalism (which is still a bold POV, not a default). One quiet idea, executed perfectly. | banks, legal, medical, B2B where trust > flair |
| **2** | **Refined** | Polished and characterful, clearly designed, but composed. A confident type choice, a real palette, tasteful motion. | most corporate, services, premium product |
| **3** | **Expressive** | Strong art direction front and centre: atmosphere, a signature moment, grid-breaking, motion with personality. | hospitality, food, fashion, creative-leaning brands |
| **4** | **Extreme** | Editorial / maximalist / experimental. The site IS the brand statement. Unusual layout, dramatic type, immersive background, custom interactions. | portfolios, launches, art, culture, anything that must stop the scroll |

The dial is not "how much effort": even **Sober** must be intentional and studio-grade. It is "how loud the design speaks." The skill's own rule applies: **intentionality, not intensity, is what separates a studio from AI.** Refined minimalism and full maximalism both win when committed to fully.

Calibrate the dial against the **build track** (Section 5): Track A (WordPress / Impreza) can comfortably do 1 to 3; level 4 usually needs Track B (Next.js) or a scoped, WP-feasible signature.

---

## 3. The pipeline (run in order, every project)

Each step is a **layer** (it adds something) followed by a **gate** (a check that must pass before moving on). Do not skip and do not reorder. Earlier steps constrain later ones on purpose.

| # | Step | Layer (what you add) | Gate (must pass to continue) | Doc |
|---|---|---|---|---|
| 1 | **Intake** | Base directions: client + brand (or brand-express), voice, site type / archetype, tier, build track, and the **graphic-push dial**. | Brief filled; dial chosen; archetype + tier + track locked. | [`1-intake.md`](./1-intake.md) |
| 2 | **Research** | A real **web research pass**: study how good studios solve this sector + this push level; gather 6 to 10 references; name what to borrow and what to avoid. | A short moodboard + a written "direction note", and a check against the [concept-ledger](./concept-ledger.md) so we diverge from our own recent work. | [`2-research.md`](./2-research.md) |
| 3 | **Art direction** | Commit to ONE point of view: the signature moment, atmosphere, color strategy, type as a lead actor, composition stance, motion idea. | The "one thing they will remember" is named in a sentence; AD calibrated to the dial + brand + track. | [`3-art-direction.md`](./3-art-direction.md) |
| 4 | **Elements** | Pull concrete components and effects from the **500+ element library** (uiverse, HeroUI, CodePen, kits), **randomized** so we never reach for the same parts twice. | Each pulled element is re-skinned to the brand and logged in the element-ledger (anti-repeat). | [`4-elements.md`](./4-elements.md) |
| 5 | **Build** | Assemble the pages: structure, then tokens (type / color / space), then components, then motion, then imagery. **Spacing and margins coherent** throughout. | Every primary page built and rich (no thin stubs); one spacing system; fonts from the rotating non-canonical set. | [`5-build.md`](./5-build.md) |
| 6 | **Anti-AI pass** | Hunt and remove the tells: em-dashes, animated counters, markdown-looking blocks, canonical fonts, cliché layouts, fake-looking data. | The [anti-AI checklist](./6-anti-ai.md) passes with zero "no". | [`6-anti-ai.md`](./6-anti-ai.md) |
| 7 | **Quality pass** | The craft floor: horizontal containment, a11y (AA, focus, reduced-motion), responsive 360 to 1440, interaction polish, feasibility on the track. | The [pre-ship checklist](./7-quality.md) passes; DOM-verified, not eyeballed. | [`7-quality.md`](./7-quality.md) |
| 8 | **Deliver** | Wrap the navigable prototype in the Lavder presentation; log the fingerprint. | Deliverable packaged; [concept-ledger](./concept-ledger.md) row appended after sign-off. | [`8-deliverable.md`](./8-deliverable.md) |

If a later gate fails because of an earlier decision, go back to that step. The pipeline is a loop with memory, not a one-way slide.

---

## 4. The non-negotiables (global hard rules)

These hold on every project regardless of the dial. Each is detailed in its step; collected here so they are never "forgotten".

1. **Research before build.** No project starts in code. Step 2 happens first, always. (`2-research.md`)
2. **Rotate, never default.** Fonts, elements, hero patterns, section-intros and signature devices all rotate against a ledger. The same choice two projects in a row is a defect. (`4-elements.md`, `fonts.md`, `concept-ledger.md`)
3. **No em-dash. Ever.** Use a colon, a comma, parentheses, or a full stop. This is checked mechanically before every delivery. (`6-anti-ai.md`)
4. **No AI tells.** No animated number counters, no markdown-looking content blocks, no canonical fonts (Inter / Roboto / Arial / system, and not the overused "designer defaults" either), no purple-on-white, no three-equal-cards reflex. (`6-anti-ai.md`)
5. **Coherent spacing and margins.** One spacing scale, one section rhythm, one container, aligned edges across every section. (`5-build.md`, `7-quality.md`)
6. **Distinctive fonts within Google Fonts.** Beautiful, characterful pairings, served from Google Fonts (so the build is portable), chosen from the rotating list, never the canonical ones. (`fonts.md`)
7. **Atmosphere over flat color.** Backgrounds carry depth (layered light, grain, texture, gradient mesh) appropriate to the dial, not a single solid fill, unless restraint is the deliberate statement. (`3-art-direction.md`)
8. **Client-brand fit and track-feasibility gate everything.** The boldness serves the client's brand; it is buildable on the chosen track or it does not ship. (`1-intake.md`, `7-quality.md`)

---

## 5. Tiers and build tracks (the frame intake fills)

**Tiers** (sets how many gates and how much site):
- **Tier 1 : Landing** : one long page. One gate (hi-fi).
- **Tier 2 : Vetrina** : a few primary pages. One gate (hi-fi) plus the sitemap.
- **Tier 3 : Complesso / e-commerce** : full site. Two gates (a low-fi wireframe, then hi-fi).

**Tracks** (sets what is feasible):
- **Track A : WordPress** (Impreza Pro + WPBakery). Cheap, fast, client-maintainable. Comfortable at dial 1 to 3; for dial 4, keep the signature moment to what the page builder can actually do.
- **Track B : Next.js**. Premium / custom. Required for true dial-4 interaction and bespoke motion.

The prototype itself is build-agnostic HTML/CSS/JS. The track only changes the feasibility check (Step 7) and the handoff.

---

## 6. Files

| File | Role |
|---|---|
| `README.md` | This operating manual: layers, dial, pipeline, non-negotiables. |
| [`1-intake.md`](./1-intake.md) | Step 1. Intake quiz: brand, voice, site type, tier, track, graphic-push dial. Brand-express when the client has no identity. |
| [`2-research.md`](./2-research.md) | Step 2. The pre-build web research pass + moodboard + direction note. |
| [`3-art-direction.md`](./3-art-direction.md) | Step 3. How to commit to a studio-grade point of view (the absorbed art-direction craft). |
| [`4-elements.md`](./4-elements.md) | Step 4. The 500+ element library (uiverse / HeroUI / CodePen / kits) and the randomization protocol. |
| [`5-build.md`](./5-build.md) | Step 5. Build order, spacing system, the rich-and-complete rule. |
| [`6-anti-ai.md`](./6-anti-ai.md) | Step 6. The "does not look AI" checklist with fixes. |
| [`7-quality.md`](./7-quality.md) | Step 7. The craft floor: containment, a11y, motion, responsive, feasibility, how to verify. |
| [`8-deliverable.md`](./8-deliverable.md) | Step 8. Packaging, the presentation wrapper, logging. |
| [`fonts.md`](./fonts.md) | The rotating library of non-canonical Google Font pairings, by mood. |
| [`image-generation.md`](./image-generation.md) | Imagery: prompt for real camera photography, never the CGI/AI look; no fabricated people. |
| [`concept-ledger.md`](./concept-ledger.md) | The anti-repetition registry: every shipped design's fingerprint, so the next one diverges. |
| `presentation-template.html` | The Lavder-branded 16:9 wrapper that frames the prototype. |
| `reference-*/` | Worked examples, one per archetype (corporate, ecommerce, servizi, locale, landing, portfolio). Copy the closest one as a craft starting point, never as a look to repeat. |

---

## 7. The one-paragraph version

Take the base directions and the **push dial** at intake. **Research the web** for how a real studio would handle this brief, and check we are not repeating ourselves. **Commit to one bold, atmospheric point of view** with a named signature moment. **Pull and randomize** real components from a 500+ element library and re-skin them to the brand. **Build** every page rich, on one coherent spacing system, in distinctive non-canonical fonts. **Strip every AI tell** (em-dashes, counters, markdown blocks, clichés). **Pass the craft floor** (containment, a11y, feasibility). **Deliver** and log the fingerprint. Studio in, not AI out.
