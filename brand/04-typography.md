# Typography

Two typefaces, assigned by role. One handles presence. One handles information.

## Typefaces

### TWK Lausanne — headings
Designed by **Dinamo**. Licensed — verify license per deployment.
Used for: h1–h4, hero display, large numbers, marketing callouts.

Weights available (100 – 1000 + italics). In production we use:

| Weight | Role                                             |
|--------|--------------------------------------------------|
| 300    | Display-light for large quotes, editorial-feel   |
| 400    | Regular — rare, only in large settings           |
| 500    | Section titles (h3, h4)                          |
| 600    | Headline default (h2)                            |
| 700    | Hero default (h1, display)                       |
| 800    | Numbers, stats, brand moments                    |
| 900    | Reserved for display / stat emphasis             |

### Inter — body
Designed by **Rasmus Andersson**. OFL — free to ship.
Used for: body copy, UI, labels, micro-copy, tables.

Weights in production: 400 (regular), 500 (medium), 600 (semibold), 700 (bold).

## Scale

The scale is `1.25` (major third) from `md` upward. Fluid sizes are used for hero display.

| Token           | Size         | Use                                     |
|-----------------|--------------|-----------------------------------------|
| `fs.2xs`        | `11px`       | Eyebrow labels, legal micro-copy        |
| `fs.xs`         | `12px`       | Captions, table headers                 |
| `fs.sm`         | `14px`       | Secondary UI text, metadata             |
| `fs.md`         | `16px`       | Body default                            |
| `fs.lg`         | `18px`       | Body emphasis, lead paragraph           |
| `fs.xl`         | `20px`       | h5                                      |
| `fs.2xl`        | `24px`       | h4                                      |
| `fs.3xl`        | `30px`       | h3                                      |
| `fs.4xl`        | `36px`       | h2 (mobile)                             |
| `fs.5xl`        | `48px`       | h2 (desktop), h1 (mobile)               |
| `fs.6xl`        | `60px`       | h1 (desktop)                            |
| `fs.7xl`        | `72px`       | Hero                                    |
| `fs.8xl`        | `96px`       | Large hero                              |
| `fs.display`    | `clamp(3rem, 8vw, 7rem)` | Responsive hero display     |

## Line-height

| Token      | Value | Use                                       |
|------------|-------|-------------------------------------------|
| `lh.none`  | 1     | Display numbers, stat counters            |
| `lh.tight` | 1.1   | h1, h2 (large TWK settings)               |
| `lh.snug`  | 1.25  | h3, h4                                    |
| `lh.normal`| 1.5   | Body, lists                               |
| `lh.relaxed`| 1.625| Long-form reading                         |
| `lh.loose` | 2     | Rare, only for captioned imagery          |

## Letter-spacing (tracking)

TWK Lausanne at display sizes requires negative tracking to feel tight:

| Size              | Tracking  |
|-------------------|-----------|
| `fs.md` – `fs.xl` | `0`       |
| `fs.2xl`          | `-0.01em` |
| `fs.3xl` – `fs.4xl`| `-0.02em`|
| `fs.5xl` – `fs.7xl`| `-0.03em`|
| `fs.8xl` / display | `-0.04em`|

Small-caps eyebrows and overlines: `fs.2xs`, uppercase, tracking `0.12em` (widest), weight 600.

Inter does not need tracking adjustments in the `md`–`lg` range. In tables and dense UI, `-0.005em` is acceptable.

## Styles reference

```css
/* h1 — Hero */
font-family: var(--lvdr-font-heading);
font-weight: 700;
font-size: clamp(2.5rem, 6vw, 4.5rem);
line-height: 1.05;
letter-spacing: -0.04em;

/* h2 — Section */
font-family: var(--lvdr-font-heading);
font-weight: 600;
font-size: clamp(2rem, 4vw, 3rem);
line-height: 1.1;
letter-spacing: -0.02em;

/* h3 */
font-family: var(--lvdr-font-heading);
font-weight: 500;
font-size: 1.875rem;
line-height: 1.25;
letter-spacing: -0.01em;

/* Body */
font-family: var(--lvdr-font-body);
font-weight: 400;
font-size: 1rem;
line-height: 1.625;

/* Eyebrow */
font-family: var(--lvdr-font-body);
font-weight: 600;
font-size: 0.6875rem;
letter-spacing: 0.12em;
text-transform: uppercase;
color: var(--lvdr-color-brand);
```

## Pairings that work

- **TWK 700** display + **Inter 400** body (editorial hero).
- **TWK 300** quote + **Inter 500** attribution (testimonials).
- **TWK 800** stat number + **Inter 500** label below (stat blocks).

## Don'ts

- Never set body copy in TWK Lausanne. TWK is for heads only.
- Never set UI controls (buttons, inputs, nav) in TWK. Use Inter.
- Never go below `fs.xs` (12 px). Accessibility floor.
- Never use decorative fonts. TWK + Inter are the system. Exceptions require the design-lead's approval and a token update.
- Never use italic Inter on headings or large display. Italic Inter is for body-level emphasis only.
- Never set all-caps longer than four words. All-caps is for eyebrows and short labels.
