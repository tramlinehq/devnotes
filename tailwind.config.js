const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
      "./content/*.md",
      "./templates/*.html",
    ],
  theme: {
    extend: {
      fontFamily: {
        'cardo': ['Cardo', ...defaultTheme.fontFamily.serif],
        'inter': ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
