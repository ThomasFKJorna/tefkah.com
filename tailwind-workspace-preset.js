// @ts-check

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 **/
module.exports = {
  theme: {
    extend: {
      colors: {
        blood: {
          100: '#350603',
          900: '#6F130D',
        },
        onyx: '#090B13',
        cool: '#A0B7DE',
        moon: '#E37B87',
        ice: '#569FEC',
      },
    },
  },
  variants: {
    extend: {},
  },
  // @ts-expect-error shush
  plugins: [require('@tailwindcss/typography')],
}
