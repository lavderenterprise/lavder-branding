# Step 3 : Art direction (the layer AI skips)

This is where a project stops being "a correct website" and becomes "a designed thing." Everything here is the ceiling layer. The floor (Step 7) stays untouched; here we decide what the site *says* and how it *feels*. Calibrate every choice to the **push dial** from Step 1 and the **steal list** from Step 2.

## The mandate: one point of view, one thing they remember

Before any layout, commit to a single, specific aesthetic direction and write it in one sentence. Not "clean and modern" (that is the absence of a direction). Pick a real stance and push it: brutally minimal, editorial / magazine, warm and organic, luxe and restrained, retro-futuristic, industrial / utilitarian, maximalist, art-deco geometric, candlelit and moody, soft and tactile. There are dozens of flavors; choose one that is true to this client and this dial, and execute it with conviction.

Then name **the one unforgettable moment**: the single element a visitor will describe afterwards. An arched, candlelit hero. A menu set like a letterpress page. A type-only opening that fills the screen. A product shot that scrolls through its own ingredient story. If you cannot name it in a sentence, the design has no center yet. Build the page around it.

The governing law, true at every dial: **intentionality beats intensity.** Refined minimalism (dial 1) and full maximalism (dial 4) both succeed when committed to completely. A timid blend of both is the only real failure. Match the complexity of the code to the vision: a maximalist page earns elaborate layered effects; a minimal page earns ruthless restraint and perfect spacing. Do not under-build an extreme brief or over-decorate a quiet one.

## The dimensions (each scaled by the dial)

**Typography : make it a lead actor, not just hierarchy.**
Choose a display face with real character (see `fonts.md`, always from the rotating non-canonical set, never Inter / Roboto / Arial / system, and not the overused "designer defaults"). Pair it with a refined body face. The higher the dial, the more the type carries the page: at dial 3 to 4 the headline can BE the hero at extreme scale, with tight tracking, italics, ligatures, mixed weights, a word in the accent color. At dial 1 to 2 the character lives in a confident, slightly unexpected pairing and impeccable rhythm rather than size. Never set body or UI in the display face.

**Color : dominant plus a sharp accent, not a timid even spread.**
Commit to a clear color story driven by CSS variables. A dominant field (which may be dark, warm, moody, monochrome) with one or two sharp accents reads as designed; an evenly distributed rainbow reads as a template. Honor the brand, but choose intensity by dial: dial 1 to 2 can be quiet and tonal; dial 3 to 4 can be saturated, high-contrast, candlelit, duotone. Keep the single-loud-accent discipline (one CTA color per screen). Contrast still has to pass AA (Step 7): a brand color that fails as text lives on a button, not on a paragraph.

**Background and atmosphere : depth, not a flat fill.**
This is the most visible gap between studio and AI. Backgrounds should carry atmosphere appropriate to the dial: layered radial light, a subtle grain or noise overlay, a gradient mesh, paper or fabric texture, a vignette, soft large-blur glows, geometric patterns, layered transparencies, dramatic shadows. Even a "white" site can have a warm paper tone, a faint texture, a soft directional light. Reserve a truly flat fill only when flatness is the deliberate statement (a strict dial-1 brutalist or Swiss piece). Atmosphere is built with CSS, it costs nothing in assets, and it is what makes a screenshot feel inhabited.

**Spatial composition : break the grid on purpose.**
Plan at least one deliberate composition move per page: asymmetry, overlap, a diagonal flow, an oversized or off-canvas element, a broken grid, generous negative space, or controlled density. The 12-column grid and the spacing system (Step 5) are the discipline underneath; the art direction is how you break or stress them with intent. Alternate which side carries weight section to section so the eye zig-zags. Never ship a page that is just stacked centered blocks.

**Motion : one orchestrated moment beats ten scattered ones.**
Spend the motion budget on high-impact moments. A single well-choreographed page-load with staggered reveals (a cascade, by `animation-delay`) creates more delight than a dozen micro-bounces. Add scroll-triggered reveals and a few hover states that genuinely surprise. At dial 3 to 4 a tasteful perpetual atmospheric element is allowed (a candle glow that breathes, a slow gradient drift) when it serves the mood. Everything respects `prefers-reduced-motion` and never animates a number counter (see `6-anti-ai.md`). Prefer CSS for HTML builds; the Motion library for React (Track B).

**Detail and finish : the studio signals.**
Decorative hairline rules with a center ornament, a wax-seal or stamp motif, a custom cursor (when it serves and does not hurt usability), grain overlays, considered focus states, real shadows with warm tint, a marquee in the display face, leader-dotted lists instead of plain rows. These small, deliberate touches are what separate "designed" from "assembled."

## Structure : randomize the skeleton (never default to the vertical stack)

The single fastest tell that a site was generated is the same canonical skeleton every time: hero (eyebrow + headline + two buttons + image on the right), then a manifesto, a card rail, three equal cards, a dark band, a split, a CTA band, a footer. A studio chooses a structure that fits the brief. We force that by **randomizing the site-structure per project** from a pool, then rotating it against the [concept-ledger](./concept-ledger.md) so it never repeats. The structure sits ABOVE the hero-pattern: it is the whole-page skeleton, not just how the opener behaves.

The pool (all of these are in play; the project picks among them):
- **canonical-stack** : the vertical section stack. Fine for plain utilitarian briefs; the one to avoid by default, because it is the AI tell.
- **horizontal-lookbook** : the page scrolls sideways; sections are panels that slide past, like a printed catalogue or a gallery wall.
- **immersive-scroll** : full-viewport sections, scroll-snapping, a detail that pins (sticky) while content advances beside it.
- **brutalist-index** : a numbered list or table of items with hover-preview, exposed grid lines, oversized type, almost no chrome.
- **editorial-broken-grid** : overlapping, asymmetric, off-axis magazine spreads; the grid is stressed and broken, not stacked.
- **sidebar-canvas** : a fixed sidebar (brand / nav / filters / live total) beside a scrolling canvas; a two-pane layout.
- **draggable-canvas** : a freeform draggable or map-like exploration (dial 4 only, Track B).
- **sticky-narrative** : a pinned visual with content stepping beside it; scroll-telling.

How to pick it (the randomization, mandatory): seed from the project (brand name + a counter), filter the pool to what fits the archetype and the push dial, then **exclude the structure used by the last one or two projects** (read the ledger). Higher dials unlock the more experimental structures; dial 1 to 2 may legitimately land on a refined canonical-stack, but only if the ledger neighbor was not also canonical. Record the chosen `site-structure` on the ledger row. The same skeleton two builds running is a defect. The whole point: the operator does not get to fall back on a favorite template, and neither does the model.

## Break the sections, not just the skeleton

Even with a non-canonical skeleton, the page fails if every section is the same contained, centered, stacked block. Each page needs **deliberate rupture**:
- At least one or two sections (more at dial 3 to 4) must **break the container**: full-bleed content that genuinely runs edge to edge (content included, not just a full-bleed background with the text back in the 1200 px box), a broken or overlapping grid, an asymmetric off-axis layout, a horizontal-scroll panel, an oversized element that bleeds off the canvas.
- Do **not** default to "centered headline + centered paragraph in a narrow column" for the quiet sections. An over-narrow centered measure floating in huge side gutters reads as a broken layout, not as elegance. If a statement is centered, give it a comfortable measure and a real composition (an oversize pull-quote that spans the width, a two-column split, type set large), never a thin column lost in padding.
- Vary the rupture so no two adjacent sections share a composition.

## Alignment is a decision

Misaligned content is an instant amateur / AI tell. Every block aligns to something on purpose:
- In a multi-column split, choose the vertical alignment deliberately (top, center, or baseline). Never leave a text column at `align-items:end` so it sinks to the bottom of its row next to a taller form. Default text to top or center, matched to its neighbour.
- Horizontal: left edges line up to the grid; center only when the whole composition is centered.
- Optical over mathematical when they disagree (large display type, icons). Check that headings, rules and CTAs share a left edge down the page.

## Calibrate, then write it down

Translate the above into a short **art-direction note** in the brief, so Steps 4 and 5 execute against a fixed target:

```
POV:           <one sentence: the aesthetic stance, committed>
SIGNATURE:     <the one thing they will remember>
TYPE:          <display + body, and how loud the type goes at this dial>
COLOR:         <dominant + sharp accent; mood>
ATMOSPHERE:    <how depth is built: light / grain / texture / gradient / vignette>
COMPOSITION:   <the deliberate grid-break move(s)>
MOTION:        <the one orchestrated moment + any atmospheric element>
```

Gate to pass before Step 4: the POV and signature are named in plain sentences, the note is calibrated to the dial and the brand, and it is feasible on the track (a dial-4 custom-WebGL idea on Track A is not a plan, it is a wish: scope it to what the page builder can do or move to Track B). Studio direction is a decision, not a mood. Make the decision here, then go build it.
