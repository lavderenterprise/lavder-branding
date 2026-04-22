# Motion

Motion in Lavder is functional first, expressive second. It tells the user what changed, then adds character.

## Principles

1. **Purpose before personality.** Every transition should answer: *what did this tell the user?* If the answer is "nothing", remove it.
2. **Fast by default.** Our base duration is `240ms`. Most interactions should complete in 240 ms or less. Anything over 640 ms needs justification.
3. **Ease out, not linear.** Actions decelerate into rest. A door doesn't stop abruptly. Neither should a menu.
4. **Respect reduced motion.** Every animation must have a `prefers-reduced-motion: reduce` alternative (usually instant or opacity-only).

## Duration scale

| Token               | Value  | Use                                          |
|---------------------|--------|----------------------------------------------|
| `duration.instant`  | 0 ms   | State flips with no visible transition       |
| `duration.fast`     | 150 ms | Hover, focus ring, small opacity changes     |
| `duration.base`     | 240 ms | **Default.** Default for UI transitions      |
| `duration.slow`     | 400 ms | Page-level reveals, expressive moments       |
| `duration.slower`   | 640 ms | Hero animations, sequence choreography       |

## Easing

| Token                | Curve                                  | Use                                            |
|----------------------|----------------------------------------|------------------------------------------------|
| `easing.linear`      | `linear`                               | Crossfades, opacity-only, indeterminate spinners |
| `easing.in`          | `cubic-bezier(0.4, 0, 1, 1)`          | Element leaving the screen (accelerate out)    |
| `easing.out`         | `cubic-bezier(0, 0, 0.2, 1)`          | Element entering the screen (decelerate in)    |
| `easing.in-out`      | `cubic-bezier(0.4, 0, 0.2, 1)`        | Position shifts, A→B layout changes            |
| `easing.emphasized`  | `cubic-bezier(0.2, 0, 0, 1)`          | Brand moments — hero reveals, orange glow      |

Default for most UI: `easing.out`, `duration.base`.

## Patterns

### Hover

```css
transition: transform var(--lvdr-duration-fast) var(--lvdr-easing-out),
            box-shadow var(--lvdr-duration-fast) var(--lvdr-easing-out);
```

On hover: elevation up one shadow level (`sm → md`), optional `translateY(-2px)` for cards.

### Focus ring

```css
transition: box-shadow var(--lvdr-duration-fast) var(--lvdr-easing-out);
/* :focus-visible */
box-shadow: var(--lvdr-shadow-brand-glow);
```

Always visible. Always brand-tinted. Never suppress `:focus-visible` for aesthetic reasons.

### Page transition

Opacity + 8 px translate, `duration.slow` + `easing.out`. Never a 600 ms fade-to-white page wipe.

### Hero reveal

Stagger-in for hero children: 80 ms delay between siblings, `duration.slow`, `easing.emphasized`. Max 5 children in the stagger — more feels gimmicky.

### Orange glow (brand moment)

CTA buttons on marketing surfaces get a subtle `shadow.brand-glow` that animates in on first render and on hover. This is the one "expressive" motion moment we reserve for the brand color.

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Ship this at the top of the global stylesheet. Non-negotiable.

## Don'ts

- Don't bounce. Spring / bounce easing is reserved for very specific brand moments (if any), not default UI.
- Don't animate color directly on large surfaces — cross-fade with opacity if needed.
- Don't use parallax on body-copy sections. It's motion-sickness fuel.
- Don't chain more than 3 animations in sequence without user input. Autoplay sequences feel like 2012 portfolio sites.
- Don't use "scroll-linked" animations that tie subtle layout changes to scroll position. Occasional pinned hero reveal is fine; pervasive scroll-linking is not.
