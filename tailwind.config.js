/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Add Helvetica as the primary font
      },
      colors: {
        'primary': '#36655B',
        'secondary': '#A6D447',
        'tertiary': "#CBCDC9",
        'white': '#FFFFFF',
        'black': '#252731',

      }
    }
  },
  plugins: [],
});

