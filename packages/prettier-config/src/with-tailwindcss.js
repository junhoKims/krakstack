import baseConfig from './base.js';

/**
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
export default {
  ...baseConfig,
  plugins: ['prettier-plugin-tailwindcss'],
};
