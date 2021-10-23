module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#081c24',
        'cyan': '#67E8F9',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
