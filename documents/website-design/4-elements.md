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

## The identification method (find them, judge them, prove the code)

The drawer is huge, but most of it is forgettable and a lot of it is generic. You do not "pick a nice button"; you run a method that ends with a defensible answer to "why this element, from here, with this code." Five steps.

### 1. Know what you are hunting before you open a tab

From Steps 1 to 3 you already have the archetype, mood, push-dial and palette. Turn that into a short hunt-list of the 2 to 4 surfaces that deserve a crafted part, written as a *sensation*, not a component name: "a primary CTA that catches light like polished gold," "a focus state that feels considered, not default," "a hover that rewards looking." Browsing blind is how you end up with the same button as everyone else. Hunt the sensation.

**Include at least one element that reads as crafted *at rest*, not only on hover or focus.** Interaction-only parts (a ripple on hover, a line that draws on focus) are real craft, but they are invisible at a glance, so on their own the library never *shows*: the page looks unchanged until someone touches it. Always pair them with at least one visible-at-rest piece (a real control like a segmented filter, a card treatment, a divider/ornament) so the craft is felt the moment the page loads. "I added elements but nothing looks different" means you only picked interaction-triggered ones.

### 2. Discovery protocol per source (with the real mechanics)

**Match the element to the source, and exhaust the right source before you reconstruct.** Small parts (buttons, inputs, toggles, loaders) live on uiverse; controls (tabs, segmented, accordions) and signature interactions live on CodePen (technique) and HeroUI (accessible pattern); whole sections on the kits. A pool looking thin on **one** source is not a verdict on the part: open the source that is actually strong for that type before deciding to build it yourself. Real past failure to avoid: declaring uiverse's control pool "too playful" and hand-rolling a segmented control without first checking CodePen (where the radio + sliding-glider technique is canonical) or HeroUI's Tabs. Don't complain about a barren drawer you only half-opened.

- **uiverse** is strongest for small crafted parts: buttons, inputs, toggles, checkboxes, loaders, tags, tooltips. It is weak for editorial composite cards and for multi-option controls (its card and "segmented/tabs" pools skew playful: 3D tickets, neobrutalist windows, toggle switches). For those, go to CodePen/HeroUI or reconstruct a known technique (image clip-reveal, caption mask, rule-draw).
  - Search by a precise **visual** term ("border animation button", "input underline label", "shine sweep"), never a generic noun ("card", "button") alone.
  - **Favorites / most-popular is a trap.** The same handful of all-time hits (a social-reveal card, three colored "Hover me" blocks, a GitHub button) surface on top of nearly every search; they are on a thousand sites already. Scroll two or three rows past the top, or sort by New.
  - Listing thumbnails lazy-load and often render blank: wait a beat and scroll to trigger them before judging.
  - The **detail page is the evaluation bench**: it renders the live preview *and* exposes the HTML and CSS tabs. Hover the preview to see the real motion; read the code before deciding.
  - Investigate **top authors** for award-grade work (browse a strong profile, e.g. a multi-challenge winner), but still take only what fits the brief, never the flashiest thing on offer.
- **CodePen** is the signature/experimental drawer: scroll effects, text animations, SVG line-draws, custom cursors, canvas backgrounds, and the canonical control techniques (e.g. radio + sliding-glider tabs). Higher ceiling, more vetting; licenses vary (see step 4). Mechanic: global search needs an account, so reach pens by web-searching the technique and opening the pen URL directly (pens render and show their HTML/CSS/JS panels without login).
- **HeroUI** components are React + React-Aria (Track B): great as the accessible *pattern* reference (its Tabs is a sliding-cursor segmented control), but on Track A you adapt the markup + interaction to vanilla, you do not lift the React code. **Section kits** are scaffolds: take the structure, art-direct the skin.

### 3. The beauty test (what earns a place)

Research on premium interfaces is consistent: a premium micro-interaction combines **functional clarity + personality + brand expression**; a generic one is bare utilitarian feedback with no thought behind it. So an element earns its place only if it has:

- **Personality with purpose** : the motion or treatment expresses something (light, craft, calm), it is not decoration bolted on.
- **A technique you would not have defaulted to** : a layered structure, an unusual easing, a reveal you would not have written yourself in thirty seconds. If you would have, skip it: it adds nothing.
- **Restraint** : it reads expensive, not busy. One considered move beats five gimmicks. Cap the borrow per surface.
- **Re-skinnability** : its character lives in the **structure and the motion** (layers, timing, transforms), not in its demo colors, so it survives a token swap and still reads as itself.

### 4. Evaluate the code (valuta il codice) before you take it

Open the actual HTML and CSS and check, every time:

- **License + credit** : uiverse is MIT, reuse with attribution (log author and slug). CodePen varies per pen: if there is no clear permissive license, do not lift it, take it only as direction. Never ship code you cannot license.
- **Self-contained and portable** : pure CSS/HTML or minimal vanilla JS for Track A; no framework lock-in, no external CDN/asset you cannot vendor locally.
- **Code health** : no `!important` thickets, no hardcoded pixel widths that break at our type scale, no baked-in colors that fight theming, a sane DOM (not forty nested wrappers for a button).
- **Performance** : transitions on `transform` / `opacity` (compositor-friendly), not mass-animating `width` / `top` / `box-shadow`; no perpetual idle animation; it must survive our global `prefers-reduced-motion` rule.
- **Accessibility** : a real semantic element (`<button>`, `<input>`), a visible focus state, keyboard-usable; never a div-with-onclick dressed as a control.
- **Fit** : maps cleanly onto our tokens, radius and spacing.

Score the shortlist against these. The winner passes every gate *and* best fits the surface from step 1. Most candidates fail here; that is the point.

### 5. Re-skin, integrate, log

Map it to the brand tokens, keep the distinctive structure and motion intact, place it on the surface you were hunting for, and append the element-ledger row (category : source : author/slug). A part that still looks like its demo is a defect.

### Worked record : Brace (atelier jewelry, midnight + gold, dial 4)

- **CTA button** : uiverse `OliverZeros / bitter-parrot-97` (MIT). Chosen for the "catches light like gold" sensation: three staggered circular layers scale open under a clipped pill while a two-line label rolls, all on `cubic-bezier(.19,1,.22,1)`. Evaluated: pure CSS, semantic, transform/opacity only, ~130 clean lines. Re-skinned the playful purple/turquoise/yellow ripple to a tonal gold sequence (deep gold, champagne, pale gold) on Brace tokens; sharp 1px radius and uppercase tracking to match the system. Applied to the three primary CTAs.
- **Form input** : uiverse `adamgiebl / hot-cat-14` (MIT). Chosen for "a focus state that feels considered": a sibling `<span>` whose width animates 0 to 100% on `:focus`, ease-in-back. Evaluated: real `<input>`, one tiny span, width transition only, trivially themeable. Re-skinned the line to a gold gradient over the resting hairline; applied to the newsletter and the bespoke fields.
- **Filter control** (visible at rest) : segmented control built on the radio + sliding-glider technique from `havardob / ExVaELV` "Sliding tabs" (CodePen); HeroUI Tabs confirmed the same sliding-cursor pattern (React/Track B, adapted to vanilla). Active state is pure CSS (`input:checked + label`); a few lines of JS size the glider to the active label so the text stays centered at any label width, and run the card filter.
- **Visible-at-rest support** : product cards with an auto CSS-counter index numeral + a gold inset frame that turns gold on hover, and a CSS-drawn gem divider. These exist because the button and input are interaction-only (ripple on hover, line on focus): without at-rest pieces the library was invisible at a glance (see step 1).
- Rejected on purpose: uiverse's card and "shine" pools (too playful/skeuomorphic for luxe) and marcelodolza's glossy 3D buttons (clash with the flat editorial midnight). Fit beats quota: two parts that belong beat five that do not.
- Process honesty: the control + at-rest pieces were a **second pass**. The first pass stopped at uiverse, judged its control/card pools too playful, and reconstructed from scratch without opening CodePen or HeroUI: wrong, and rightly called out. The fix is step 2's rule, route by element type and exhaust the right source first.

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
