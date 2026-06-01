# Fonts : the rotating non-canonical library

Type is the fastest way a site reads as "designed" or as "AI". The rule is simple: **distinctive, characterful faces, always from Google Fonts (so the build stays portable), never the canonical ones, and never the same pairing two projects running.** Pick a pairing that fits the brand and the push dial, then log it in the ledger so the next project rotates away.

## Banned as primary faces

These read as defaults or as the AI/template signature. Do not use them as the display or body face (a client brand that genuinely uses one is the only exception, flagged in the brief):

`Inter` , `Roboto` , `Arial` , `Helvetica` , `system-ui` , `Open Sans` , `Lato` , `Nunito` (plain), `Poppins` , `Montserrat` , and `Space Grotesk` as a reflex (it has become its own template; use only with a strong reason).

## How to pair

- **Display does the character; body stays clean.** One expressive display face for headings + the signature, one calm, readable face for body and UI. Never set body or UI controls in the display face.
- **Contrast the pair.** High-contrast serif + grotesque; or a characterful grotesque + a warm humanist body. Avoid two faces that look almost the same.
- **Scale by dial.** Dial 1 to 2: the character lives in the choice and the rhythm. Dial 3 to 4: the display can go huge and loud (tight tracking, italics, ligatures, mixed weights).
- **Load only the weights you use.** Variable fonts where possible; subset to Latin.

## The library (pick, then rotate)

Editorial / luxe / high-contrast serif:
- `Fraunces` + `Hanken Grotesk`
- `Bodoni Moda` + `Hanken Grotesk` (used : Osteria concept)
- `Cormorant Garamond` + `Figtree`
- `Playfair Display` + `Mulish`
- `DM Serif Display` + `Mulish` (used : Osteria archetype)
- `Libre Caslon Display` + `Albert Sans`
- `Marcellus` + `Manrope`
- `Italiana` + `Onest`
- `Newsreader` (italic) + `Public Sans`

Modern / refined / tech-leaning grotesque:
- `Schibsted Grotesk` + `Spline Sans`
- `Bricolage Grotesque` + `Figtree`
- `Familjen Grotesk` + `Hanken Grotesk`
- `Archivo` (or `Archivo Expanded`) + `Archivo`
- `Sora` + `Onest`
- `Plus Jakarta Sans` (display weights) + `Plus Jakarta Sans` (used : Scadenza landing)
- `Hanken Grotesk` + `Hanken Grotesk` (one family, varied weight)

Expressive / bold / display-led (dial 3 to 4):
- `Syne` + `Inter Tight`-alternative `Figtree`
- `Unbounded` + `Albert Sans`
- `Anton` (or `Big Shoulders Display`) + `Hanken Grotesk`
- `Bricolage Grotesque` (huge) + `Spline Sans`
- `Instrument Serif` (display, italic) + `Geist`-alternative `Onest`

Heritage / warm / characterful:
- `Spectral` + `Mulish`
- `EB Garamond` + `Mulish`
- `Young Serif` + `Hanken Grotesk`
- `Petrona` + `Figtree`

Mono accent (for utilitarian / technical / a wireframe-y signature, used sparingly with one of the above):
- `Space Mono` , `JetBrains Mono` , `IBM Plex Mono` , `Sometype Mono` , `Martian Mono` , `DM Mono`.

This list is a seed, not a cage: any beautiful Google face that is not on the banned list is fair game. The discipline is choosing with intent and rotating.

## Rotation rule (anti-repeat)

Before locking a pairing, check the recent rows of [`concept-ledger.md`](./concept-ledger.md): do not reuse a display face used on the last project in the same archetype, and avoid repeating the exact pairing across any two consecutive projects. Record the chosen pairing on the new ledger row. The point is a different, deliberate type voice every time, the opposite of "Inter everywhere".

## Already used (rotate away from these next)

- Officine Lario (corporate) : Space Grotesk + Inter (legacy, predates this rule).
- FIORELA (ecommerce) : Fraunces + Nunito Sans.
- Studio Legale Vittori (servizi) : Spectral + Inter (legacy body).
- Osteria del Borgo (locale archetype) : DM Serif Display + Mulish ; (locale concept) Bodoni Moda + Hanken Grotesk.
- Scadenza (landing) : Plus Jakarta Sans.
- Brio (portfolio) : Space Grotesk (oversized) + Inter (legacy).

Several legacy examples used Inter / Space Grotesk before this rule existed: new work does not.
