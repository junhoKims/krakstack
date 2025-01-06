import plugin from 'tailwindcss/plugin';

/**
 * @type {import('tailwindcss').Config}
 */
export const config = {
  presets: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard Variable'],
      },
      fontWeight: {
        'krak-font-regular': 400,
        'krak-font-medium': 500,
        'krak-font-semibold': 600,
        'krak-font-bold': 700,
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.krak-drag-none': {
          '-webkit-user-drag': 'none',
          '-khtml-user-drag': 'none',
          '-moz-user-drag': 'none',
          '-o-user-drag': 'none',
        },
        '.krak-drag-auto': {
          '-webkit-user-drag': 'auto',
          '-khtml-user-drag': 'auto',
          '-moz-user-drag': 'auto',
          '-o-user-drag': 'auto',
        },
      });
    }),
  ],
};
