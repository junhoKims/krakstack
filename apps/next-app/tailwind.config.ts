import { base, shadcnUi } from '@krakstack/tailwind-config/presets';

/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [base, shadcnUi],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
