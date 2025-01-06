import { base, shadcnUi } from '@krakstack/tailwind-config/presets';

/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  presets: [base, shadcnUi],
};
