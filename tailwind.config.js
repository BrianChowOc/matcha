/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      error: 'f44336'
    },
    screens: {
      'max-sm': {'max': '640px'},
      'sm': {'min': '640px'}
    },
  },
  plugins: [],
}

