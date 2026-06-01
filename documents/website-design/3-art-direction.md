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
