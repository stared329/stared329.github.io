/* eslint-disable no-dupe-keys */
const plugin = require('tailwindcss/plugin');

const scrollbarHide = plugin(function ({ addUtilities }) {
  addUtilities({
    // . + 유틸리티 이름
    '.scrollbar-hide': {
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    '.h-screen': {
      height: '-webkit-fill-available',
      height: 'stretch',
      height: '100vh',
    },
    '.min-h-screen': {
      'min-height': '-webkit-fill-available',
      'min-height': 'stretch',
      'min-height': '100vh',
    },
  });
});

module.exports = scrollbarHide;
