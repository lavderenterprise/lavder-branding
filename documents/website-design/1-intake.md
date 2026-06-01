# Step 1 : Intake

Goal: capture the few base directions that constrain everything downstream, and **lock the graphic-push dial**. Nothing here is decided unilaterally by Lavder: the human (client, or the account owner standing in for them) picks, through a short interactive quiz. The point of the whole pipeline is controlled, bespoke output: the human steers, Lavder executes.

Run this as an `AskUserQuestion`-style flow (multiple choice, always with an "other" escape for custom values). Record the answers in the brief (template at the bottom). Then, and only then, move to Step 2.

## The quiz (ask, do not assume)

1. **Client and sector.** Who is this for, what do they sell, who buys it. One line.
2. **Brand assets.** Do they have a brand (logo, colors, fonts, tone) or not?
   - Has identity : extract it exactly (see "Brand extraction").
   - No identity : run "Brand-express" (we propose a direction).
3. **Voice / register.** How should the copy sound: formal `voi` (B2B, institutional), familiar `tu` (B2C, warm), or a specific tone (authoritative, playful, luxe, plain-spoken, editorial). Pick one and one or two adjectives.
4. **Site type (archetype).** ecommerce / corporate / servizi / locale / landing / portfolio. This seeds the page set and the closest `reference-*/` starting point.
5. **Tier.** Tier 1 Landing / Tier 2 Vetrina / Tier 3 Complesso. Sets the gates and the page count.
6. **Build track.** Track A WordPress (Impreza + WPBakery) or Track B Next.js. If unsure, default by tier (1 to 2 lean A, 3 splits) and quote both in the preventivo.
7. **Graphic-push dial (the decisive one).** 1 Sober / 2 Refined / 3 Expressive / 4 Extreme. See the dial table in the README. Confirm it against the track: dial 4 generally needs Track B or a scoped, page-builder-feasible signature on Track A.
8. **Pages.** Default: every primary page in the sitemap, each built in full (never thin stubs). The client may scope down, but each chosen page is complete.
9. **Imagery strategy.** Real client assets, real category stock as placeholders, AI-generated (see `image-generation.md`), or a mix. Never fabricated AI people.
10. **Hard constraints.** Deadlines, must-keep brand rules, accessibility level, languages (IT default, EN-ready), anything that limits the art direction.

## Brand extraction (client has identity)

Lift the brand **exactly**, do not "improve" it without saying so:
- Colors: exact hex for primary, secondary, neutrals. Note which one can be the single loud accent and whether it passes contrast as text (if not, it lives on buttons, not body).
- Type direction: their typefaces if licensed/Google-available; otherwise the nearest distinctive Google pairing (see `fonts.md`), flagged as a substitution.
- Logo: get the real file (SVG preferred). If only a raster, note it.
- Voice samples: pull two or three real sentences they already use, to match register.

## Brand-express (client has no identity)

Propose a direction to approve before building, do not silently invent:
- A palette (dominant + one sharp accent, per the art-direction layer, not a timid even spread).
- A type pairing from `fonts.md` (distinctive display + clean body, never the canonical fonts).
- A logo path: a text monogram, or two or three logo directions, or one generated mark. Keep it simple and real.
- One line of brand voice.
Record these as "express" in the brief so the ledger knows the brand was Lavder-created.

## What the brief records (output of Step 1)

A short block that the rest of the pipeline reads:

```
CLIENT:        <name, sector, one-line offer>
BRAND:         client | express        accent: <#hex>   neutrals: <...>
VOICE:         voi | tu  +  <2 adjectives>
ARCHETYPE:     ecommerce | corporate | servizi | locale | landing | portfolio
TIER / TRACK:  Tier <1|2|3>  /  Track <A|B>
PUSH DIAL:     <1 Sober | 2 Refined | 3 Expressive | 4 Extreme>
PAGES:         <list>
IMAGERY:       <real | stock | AI | mix>
FONTS:         <chosen display + body from fonts.md, with the rotation reason>
CONSTRAINTS:   <deadlines, brand rules, a11y, languages>
DIVERGE FROM:  <filled in Step 2 from the concept-ledger>
```

Gate to pass before Step 2: the dial is chosen and written, the archetype + tier + track are locked, and the brand layer is either extracted or expressed. If the dial and the track disagree (for example dial 4 on Track A with no feasible signature), resolve it now, not at handoff.
