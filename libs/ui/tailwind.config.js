// apps/app1/tailwind.config.js
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const { join } = require('path')

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, 'src/components/**/*.{ts,tsx,html}'),
    join(__dirname, 'src/lib/**/*.{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },

  plugins: [],
}
