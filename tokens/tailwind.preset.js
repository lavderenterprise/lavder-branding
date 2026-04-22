/**
 * Lavder Enterprise — Tailwind preset
 * Use in any Tailwind project:
 *
 *   // tailwind.config.js
 *   const lvdr = require('@lavder/branding/tokens/tailwind.preset');
 *   module.exports = { presets: [lvdr], content: [...] };
 *
 * Class names stay native Tailwind (e.g. bg-brand, text-ink, font-heading).
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      ink: '#111113',
      'ink-pure': '#000000',
      surface: '#FFFFFF',

      brand:        '#F87016',
      'brand-accent':'#FCA400',
      'brand-dark': '#D05A0E',

      neutral: {
        50:  '#FAFAFA',
        100: '#F4F4F5',
        200: '#E4E4E7',
        300: '#D4D4D8',
        400: '#A1A1AA',
        500: '#71717A',
        600: '#52525B',
        700: '#3F3F46',
        800: '#27272A',
        900: '#18181B',
      },

      success: '#22C55E',
      warning: '#EAB308',
      error:   '#EF4444',
      info:    '#3B82F6',

      white: '#FFFFFF',
      black: '#000000',
    },

    fontFamily: {
      heading: ['"TWK Lausanne"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      body:    ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      sans:    ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      mono:    ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
    },

    fontSize: {
      '2xs':    ['0.6875rem', { lineHeight: '1rem' }],
      xs:       ['0.75rem',   { lineHeight: '1rem' }],
      sm:       ['0.875rem',  { lineHeight: '1.25rem' }],
      base:     ['1rem',      { lineHeight: '1.5rem' }],
      lg:       ['1.125rem',  { lineHeight: '1.75rem' }],
      xl:       ['1.25rem',   { lineHeight: '1.75rem' }],
      '2xl':    ['1.5rem',    { lineHeight: '2rem' }],
      '3xl':    ['1.875rem',  { lineHeight: '2.25rem' }],
      '4xl':    ['2.25rem',   { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
      '5xl':    ['3rem',      { lineHeight: '1.1',    letterSpacing: '-0.02em' }],
      '6xl':    ['3.75rem',   { lineHeight: '1.1',    letterSpacing: '-0.03em' }],
      '7xl':    ['4.5rem',    { lineHeight: '1.1',    letterSpacing: '-0.04em' }],
      '8xl':    ['6rem',      { lineHeight: '1',      letterSpacing: '-0.04em' }],
      display:  ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
    },

    letterSpacing: {
      tighter: '-0.04em',
      tight:   '-0.02em',
      normal:  '0',
      wide:    '0.02em',
      wider:   '0.05em',
      widest:  '0.12em',
    },

    lineHeight: {
      none: '1', tight: '1.1', snug: '1.25', normal: '1.5', relaxed: '1.625', loose: '2',
    },

    borderRadius: {
      none: '0', xs: '2px', sm: '4px', DEFAULT: '8px', md: '8px',
      lg: '12px', xl: '16px', '2xl': '24px', '3xl': '32px', full: '9999px',
    },

    boxShadow: {
      xs:  '0 1px 2px rgba(17, 17, 19, 0.06)',
      sm:  '0 1px 3px rgba(17, 17, 19, 0.08), 0 1px 2px rgba(17, 17, 19, 0.04)',
      DEFAULT: '0 1px 3px rgba(17, 17, 19, 0.08), 0 1px 2px rgba(17, 17, 19, 0.04)',
      md:  '0 4px 6px rgba(17, 17, 19, 0.08), 0 2px 4px rgba(17, 17, 19, 0.04)',
      lg:  '0 10px 25px rgba(17, 17, 19, 0.10), 0 4px 10px rgba(17, 17, 19, 0.06)',
      xl:  '0 20px 40px rgba(17, 17, 19, 0.14)',
      '2xl': '0 30px 60px rgba(17, 17, 19, 0.20)',
      'brand-glow': '0 0 0 6px rgba(248, 112, 22, 0.12), 0 8px 24px rgba(248, 112, 22, 0.28)',
      none: 'none',
    },

    extend: {
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #F87016 0%, #FCA400 100%)',
        'gradient-ink':   'linear-gradient(180deg, #111113 0%, #000000 100%)',
      },

      maxWidth: {
        reading:  '72ch',
        'page-xl':'1200px',
        'page-2xl':'1440px',
      },

      transitionDuration: {
        instant: '0ms',
        fast:    '150ms',
        DEFAULT: '240ms',
        base:    '240ms',
        slow:    '400ms',
        slower:  '640ms',
      },

      transitionTimingFunction: {
        emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
      },

      zIndex: {
        base: '0', dropdown: '1000', sticky: '1020', fixed: '1030',
        'modal-backdrop': '1040', modal: '1050', popover: '1060', tooltip: '1070', toast: '1080',
      },
    },
  },
};
