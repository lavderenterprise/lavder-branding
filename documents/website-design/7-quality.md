# Step 7 : Quality (the craft floor)

The art direction can be brilliant and the site still fail here. This is the floor that never relaxes, at any dial: a beautiful screenshot that breaks at 390 px, fails contrast, or cannot be built on the track is not shippable. Build these in during Step 5; confirm them here, by reading the DOM, not by eyeballing one screenshot.

## 1. Horizontal containment (the number-one "everything is broken")

A single element wider than the viewport adds a horizontal scrollbar and shifts every section's right edge off-screen.
- Never position helpers at `left:-9999px`; use the clip / sr-only pattern. (A skip link at `-9999px` once blew a page to ~9900 px wide.)
- Flex / grid children: `min-width:0` on the item and `width:100%` on the inner container, or long non-wrapping content forces the track wider than the screen.
- Safety net: `body { overflow-x: clip }` (sticky-safe, unlike `overflow:hidden`). Rails and marquees clip their own overflow.
- Verify: `document.body.scrollWidth === innerWidth` at 360 / 390 and 1280 / 1440. No section's text touches the right edge.

## 2. Spacing and structure

- One section rhythm, one container, one spacing scale, one border / radius / shadow baseline (Step 5). Edges line up across sections.
- Reset `ul / ol` padding on nav and footer lists; `box-sizing:border-box` everywhere.
- Bento / feature grids: cell spans sum to whole rows, no orphan empty cell. (Lay the spans out on paper: a 2x2 feature plus a 2x1 plus three 1x1 is nine cells in an eight-cell grid and orphans one.)

## 3. Accessibility (AA, non-negotiable)

- WCAG 2.2 AA: 4.5:1 body text, 3:1 large text. Never pure `#000` on pure `#fff`. A brand color that fails as text goes on a button, not a paragraph. Check dark-theme cream-on-near-black too.
- Visible `focus-visible` ring on every interactive element. 12 px minimum type. All-caps kept short.
- Full-bleed media keeps an overlay so text stays AA over it.
- Keyboard: nav, menus, accordions, forms all operable; mobile menu opens and traps sensibly.

## 4. Interaction and component polish (what separates "fine" from "finished")

- **Hover never hides content.** An image that scales on hover (`transform: scale`) creates a stacking context and paints above absolutely-positioned siblings that come before it in the DOM. Overlays (badges, wishlist, captions) on a hover-zooming image get an explicit `z-index`. Verify with `elementFromPoint` (see Section 7).
- **Card hover stays safe.** Lift with box-shadow + border + a small image zoom; avoid `transform` on the card itself when it is also a scroll-reveal target (the reveal's `transform:none` out-specifies `:hover` and the lift silently fails). Nothing on the card changes opacity / display.
- **Themed scrollbars** on horizontal rails (thin, accent thumb, transparent track), never the default grey bar. Pair with drag + arrows.
- **Accordions animate open and closed** (height + opacity), icon rotates. Style independent of any wrapper with `details:has(> .body)`.
- **Buttons sized by role.** A primary CTA is large; an inline / secondary button (a newsletter field) is compact or an icon button. One button system, size by role.
- **No animated counters** (this is also an anti-AI tell, Step 6): static figures only.

## 5. Motion robustness

- Content is visible by default; motion only enhances. Never leave content at `opacity:0` waiting on JS.
- Reveals via IntersectionObserver plus a failsafe timeout that shows everything even if the observer misfires.
- `prefers-reduced-motion` honored on every animation (load cascade, atmospheric glow, marquee, reveals, smooth scroll).

## 6. Responsive

Design and check at 360 / 768 / 1024 / 1280 / 1440. At each width: no overflow; hero and media bands full-bleed but their content stays in the container; the nav collapses to a working mobile menu; large display type does not break mid-word (reduce the clamp minimum so it wraps cleanly).

## 7. How to verify (do not trust one screenshot)

- Serve on a real localhost (`python3 -m http.server`), not `file://` (which caches CSS/JS hard). Cache-bust with `?v=N` during iteration.
- For JS-driven layout (reveals, smooth scroll), a single screenshot lies. Read the real DOM: bounding boxes, computed styles, `document.body.scrollWidth` vs viewport. Smooth-scroll (Lenis) resets scroll on a headless screenshot, so scrolled shots come back blank or at top: render a temp copy with the reveal / `svh` rules overridden to static, or read the DOM.
- Test stacking / hover with `elementFromPoint`: at an overlay's centre the topmost element must be the overlay (or its child), not the image. `:hover` cannot be triggered headless, so simulate it (`el.style.transition='none'; img.style.transform='scale(1.1)'`) then probe; `scrollIntoView({block:'center'})` first or it returns null off-screen.
- Grids: read children bounding boxes and the count of distinct row-tops to confirm a bento tiles with no orphan (container bottom equals last child bottom).

## 8. Feasibility on the build track

- **Track A (WordPress / Impreza + WPBakery):** can the page builder build this section economically, or does it need custom code that blows the budget? The dial-3/4 signature must map to what Impreza / WPBakery rows and elements (plus light custom CSS) can actually do. Kill or scope infeasible moves now, not at handoff.
- **Track B (Next.js):** any heavy interaction (WebGL, complex scroll-linking) has a real implementation plan and a performance budget.

## Pre-ship checklist (the gate)

- [ ] `body.scrollWidth === viewport` at 360 and 1440 (no horizontal overflow).
- [ ] One section rhythm; one container; one spacing scale; one border / radius / shadow baseline.
- [ ] No `left:-9999px`; lists reset; bento spans fill whole rows (no orphan).
- [ ] Hover never hides overlays (checked with `elementFromPoint`); card hover changes no opacity / display.
- [ ] Themed rail scrollbars; accordions animate open and closed; buttons sized by role; no animated counters.
- [ ] AA contrast everywhere; visible focus rings; 12 px minimum; full-bleed overlays keep AA.
- [ ] Content visible with JS off; reveals have a failsafe; reduced-motion respected.
- [ ] Imagery vetted: no CGI sheen, no fabricated people, real alt text. (See `image-generation.md`.)
- [ ] Every primary page built and rich; no inner page thinner than the home.
- [ ] Anti-AI pass clean (Step 6): no em-dash, no counters, no markdown blocks, no canonical fonts.
- [ ] Checked at 360 / 768 / 1024 / 1280 / 1440 on a real server, DOM-verified.
- [ ] Feasible on the chosen track.
