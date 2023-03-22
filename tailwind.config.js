const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./content/*.md",
    "./templates/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'tram-green': '#1a9c1d',
        'tram-green-light': '#f6f5e9',
      },
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
