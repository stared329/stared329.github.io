/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        back: '#548E64',
        accent: '#EC6767',
      },
      fontFamily: {
        cursive: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [require('./custom-plugin'), require('daisyui')],
};
