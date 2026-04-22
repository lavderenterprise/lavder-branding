# Imagery

## Principles

1. **Real over rendered.** We prefer photography of real people, real spaces, real products. No stock people in glass offices giving thumbs up.
2. **High contrast, low saturation.** Images lean dark and controlled. Saturation is adjusted down; contrast is pushed up.
3. **One subject per frame.** A single focus. If the frame is crowded, it dilutes the message.
4. **Negative space is content.** A lot of Lavder imagery is 60%+ empty. The subject lives off-center. Text lives in the empty.

## Photography direction

- **Warm highlights, cool shadows.** Color grade pushes highlights slightly toward the orange register (to echo the brand color without recoloring) and shadows toward cool blue-gray.
- **Grain permitted.** Subtle film grain (2–5%) is welcome at print sizes. Never on UI screenshots.
- **No heavy vignettes.** Light vignettes (−10% corner exposure) at most.
- **Landscape orientation** for heroes. Portrait for editorial features.

## Illustration direction

Illustration is rare in Lavder. When used, follow:

- **Geometric primitives** — circles, rectangles, simple arcs.
- **Monochromatic** — one brand color on `ink` or `surface`, with neutrals for structure.
- **Isometric or flat** — never skeuomorphic. Never "corporate Memphis".
- **SVG** — always. No raster illustrations.

## Screenshots & product imagery

- **Device-free by default.** A product screenshot is more honest in a flat frame than wrapped in a rendered laptop.
- **Drop shadow `shadow.xl`** if the screenshot sits on `surface`. Rounded at `radius.lg`.
- **1px border** of `neutral-200` on top of the shadow, to prevent edge-melt on off-white backgrounds.
- **Dark-mode screenshot** on `ink` surfaces. Never a light screenshot on a dark surface.

## File conventions

| Format | Use                                                  |
|--------|------------------------------------------------------|
| SVG    | Illustrations, icons, diagrams, logos                |
| WebP   | Photos served to web (primary)                       |
| JPG    | Fallback / email                                     |
| PNG    | Only when transparency is essential                  |
| AVIF   | Opt-in when bandwidth is the priority (future)       |

Filenames: `kebab-case-descriptive.ext`. Example: `bucharest-office-meeting-room.webp`.

Organize by subject, not by page. A photo used on three pages lives in `assets/images/` once, not three times.

## Alt text

Every image in a surface visible to users requires alt text. Follow these rules:

- **Functional images** (the image IS the information): describe what it shows. `"Bar chart showing 47 sites shipped in 2025"`.
- **Decorative images** (purely visual, no information): empty alt `alt=""`. Screen readers skip.
- **Linked images** (the image IS the link): describe the destination. `"Open case study: Nike Italia"`.

No alt text starting with *"Image of"*. Screen readers already announce it.

## Don'ts

- Don't use AI-generated photography of humans as a substitute for real humans. Illustrations from AI are fine; people are not.
- Don't filter photos with Instagram-style presets (Clarendon, Valencia, etc.).
- Don't place white text on photography without a 30%+ ink overlay or a solid backing shape.
- Don't stack three-or-more images edge-to-edge. Keep breathing room (`space.8` or more).
- Don't watermark images with the LVDR mark. The mark belongs in the layout, not baked into photos.
