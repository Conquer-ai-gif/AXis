import type { Config } from 'tailwindcss';

/**
 * Design Token System — Vercel-inspired dark theme
 * 80% neutral dark surfaces | 15% text hierarchy | 5% accent (blue only)
 *
 * Token map:
 *   --bg-base        #0B0F14  → black / bg-black
 *   --bg-surface-1   #0F141A  → surface.1
 *   --bg-surface-2   #111827  → surface.2
 *   --border-default #1F2937  → border.1
 *   --text-primary   #E5E7EB  → text.1 / amber.2
 *   --text-secondary #9CA3AF  → text.2 / amber.3
 *   --accent-primary #3B82F6  → amber.1 (all accent uses)
 *   --accent-hover   #2563EB  → amber.4
 *   --accent-dim     #1E3A5F  → amber.5 (low-opacity accent surfaces)
 */

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        // ── Base background ────────────────────────────────────
        black: { true: '#0B0F14' },

        // ── Surface hierarchy (elevation via color only) ───────
        surface: {
          1: '#0F141A',  // sidebars, navbars, containers  → --bg-surface-1
          2: '#111827',  // cards, modals, elevated panels → --bg-surface-2
          3: '#1a2233',  // card alt / deeper surface
          4: '#0F141A',  // neutral dark panel
        },

        // ── Accent — ONE color only (#3B82F6 blue) ────────────
        // These map to the old "amber" class names so components
        // need zero class-name changes.
        amber: {
          1: '#3B82F6',  // --accent-primary  (buttons, active nav, links)
          2: '#E5E7EB',  // --text-primary     (headings / bright text)
          3: '#9CA3AF',  // --text-secondary   (body, captions)
          4: '#2563EB',  // --accent-hover     (button hover, darker accent)
          5: '#1E3A5F',  // --accent-dim       (low-opacity accent surface)
          6: '#162b47',  // --accent-very-dim  (subtle tinted bg)
        },

        // ── Borders — subtle, 1px only ─────────────────────────
        border: {
          1: '#1F2937',  // --border-default   (dividers, input borders)
          2: '#374151',  // stronger border    (focused / hover states)
          3: '#243040',  // neutral dark border
        },

        // ── Text hierarchy ─────────────────────────────────────
        text: {
          1: '#E5E7EB',  // --text-primary   (headings, labels, body)
          2: '#9CA3AF',  // --text-secondary (metadata, placeholders)
          3: '#4B5563',  // --text-muted     (hints, disabled)
        },

        // ── Legacy aliases (keep for shadcn/radix compat) ─────
        dark: {
          1: '#0F141A',
          2: '#0B0F14',
          3: '#111827',
          4: '#1a2233',
        },
        blue:   { 1: '#3B82F6' },
        sky:    { 1: '#9CA3AF', 2: '#E5E7EB', 3: '#3B82F6' },
        orange: { 1: '#3B82F6' },
        purple: { 1: '#2563EB' },
        yellow: { 1: '#3B82F6' },
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-accent': {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-accent': 'pulse-accent 2s ease-in-out infinite',
        // alias kept for any legacy usages
        'pulse-amber': 'pulse-accent 2s ease-in-out infinite',
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
