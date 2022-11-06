// const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')

const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, '**/*!(*.stories|*.spec).{ts,tsx,html}'),
    // ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      midnight: ['var(--midnight)'],
      humane: ['var(--humane)'],
    },
    colors: {
      primary: 'hsl(var(--color-primary) / <alpha-value>)',
      secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
