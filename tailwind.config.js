/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          '2xl': '1440px',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        second: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: '#111',
        beige: '#DCC1AB',
        green: '#1B5B31',
        gray: '#F5F0EC',
      },
    },
  },
  plugins: [],
};
