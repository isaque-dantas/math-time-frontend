/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1D3AA0',
        'secondary': '#F6AE2D',
        'tertiary': '#99EDCC'
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif']
      }
    },
  },
  plugins: [],
}

