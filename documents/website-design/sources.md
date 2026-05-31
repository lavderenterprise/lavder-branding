# Sources

Where to pull components, sections, animation, inspiration, icons and imagery when building a mockup. **Always re-skin to the client's brand layer** (README §1): a pulled section must look like the client, not like the kit's demo. This is a living list; links drift, verify periodically. Last curated 2026-05.

## How to use this

1. Pick sections from a **kit** to assemble the page fast.
2. Restyle every pulled block to the client's tokens (color, type, radius, spacing).
3. Add **animation** only where it earns its place, governed by the brand motion discipline (`/brand/08-motion.md`): purposeful, 240 ms default, ease-out, `prefers-reduced-motion` honored, no gimmicks.
4. Use **inspiration** galleries to find a direction, never to copy a layout wholesale.
5. Log the result's fingerprint in [`concept-ledger.md`](./concept-ledger.md).

---

## Section & page kits (free)

The fastest base for hi-fi marketing pages. Tailwind-native.

| Kit | URL | Notes |
|---|---|---|
| **Preline UI** | https://preline.co | Largest free marketing-block collection: heroes, pricing, features, testimonials |
| **DaisyUI** | https://daisyui.com | Highest adoption, Tailwind v4, 35 themes, zero JS. Great for rapid prototyping |
| **Flowbite** | https://flowbite.com | Big component set, packages for React/Vue/Svelte/HTML |
| **HyperUI** | https://www.hyperui.dev | Copy-paste sections, e-commerce + marketing |
| **Tailblocks** | https://tailblocks.cc | Quick ready-made UI sections |
| **FlyonUI** | https://flyonui.com | Semantic-class Tailwind components |

## Animated / "belli già fatti" components

Use for visual flair. Keep only what passes the motion discipline.

| Library | URL | Notes |
|---|---|---|
| **react-bits** | https://www.reactbits.dev | #2 JS Rising Stars 2025; default starting point for landing/marketing |
| **Aceternity UI** | https://ui.aceternity.com | Strong visual effects (3D cards, beams). Heavy: use sparingly |
| **Magic UI** | https://magicui.design | Polished micro-interactions, marketing animations |
| **Skiper UI** | https://skiper-ui.com | Animation-friendly components on top of shadcn, smooth-scroll effects |
| **ogBlocks** | https://ogblocks.dev | Framer-Motion aesthetics as production-ready blocks |

## App / dashboard components (mainly Track B)

For application-like UI, dashboards, product areas.

| Library | URL | Notes |
|---|---|---|
| **shadcn/ui** | https://ui.shadcn.com | The base for Track B. Copy-in source, full ownership, accessible |
| **21st.dev** | https://21st.dev | Gallery of React blocks/components |
| **Origin UI** | https://originui.com | Tailwind + React component set |
| **Tremor** | https://tremor.so | Dashboard + chart components |

## Animation & interaction

| Tool | URL | Use |
|---|---|---|
| **GSAP + ScrollTrigger** | https://gsap.com | Now **100% free**, all plugins. Scroll sequences, pinned sections, parallax, timelines. The workhorse for marketing motion |
| **Lenis** | https://github.com/darkroomengineering/lenis | Smooth/inertia scroll engine (3 KB). Industry standard. Pairs with GSAP ScrollTrigger |
| **Motion (Framer Motion)** | https://motion.dev | React UI state transitions, layout animations (Track B) |
| **AOS** | https://michalsnik.github.io/aos | Lightweight scroll-reveal for simple cases |
| **CodePen** | https://codepen.io | Find and adapt isolated effects/snippets. Verify license before reuse |

> Motion rule: a pinned hero reveal is fine; bouncing "scroll" words, perpetual breathing ornaments, and pervasive scroll-linking are not. Every animation needs a `prefers-reduced-motion` path.

## Inspiration galleries

Find direction, not layouts to clone.

| Gallery | URL | Best for |
|---|---|---|
| **Godly** | https://godly.website | Motion-led design, tighter curation than Awwwards |
| **Refero** | https://refero.design | Real production web, organized by page type / component |
| **Mobbin** | https://mobbin.com | Real apps, mobile + web flows |
| **Land-book** | https://land-book.com | Landing pages, filter by section (pricing, features...) |
| **Lapa Ninja** | https://www.lapa.ninja | Landing-page reference |
| **Awwwards** | https://www.awwwards.com | Award-level, experimental |

## Fonts

The font pool is the **entire Google Fonts library** (~1,700 families, open-licensed, free to self-host or serve). Any family is fair game for the client brand layer; pick in the design-parameters quiz (README §9.0).

- **Browse / pick:** https://fonts.google.com (filter by serif / sans / slab / mono / display, by weight, by language).
- **Load (prototype):** the CSS2 API, e.g. `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap`. Any family/axis is requestable the same way.
- **Self-host (build):** download via [google-webfonts-helper](https://gwfh.mranftl.com) or the `@fontsource/*` npm packages; serve woff2 locally for performance and GDPR (no Google call at runtime).
- **Discipline (craft layer):** a display face for headings + a clean workhorse for body/UI; never set body or UI in a display face; respect the type scale and the 12 px floor (README §9.2). Variable fonts preferred when available.
- **Pairing help:** Google Fonts "pairings" tab, [Fontpair](https://www.fontpair.co), [Fontjoy](https://fontjoy.com).

Non-Google faces (Geist, commercial foundries, the client's licensed brand font) are allowed when the client owns/licenses them: drop the files in and `@font-face` them. Default to Google Fonts unless the client has a defined brand typeface.

## Icons

| Set | URL | Notes |
|---|---|---|
| **Lucide** | https://lucide.dev | **Canonical** (brand default) |
| Phosphor | https://phosphoricons.com | Multiple weights, alternative |
| Heroicons | https://heroicons.com | Pairs with Tailwind |

Pick **one** icon set per project. No drop shadows or gradients on icons (`/brand/06-iconography.md`).

## Imagery

| Source | URL | Notes |
|---|---|---|
| **Unsplash** | https://unsplash.com | Placeholders during design |
| **Pexels** | https://www.pexels.com | Placeholders during design |

Placeholders only. **Swap for the client's real assets before build** (`/brand/07-imagery.md`): real over rendered, never AI-generated humans, optimize to WebP.

## AI image generation (Lavder ImageGen)

When the imagery strategy is "AI-generated" (README §9.0), use the **Lavder ImageGen** gateway (separate service, `~/Claude/lavder-imagegen`): a prompt-to-image API that routes through **OpenRouter** to **Nano Banana (Gemini 2.5 Flash Image)** by default, or any other OpenRouter image model chosen per call. Config-driven (insert the OpenRouter key online via `/admin` or env), API-callable by builds and other services, VPS-ready (Docker).

- CLI (build-time): `node cli.js --prompt "dark industrial CNC, photoreal" --aspect 16:9 --out hero`
- API: `POST /v1/images/generate { prompt, model?, aspect_ratio?, images? }` (image editing/fusion via `images`).
- Models: `nanobanana` (default); add Flux/SDXL/others in the alias map.
- Requires the OpenRouter key. Without it, fall back to real category stock (above).

## Track A build reference (WordPress)

Not for the mockup, but to keep the design **feasible and economical** to build on Impreza + WPBakery.

| Reference | URL | Use |
|---|---|---|
| **Impreza Pro demos** | https://impreza.us-themes.com | What the theme builds out of the box; section patterns that are cheap to assemble |
| **WPBakery elements** | (theme admin / docs) | The element set the design must map onto at handoff |

When a design idea has no economical Impreza/WPBakery equivalent, simplify it or move the project to Track B. Catch this at the feasibility check (README §8), not at handoff.

## Optional paid (not required)

- **Tailwind Plus** (https://tailwindcss.com/plus): premium marketing sections. One Lavder license covers all projects. Speeds up hi-fi but the free kits above cover most needs.
