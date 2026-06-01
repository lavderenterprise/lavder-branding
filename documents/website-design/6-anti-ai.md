# Step 6 : The anti-AI pass

A dedicated hunt for the tells that scream "a machine made this." Run it on every page before the quality pass. Each item below is a defect: find it, apply the fix. The bar is zero tells.

## Text and copy

- **Em-dash : the cardinal sin.** Never use the em-dash glyph (Unicode U+2014) anywhere: copy, headings, comments, alt text. Replace it with a colon, a comma, parentheses, or a full stop. Check it mechanically by grepping the whole project for that glyph before delivery; it must return nothing. (The en-dash glyph U+2013 only ever inside a numeric range, and even there a plain hyphen is safer.)
- **No markdown-looking content.** Do not ship blocks that read like rendered markdown: a bare `##`-style heading followed by a plain bullet list and a grey paragraph. That is a document, not a designed layout. Give content real structure: typographic hierarchy, columns, pull-quotes, leader-dotted lists, designed cards. If it looks like a README, redesign it.
- **No lorem, no "Test User", no "Lorem ipsum", no "John Doe".** Write plausible, specific copy in the client's voice and real-sounding names / places. Realistic copy is part of selling the design.
- **No generic CTA / heading boilerplate.** Avoid "Get Started", "Welcome to", "Empower your", "Take your X to the next level", "Lorem"-grade filler. Write like the brand talks.
- **No emoji used as icons or bullets.** Use a real icon set (Lucide etc.) or typographic marks, not emoji.

## The classic AI components (remove on sight)

- **Animated number counters.** No "0 to 500 count-up" stats (`data-count` tickers). They are the single most overused AI/template flourish. Show numbers as static, confident, well-set figures, or fold the proof into copy. If a stat matters, design it; do not animate it.
- **The three equal feature cards.** Icon + bold title + grey paragraph, three across, identical. The template default. Instead: vary the cells (bento with one feature large), use a real layout, or write it as editorial content.
- **The canonical centered hero.** Eyebrow, big centered headline, one-line sub, two buttons, faint gradient behind. The most recognizable AI hero. Use the art-direction hero instead (split, full-bleed, gallery, type-only, asymmetric), and only center when centering is the deliberate composition.
- **Fake social proof done lazily.** No grey "Trusted by" logo row of invented brands with no styling; no testimonial grid with generic round avatar placeholders. If you show proof, design it (typographic quotes, real-feeling attributions, no stock faces).
- **Glassmorphism / neon-glow by default.** Frosted cards and glow borders only when the chosen art direction calls for them, never as a reflex.

## Color and type tells

- **No purple/violet gradient on white.** The single most cliched AI palette. Also avoid the Tailwind-default look (gray-50 background, blue-600 buttons, shadow-md cards) and rainbow gradient text on headings.
- **No canonical fonts.** Inter, Roboto, Arial, Helvetica, system-ui, Open Sans are banned as the primary faces. Also avoid the overused "designer defaults" that now read as their own template (Poppins, Montserrat, and Space Grotesk as a reflex). Use the rotating pairings in [`fonts.md`](./fonts.md), and not the same pairing as last project.
- **No timid, evenly-spread palette.** A dominant field plus one sharp accent reads designed; an even rainbow reads generated.

## Layout and motion tells

- **No decorative gradient hairlines or faded rules sprinkled everywhere.** The little fading gold or grey line tucked under every eyebrow and beside every heading is a classic AI tic. Use real structure instead (a full solid rule, a number, a generous gap, type hierarchy) or nothing. One deliberate ornament for the signature is fine; the same faded line on every section is not.
- **No over-narrow centered text floating in huge side gutters.** A statement clamped to roughly 30ch and centered with big empty padding reads as a broken layout, not as elegance. Give centered text a comfortable measure and a real composition (an oversize pull-quote spanning the width, a two-column split, large type), per 3-art-direction.
- **At least one section must break the container** (full-bleed content edge to edge, broken/overlapping grid, asymmetry): a page that is only stacked centered boxes is the canonical AI page even with nice fonts.

- **No flat solid-color backgrounds by default.** Carry atmosphere (light, grain, texture, gradient mesh) per the art-direction note, unless flatness is the deliberate statement.
- **No everything-rounded, everything-centered.** Uniform large radius on every element and centered everything is a template signature. Vary alignment and shape with intent.
- **No perpetual meaningless motion.** No bouncing scroll-down arrow on a loop, no breathing pulse on decorative elements for no reason. One orchestrated load and purposeful reveals instead. (A single atmospheric element that serves the mood, like a candle glow at dial 3 to 4, is allowed.)
- **No identical section rhythm broken at random.** Coherent spacing (Step 5), varied composition (Step 3): the opposite of the AI pattern, which is either monotonous or randomly uneven.

## Imagery tells

- **No CGI / "ultra-realistic 3D render" look.** Prompt for real camera photography (see [`image-generation.md`](./image-generation.md)): medium, lens, available light, grain. The plasticky hyperreal sheen is an instant tell.
- **No fabricated AI people.** AI illustration or objects are fine; AI humans are not.

## The pass (the gate)

Walk the built pages once, top to bottom, hunting only for the items above. Then run the mechanical em-dash check. The gate passes when every item is clean. Keep a one-line note per page in the brief: "anti-AI pass : clean" or the fixes applied. A single surviving tell (a counter, an em-dash, Inter, a purple gradient) undoes the work of the whole pipeline, because that is the exact thing the eye flags as "AI".
