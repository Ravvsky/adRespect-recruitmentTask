/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
        maxWidth: '144rem',
      },
    },
  },
  plugins: [],
};
