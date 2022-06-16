// apps/app1/tailwind.config.js
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const { join } = require('path')

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, 'components/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    join(__dirname, 'layouts/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    join(__dirname, 'pages/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },

  plugins: [],
}
