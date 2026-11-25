/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: 'var(--color-bg-primary)',
        elevated: 'var(--color-bg-elevated)',
        panel: 'var(--color-bg-card)',
        accent: 'var(--color-accent)',
        'accent-bright': 'var(--color-accent-bright)',
      },
      fontFamily: {
        wordmark: ['"Syncopate"', 'sans-serif'],
        display: ['"Barlow Condensed"', '"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
