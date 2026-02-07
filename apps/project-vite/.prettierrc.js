import { withTailwindcssConfig } from '@krakstack/prettier-config';

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...withTailwindcssConfig,
  tailwindStylesheet: './src/index.css',
};

export default config;
