# Step 5 : Build

Now assemble the pages against the fixed targets from Steps 1 to 4 (the dial, the direction note, the art-direction note, the elements list). Build in a fixed order so the system holds together, and keep spacing and margins coherent throughout. The art direction is the *what*; this step is the disciplined *how*.

## Build order (do not jump ahead)

1. **Tokens first.** Define CSS variables before any markup: the palette (dominant, surfaces, one accent, neutrals), the type scale, the spacing scale, the radius set, the shadow, the motion easing/duration. Everything downstream references these. This is what keeps a page coherent.
2. **Structure (sections, low-fi in your head or in a wireframe for Tier 3).** Order the sections per archetype, place the signature moment, plan the composition rhythm (which side carries weight, where the grid breaks, light vs dark bands). One job per section, one primary action per fold.
3. **Components.** Drop in the pulled, re-skinned elements from Step 4. Build interaction states with them: hover, focus-visible, active, disabled, loading, empty, error.
4. **Motion.** Add the one orchestrated load moment, the scroll reveals (visible by default, never content stuck at opacity 0), and the hover language. Reduced-motion path for everything.
5. **Imagery.** Place real or camera-real images (see [`image-generation.md`](./image-generation.md)), with real alt text. One subject per frame. Never fabricated people.

## The spacing and margin system (coherence is the craft)

Incoherent spacing is the fastest way a page looks amateur or "AI-assembled". Lock one system and obey it everywhere:

- **One spacing scale.** Choose a base step (4 px or 8 px) and use only multiples of it. Off-scale values (`17px`, `23px`) are banned. Same gaps, paddings and margins come from the same scale across the whole site.
- **One section rhythm.** Every full-width section (light, dark, full-bleed alike) uses the same vertical padding (a good reference: 88 px mobile / 112 px desktop). Do not hand-tune padding per section: uneven section padding is the number-one cause of a page that "feels broken". Heroes and media bands may be taller via `min-height`, but their inner content keeps the same vertical inset.
- **One container.** All content lives in a single container (`width:100%; min-width:0; max-width ~1180 to 1240px`, auto side margins, one gutter). Left and right edges then line up across every section. A wider or narrower container needs a reason.
- **One border, one radius set, one shadow.** Pick them once (the art direction may use a second, deliberate radius for the signature element, but the baseline is one). Communicate elevation with the border plus one soft shadow, not ad-hoc outlines.
- **Vertical rhythm in type.** Consistent margins between heading and body, between stacked blocks. Use a small set of spacing utilities, not bespoke margins per element.

## Type (from the rotating set)

Use the display + body pairing chosen at intake from [`fonts.md`](./fonts.md). Always Google Fonts (portable build). Never the canonical fonts, never the overused designer defaults, never the same pairing as the previous project. The display face does the character work; the body face stays clean and readable. Twelve px minimum, sensible line-height, negative tracking on large display, all-caps kept to a few words.

## Rich and complete (no thin pages)

- **Build every primary page** in the sitemap, not just the home. On Tier 2 each primary page carries 6+ sections; on Tier 3, 7 to 12. Footer excluded.
- **No inner page thinner than the home.** A rich home in front of half-empty inner pages is the most common failure. Each page earns its own opener, its own imagery, its own two or three distinctive moments. If a page has nothing to fill it, that is a content / IA problem to raise, not a reason to ship short folds.
- **Vary and balance section to section.** Do not stack three identical card grids; do not give two adjacent sections the same layout; alternate image / copy sides so the eye zig-zags; never jam content to one edge leaving an empty half. Alternate section backgrounds (with atmosphere, not flat fills).

## Robustness baked in while building (verified in Step 7)

Build these in from the start so the quality pass is a confirmation, not a rescue:
- `body { overflow-x: clip }`; container `width:100%; min-width:0`; never position helpers at `left:-9999px` (use the clip / sr-only pattern).
- Reset list padding on nav/footer lists; `box-sizing:border-box` everywhere.
- Overlays that sit on an image that scales on hover get an explicit `z-index` (a transformed image otherwise paints over earlier-in-DOM siblings and they vanish).
- Bento / feature grids: the cell spans must fill whole rows, no orphan cell.
- Accordions animate open and closed; rails get a themed (not default grey) scrollbar; inline buttons are sized to role.

## Output of Step 5 (the gate)

Every primary page built, rich, on one coherent spacing system, in the rotating fonts, with the pulled elements re-skinned and the signature moment present. Then run Step 6 (anti-AI) and Step 7 (quality). If a page came out thin or a second spacing system crept in, fix it here before the passes.
