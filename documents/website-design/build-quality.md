# Build quality & QA

The craft layer (README §1) as a build-and-verify checklist. These are the rules, plus the recurring
failures that make a mockup "look broken" if skipped. Run the checklist before showing any prototype to a
client. Most of this was paid for in the Officine Lario build.

## 1. Layout robustness (what keeps margins sane)

- **One section rhythm.** Every full-width section uses the same vertical padding (the reference: 88 px mobile / 112 px desktop). No per-section `padding` tuning, that is what makes a page feel uneven. Heroes and feature media bands may be taller via `min-height`, but the inner content keeps the same vertical inset.
- **One container.** All content lives in a single `.container` (max-width ~1200 px, auto side margins, fixed gutter, `width:100%; min-width:0`). Left and right edges then line up across every section.
- **One border, one radius set.** A single hairline (`neutral-200` / `--line`) plus the chosen radius set (e.g. mixed: soft cards, squared buttons). Elevation = that border + one soft shadow, never ad-hoc outlines.
- **Stacking:** when a card **overlaps** an image, the card needs `position:relative; z-index` above it. A `position:relative` image otherwise paints over a `static` sibling and the card disappears behind it.
- **Grid fill:** a feature grid / bento must fill with no orphan empty cell. A 2×2 feature needs a **4-column** grid (feature 2×2 + four cells fill the other 2×2), not 3 columns (which leaves a hole).
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

## 4. Responsive

Design and check at **360 · 768 · 1024 · 1280 · 1440 px**. At each width: no section's text touches the right edge; the hero and media bands are full-bleed but their content stays in the container; the nav collapses to the mobile menu and it opens.

## 5. How to verify (don't trust one screenshot)

- View on a **real server** (`python3 -m http.server`, a localhost URL), not just `file://`. `file://` caches CSS/JS aggressively and hides your latest changes; during iteration, cache-bust (`styles.css?v=N`).
- For **JS-driven layout** (reveals, smooth scroll), a single screenshot lies (content mid-reveal, scroll hijacked by smooth-scroll). Read the **real DOM** instead: element bounding boxes and computed styles, and `document.body.scrollWidth` vs the viewport width to catch overflow.
- Confirm the deliverable in the **client's actual browser and width** before sign-off.

## 6. Pre-ship checklist

- [ ] One section rhythm; one container; one border / radius set.
- [ ] `document.body.scrollWidth` == viewport width at 360 and 1440 (no horizontal overflow).
- [ ] No `left:-9999px`; lists reset; overlapping cards have `z-index`; bento has no empty cell.
- [ ] Content visible with JS disabled; reveals have a failsafe; reduced-motion respected.
- [ ] AA contrast on every full-bleed overlay; visible focus rings; 12 px minimum type.
- [ ] Imagery vetted: no CGI sheen, no fabricated people, no invented text. See [`image-generation.md`](./image-generation.md).
- [ ] Realistic copy in the client's voice; no lorem, no "Test User".
- [ ] Checked at 360 / 768 / 1024 / 1280 / 1440 in a real browser, not just `file://`.
