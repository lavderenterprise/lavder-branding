# Step 4 : Elements (the 500+ library, randomized)

A studio rarely hand-rolls a toggle or a loader: it keeps a deep drawer of crafted parts and reaches for an unexpected one. We do the same, with two rules that keep it from looking like a template: **(a) pull from a large, real library, and (b) randomize, so we never grab the same parts twice.** Every pulled element is then re-skinned to the brand so it reads as the client, not as the source's demo.

This is also a creativity engine, not a shortcut: a surprising loader, an unusual input treatment, a hover nobody else uses, are exactly the small signals that read as "designed by a person."

## The sources (where the 500+ live)

| Source | What to take | Pool size |
|---|---|---|
| **uiverse.io** | The drawer of small crafted parts: buttons, cards, loaders / spinners, checkboxes, radios, toggles / switches, inputs, forms, tooltips, patterns. Pure CSS or Tailwind, copy-paste, MIT. | thousands (this alone backs the 500+) |
| **heroui.com** | Accessible React component bases (HeroUI): buttons, inputs, selects, modals, tabs, accordions, dropdowns, tables, date pickers, many variants each. Best on Track B. | 40+ components, hundreds of variants |
| **codepen.io** | The experimental / signature drawer: creative hovers, scroll effects, text animations, custom cursors, canvas/SVG backgrounds, one-off interactions for the dial-3/4 signature moment. Vet the code, strip the cruft. | effectively unlimited |
| **Section kits** : Preline, HyperUI, Flowbite, Tailblocks, DaisyUI | Whole-section scaffolds: heroes, feature sections, pricing, footers, navs. The skeleton you then art-direct, never ship as-is. | hundreds of sections |
| **Animated kits** : Aceternity UI, Magic UI, react-bits, Skiper UI | Higher-end motion components for Track B (spotlight cards, marquees, reveals, gradients). Governed by the motion discipline. | hundreds |
| **Inspiration** (not for copy) : Godly, Land-book, Awwwards, Mobbin | Direction and composition reference (Step 2), not parts to lift. | curated galleries |

## The library taxonomy (target coverage, 500+)

Treat this as the drawer index. The numbers are how many distinct options to keep reachable per category (uiverse + kits + codepen easily exceed them); they sum well past 500.

- Navs / headers : 30+ : kits + codepen (sticky, transparent-over-hero, mega, off-canvas, split).
- Heroes / openers : 50+ : kits + codepen + the art-direction signature (split, full-bleed, gallery, text-only, centered-statement, arch/masked, video, slideshow).
- Buttons / CTAs : 60+ : uiverse (fills, outlines, icon, animated borders, magnetic, gradient-sweep).
- Cards : 60+ : uiverse + kits (product, profile, glass, bordered, hover-lift, image-overlay, bento cells).
- Forms / inputs : 50+ : uiverse + HeroUI (floating-label, underline, filled, search, multistep, reservation).
- Selects / toggles / checkboxes / radios / switches : 40+ : uiverse.
- Loaders / spinners / skeletons : 40+ : uiverse (use a characterful one, not the default ring).
- Tooltips / popovers / badges / tags / chips : 40+ : uiverse + kits.
- Pricing tables : 20+ : kits.
- Testimonials / reviews / quotes : 25+ : kits + codepen (avoid the fake-avatar grid; prefer typographic).
- Accordions / FAQ / tabs : 25+ : HeroUI + kits (animate open AND closed, never an instant `details`).
- Modals / drawers / menus / dropdowns : 30+ : HeroUI + kits.
- Marquees / tickers : 15+ : codepen + animated kits.
- Galleries / carousels / sliders / before-after : 30+ : codepen + kits (drag, scroll-snap, lightbox).
- Dividers / ornaments / section breaks : 20+ : custom + codepen (wave, torn, ruled-with-glyph).
- Backgrounds / textures / patterns : 40+ : codepen + CSS (grain, gradient mesh, dot/line grids, noise, glows, paper).
- Cursors / hover effects / micro-interactions : 40+ : uiverse + codepen (the studio signals).
- Footers : 20+ : kits.
- Section layouts : 30+ : kits + custom (split, bento, editorial-columns, sticky-scroll story, overlap).

That index is the 500+. It is a menu to pull from, not a checklist to use all of.

## The randomization protocol (so we never repeat ourselves)

1. **Pick by fit, then by freshness.** First filter the drawer to what serves the POV (Step 3) and the dial. Among the fits, deliberately avoid the obvious / most-popular / first-result option: scroll past the top of the list. The most-liked uiverse button is on a thousand sites already.
2. **Rotate against the element-ledger.** Check the element-ledger (a table in [`concept-ledger.md`](./concept-ledger.md)) for what we used on recent projects in this category. Do not reuse the same loader, toggle, hover or background two projects running. Log every element pulled (category : source : id/link) on the new row.
3. **Vary the seed.** When choosing among equivalent options, vary by something tied to the project (the client initial, the project index) rather than always landing on the same one. The goal is a different drawer-reach each time.
4. **Cap the borrow per surface.** A page should not be a quilt of twenty pulled gimmicks. Pull a few strong parts (a signature interaction, a distinctive input set, a hover language, a background) and let the art direction bind them. Restraint is part of the look.
5. **Re-skin, always.** A pulled element must be mapped to the brand tokens (color, radius, type, spacing) so it looks like the client and matches the rest of the page. A part that still looks like its demo is a defect.

## Output of Step 4 (the gate)

In the brief, an **elements list**: for each surface, the few parts pulled, their source, and the re-skin note. The element-ledger row is appended so the next project diverges.

```
ELEMENTS:
  hero      : <pattern> (kit/codepen <link>) : re-skinned to <tokens>
  buttons   : <uiverse id/link> : re-skinned
  inputs    : <source> : re-skinned
  loader    : <uiverse id/link>
  hover lang: <codepen/uiverse> on cards/links
  background: <css/codepen> : atmosphere per AD note
  signature : <the dial-3/4 interaction, vetted from codepen>
```

Gate to pass before Step 5 (HARD, no exceptions): the build must contain **real, recognisable elements actually taken from the libraries** (uiverse / HeroUI / CodePen), not lookalikes. Hand-rolling a plain button and calling it "the uiverse button" does not count and is the exact failure to avoid. Concretely:
- **Pull them live** with the connected browser (uiverse elements are MIT / open-source, made for reuse): open the element, take its real HTML + CSS, paste it in, then re-skin the colors / radius / type to the brand tokens (keep its distinctive structure and motion).
- **At least 3 to 5 distinctive elements** must visibly come from the libraries (e.g. an unusual button, a card with a real hover/interaction, a characterful loader or toggle, a background/cursor effect, a gallery interaction). They should be things you would not have generated yourself.
- **Log each** on the ledger row: category : source : author/slug (for MIT attribution and anti-repeat). The same element is not reused two builds running.
- If you cannot point to specific pulled elements with their source, the gate fails: go back and actually pull them. "Where are the library elements?" must always have a concrete answer.
