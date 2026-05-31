# Image generation

How to produce imagery for a client website design, whether shot, sourced, or AI-generated (via
[Lavder ImageGen](./sources.md#ai-image-generation-lavder-imagegen)). The cardinal rule, from
[`/brand/07-imagery.md`](../../brand/07-imagery.md): **real over rendered**. Even an AI-generated image
must read as *a photograph taken for this client*, not as generic AI art.

## 1. Style follows use

There is no single image look. The right style is dictated by **archetype × mood × sector** (README §10-11),
the same way the layout is. The images must belong to *that client's world*:

- A precision-mechanics B2B supplier wants honest **documentary factory photography**.
- A winery or food producer wants warm **editorial heritage** photography.
- A clinic or studio wants **calm, clean, bright** light.
- An e-commerce product wants clean **product photography**.

Decide the photographic register in the design-parameters quiz (README §9.0, "imagery"), and keep it
**consistent across the whole set** so the site looks shot by one photographer.

## 2. The realism dial, and the AI trap

Three registers, picked per project:

| Register | When | 
|---|---|
| **Authentic photograph** | Default for almost every client site. Looks shot on a camera. |
| **Clean product / studio** | E-commerce, catalog, hardware on seamless. Even light is correct here. |
| **Illustration / 3D** | Rare. Only when the brand is explicitly graphic (some tech/SaaS). |

**The trap (this is the important part).** Asking an image model for *"photorealistic, ultra-detailed,
high detail, dramatic cinematic lighting, 8k"* produces the **hyperreal CGI sheen**: plasticky surfaces,
over-lit, impossibly clean, render-like. That is the **"finto" look to avoid**. To get a real camera photo
you prompt for **photography**, not for "realism". Counter-intuitive but reliable: the word *photorealistic*
makes it look fake; the words *documentary photograph, shot on a 35mm lens* make it look real.

## 3. How to prompt for a real photograph

Anatomy:

> `[subject + action]` + `[real context]` + `[camera + lens]` + `[light]` + `[grade / film]` + `[imperfection]` + `[negatives]`

- **Name the medium, not "realism":** *documentary photograph, editorial photo, candid reportage, product photograph*. Never *photorealistic render*.
- **Camera + lens:** *shot on a Canon/Nikon DSLR, 35mm or 50mm lens, medium format*; *shallow depth of field* for real optical blur.
- **Real light:** *available light, natural window light, overcast, factory fluorescents*. Avoid *dramatic cinematic volumetric lighting* unless you want the render look.
- **Grade / film:** *natural muted color, subtle film grain, shot on Kodak Portra / Fujifilm* (warmth for heritage/food).
- **Imperfection = realism:** *candid, lived-in, real working environment, slightly imperfect, minor wear*. Perfection reads as CGI.
- **Negatives (almost always):** *not a 3D render, not CGI, not hyperrealistic, no plastic look, no oversaturation, no text, no logos, no watermark*. Plus, per brand, **no people** unless real people are genuinely intended, and **never fabricate AI humans** as a subject (`/brand/07-imagery.md`).

## 3b. Detail standard: describe the entire frame

Vague prompts produce generic AI stock. Specify the **whole composition, element by element**, in this order:

1. **Medium + format**: "wide documentary photograph, 16:9".
2. **Foreground / midground / background**: name what is in each plane and *where* ("FOREGROUND right third: a 5-axis CNC center, spindle lowered onto a clamped steel block, a coolant arc; MIDGROUND left: two machines receding; BACKGROUND: tall windows, ductwork").
3. **The hero object**: material, finish, state, action ("freshly machined steel part, crisp milled facets, thin film of cutting oil, curled chips").
4. **Camera + lens + angle + depth of field**: "Nikon full-frame, 24mm, chest height, slight low angle, foreground sharp / background defocused".
5. **Light**: source, direction, quality ("cool daylight key from the windows, warm work-lamp fill, gentle directional shadows").
6. **Color + grade**: palette and saturation ("muted steel greys and cool blues, few warm amber accents, slightly desaturated, neutral white balance").
7. **Texture / imperfection**: "subtle sensor grain, faint vignette, lived-in, slightly imperfect".
8. **Negatives**: the anti-CGI + brand list (see below).

A good prompt is **4-8 sentences, not a phrase**. More specific = more controllable and less generic. Keep the *photographic* framing of §2-3: the detail describes a **photo**, never a "render".

> Worked example (Officine Lario hero, 16:9): *"Wide cinematic documentary photograph, 16:9, interior of a working precision machine shop, shot on a Nikon full-frame DSLR with a 24mm lens at chest height with a slight low angle. FOREGROUND right third: a large enclosed 5-axis CNC machining center, glass door half open, spindle lowered onto a clamped steel block with a thin fan of cutting coolant spraying off the cutter and fine curled chips on the bed. MIDGROUND left: a row of two more CNC machines receding in perspective, control panels glowing faint amber, a yellow steel safety pillar. BACKGROUND: tall industrial windows with soft overcast daylight, exposed ceiling ductwork and a mezzanine rail, blue-grey walls. Light: cool natural daylight key, warm overhead work-lamp fill, gentle directional shadows. Color: muted steel greys and cool blues, few warm amber accents, slightly desaturated. Foreground sharp, background softly defocused, subtle sensor grain, faint vignette. Candid factory reportage, not staged, not a render, not CGI. No people, no text, no logos, no watermark."*

## 4. Words to DROP (they cause the fake look)

Strike these from prompts unless you actually want a render:

> `hyperrealistic` · `ultra-realistic` · `ultra-detailed` · `hyper-detailed` · `8k` · `octane render` · `unreal engine` · `CGI` · `3D render` · `cinematic` · `studio-perfect` · `sharp focus everywhere`

## 5. Recipes by mood / sector

Pick the row, fill the subject. "Say this" goes into the prompt; "drop" is what to avoid.

| Mood / sector | Say this | Light | Drop |
|---|---|---|---|
| **Industriale / B2B tecnico** | documentary reportage photo, DSLR 35mm, candid, lived-in factory | available factory light | dramatic, cinematic, hyperreal |
| **Heritage / Made-in-Italy** | editorial photograph, medium format, warm, textured, film | natural window light, golden | clinical, neon, render |
| **Corporate / istituzionale** | clean editorial photo, 50mm, restrained, real office/site | soft daylight | staged stock-photo feel |
| **Clinico / wellness** | bright airy photograph, soft, low contrast, calm | diffuse natural light | moody, dark, dramatic |
| **Caldo / locale / food** | warm candid photograph, 35mm, appetizing, natural | warm available light | over-saturated, plastic |
| **E-commerce / prodotto** | clean product photograph, contextual or seamless | even softbox (studio OK here) | busy backgrounds, fake reflections |
| **Lusso / fashion** | editorial photograph, shallow depth of field, refined, film | controlled natural light | gaudy, oversaturated, CGI |

## 6. Technical (with Lavder ImageGen)

- **Tool:** Lavder ImageGen, `POST /v1/images/generate` (default model `nanobanana` = Gemini 2.5 Flash Image). API/CLI in [`sources.md`](./sources.md#ai-image-generation-lavder-imagegen).
- **Aspect per slot** (match the figure to avoid heavy cover-cropping): hero side panel `4:5`, landscape feature `4:3` / `16:9`, sector/portrait cards `3:4`, full-bleed hero `16:9`. Pass `aspect_ratio` per image.
- **Batch the set** in one `jobs[]` call (one prompt + aspect + filename per image) so the whole set is generated together and stays consistent.
- **Output → site:** convert to optimized WebP/JPG, drop into `reference-<archetype>/img/` under the **slot filename** (e.g. `hero-cnc.jpg`); if the name matches, no HTML edit is needed.
- **Resolution:** enough for the biggest slot (hero ≈ 1500 px wide); then compress.

## 7. Vet every image (the human gate)

AI imagery is never ship-on-trust. Eyeball each one and reject "almost right":

- **Geometry / nonsense:** warped machines, impossible mechanisms, melted parts, gibberish gauges.
- **Invented text / logos:** the model writes fake brand text even when told not to. Reject or regenerate.
- **The CGI sheen:** if it still looks like a render, re-prompt with more photography language + grain, fewer "detail" words.
- **No fabricated people** (brand). If a person slipped in, regenerate.
- **Set consistency:** one light and grade across the set, or the page looks like a collage.

## 8. Log the photographic register

Record the image style in the [concept-ledger](./concept-ledger.md) fingerprint (e.g. *"documentary DSLR,
available light, light grain"*), so a sibling client in the same archetype gets a deliberately different
photographic register, not the same one.

## 9. Case in point: Officine Lario

The first pass used *"photorealistic, high detail, dramatic moody lighting"* and the images came out
**hyperreal / CGI** (the "finto" effect). The corrected recipe reads as honest factory photography:

> ❌ *"...dramatic moody lighting with a subtle blue accent, photorealistic, high detail."*
>
> ✅ *"Documentary photograph of a CNC machining center cutting a metal part, coolant spray, real working
> machine shop, shot on a Canon DSLR 35mm lens, available factory light, natural muted color, subtle sensor
> grain, candid, slightly imperfect, not a render. No people, no text, no logos."*

Same subject, opposite feel. When in doubt: describe the **photo**, not the **realism**.
