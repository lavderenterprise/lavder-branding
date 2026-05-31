# Build quality & QA

The craft layer (README §1) as a build-and-verify checklist. These are the rules, plus the recurring
failures that make a mockup "look broken" if skipped. Run the checklist before showing any prototype to a
client. Most of this was paid for in the Officine Lario build.

## 1. Layout robustness (what keeps margins sane)

- **One section rhythm.** Every full-width section uses the same vertical padding (the reference: 88 px mobile / 112 px desktop). No per-section `padding` tuning, that is what makes a page feel uneven. Heroes and feature media bands may be taller via `min-height`, but the inner content keeps the same vertical inset.
- **One container.** All content lives in a single `.container` (max-width ~1200 px, auto side margins, fixed gutter, `width:100%; min-width:0`). Left and right edges then line up across every section.
- **One border, one radius set.** A single hairline (`neutral-200` / `--line`) plus the chosen radius set (e.g. mixed: soft cards, squared buttons). Elevation = that border + one soft shadow, never ad-hoc outlines.
- **Stacking:** when a card **overlaps** an image, the card needs `position:relative; z-index` above it. A `position:relative` image otherwise paints over a `static` sibling and the card disappears behind it.
- **Grid fill:** a feature grid / bento must fill with no orphan empty cell. **Count the cells:** the sum of every child's span must complete whole rows. A 2×2 feature needs a **4-column** grid (feature 2×2 + four 1×1 cells fill the other 2×2). Real bug: feature 2×2 + two 1×1 + one **2×1 wide** + one 1×1 = **9 cells** in a 4-col grid, so the 9th dropped to a 3rd row alone with three empty cells next to it ("disproportionate boxes"). Lay out the spans on paper first.
- **Full-bleed text stays AA:** image and video backgrounds carry a 60-80% ink overlay so text keeps WCAG contrast.

## 2. Horizontal containment (the #1 "everything is broken" cause)

A single element wider than the viewport adds a horizontal scrollbar and shifts every section's right edge off-screen. Guard against it:

- **Never** position helpers at `left:-9999px` (use the `clip` / sr-only pattern). Real bug: a skip link at `-9999px` blew the page to ~9 900 px wide and shifted every section.
- **Flex/grid children:** set `min-width:0` on the item and `width:100%` on the inner container, or non-wrapping content (a long eyebrow, a `white-space:nowrap` label) forces the track wider than the screen.
- **Long inline labels must wrap** (eyebrows: an inline dot via `::before`, not `display:inline-flex`).
- **Reset defaults:** `* { box-sizing: border-box }`; `ul, ol` keep a 40 px `padding-inline-start` unless reset (footer/nav lists end up indented from their heading otherwise).
- **Safety net:** `body { overflow-x: clip; }` (sticky-safe, unlike `overflow:hidden`).

## 3. Motion & reveal robustness

- Content is **visible by default**; motion only enhances. Never leave content at `opacity:0` waiting on JS.
- Scroll reveals via **IntersectionObserver** (fires on any intersection, including hash jumps), plus a **failsafe timeout** that shows everything even if the observer misfires.
- Honor `prefers-reduced-motion` on every animation (Ken Burns, marquee, reveals, smooth scroll).
- A pulled flashy component (GSAP, Aceternity, Magic UI, etc.) must still pass the brand motion discipline (`/brand/08-motion.md`).

## 4. Interaction & component polish (what separates "fine" from "finished")

Paid for in the FIORÈLA build. These read as "amateurish" to a client even when the layout is correct.

- **Hover must never hide content.** A media element that scales on hover (`transform: scale`) creates a **stacking context** and paints **above** absolutely-positioned siblings that come *before* it in the DOM. Real bug: a product `.badge` and the wishlist heart vanished under the zoomed image on hover. Fix: give every overlay sitting on a zooming/hoverable image an explicit `z-index` (the transformed image is z-auto, so `z-index:1-2` on the overlay wins). Verify with `elementFromPoint` (§6).
- **Card hover stays simple and safe.** Lift with box-shadow + border + a small *image* zoom; avoid `transform` on the card itself when the card is also a scroll-reveal target (the reveal's `transform:none` out-specifies `:hover`, so the lift silently fails). Nothing on the card should change `opacity`/`display`.
- **Theme or hide native scrollbars** on horizontal rails / carousels: `scrollbar-width:thin; scrollbar-color: <accent> transparent` plus `::-webkit-scrollbar{height:6px}` with a transparent track and an accent thumb. A default grey scrollbar reads as unfinished. Pair the rail with drag-to-scroll + arrow buttons.
- **Accordions / FAQ animate open *and* closed** (height + opacity) with the toggle icon rotating. `<details>` toggles instantly, so animate via a small JS height transition (or `::details-content` + `interpolate-size` where supported). Style it independent of any wrapper with `details:has(> .body)` so it works even when the markup forgot the `.acc` container.
- **Button scale is a discipline, not one size.** A primary CTA is large; an inline/secondary button (e.g. a newsletter field in a footer column) is compact or an icon button. A full-size "OK" next to a small input looks broken. Keep one button system, vary the size by role.
- **One-sided text needs a generous measure.** A hero or band with the text on one side must not be crushed into a narrow column (it looks compact and lopsided): give it a comfortable max-width (~30-34 rem / ~46-52 ch) and let the background carry the rest of the width.
- **A static hero can become an auto-crossfade slideshow** (2-4 images, slow fade, Ken Burns on the active layer, paused under `prefers-reduced-motion`): more life than a single photo, at no layout cost. One-subject-per-frame discipline still applies.

## 5. Responsive

Design and check at **360 · 768 · 1024 · 1280 · 1440 px**. At each width: no section's text touches the right edge; the hero and media bands are full-bleed but their content stays in the container; the nav collapses to the mobile menu and it opens.

## 6. How to verify (don't trust one screenshot)

- View on a **real server** (`python3 -m http.server`, a localhost URL), not just `file://`. `file://` caches CSS/JS aggressively and hides your latest changes; during iteration, cache-bust (`styles.css?v=N`).
- For **JS-driven layout** (reveals, smooth scroll), a single screenshot lies (content mid-reveal, scroll hijacked by smooth-scroll). Read the **real DOM** instead: element bounding boxes and computed styles, and `document.body.scrollWidth` vs the viewport width to catch overflow. Smooth-scroll (Lenis) also resets the scroll position when a headless screenshot is taken, so scrolled screenshots come back blank or at the top: prefer the DOM, or render a temp copy with the reveal/`svh` rules overridden to static.
- **Test stacking & hover paint order with `elementFromPoint`.** At an overlay's centre, `document.elementFromPoint(x,y)` returns the topmost element: it must be the overlay (or its child), not the image underneath. `:hover` cannot be triggered programmatically in headless/preview, so simulate the hovered state: `el.style.transition='none'; img.style.transform='scale(1.1)'`, then probe (without killing the transition the transform is still mid-animation at scale 1 and the test is meaningless). `scrollIntoView({block:'center'})` first: `elementFromPoint` uses viewport coords and returns `null` for off-screen nodes.
- **Grids:** read the children's bounding boxes and the number of distinct row-tops to confirm a bento tiles in the intended rows with no orphan (container height == last child's bottom).
- Confirm the deliverable in the **client's actual browser and width** before sign-off.

## 7. Pre-ship checklist

- [ ] One section rhythm; one container; one border / radius set.
- [ ] `document.body.scrollWidth` == viewport width at 360 and 1440 (no horizontal overflow).
- [ ] No `left:-9999px`; lists reset; overlapping cards have `z-index`; bento spans sum to full rows (no orphan cell).
- [ ] **Hover never hides content:** badges / wishlist / labels stay above zooming images (checked with `elementFromPoint`); card hover changes no `opacity`/`display`.
- [ ] **Component polish:** horizontal rails have a themed/hidden scrollbar + arrows; accordions animate open *and* closed; inline/secondary buttons sized to role (not a full CTA); one-sided text has a generous measure.
- [ ] Content visible with JS disabled; reveals have a failsafe; reduced-motion respected.
- [ ] AA contrast on every full-bleed overlay; visible focus rings; 12 px minimum type.
- [ ] Imagery vetted: no CGI sheen, no fabricated people, no invented text. See [`image-generation.md`](./image-generation.md).
- [ ] Realistic copy in the client's voice; no lorem, no "Test User".
- [ ] Checked at 360 / 768 / 1024 / 1280 / 1440 in a real browser, not just `file://`.
