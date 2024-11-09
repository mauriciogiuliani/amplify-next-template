/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#32665a',
        'secondary': '#a5d446',
        'white': '#ffffff',
        'black': '#252831',
        "stone-50": "#f3f4f6",
        "emerald-800": "#065f46"

      }
    }
  },
  plugins: [],
});

