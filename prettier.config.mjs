import { baseConfig } from '@krakstack/prettier-config';

/**
 * @type {import("prettier").Config}
 */
export default {
  ...baseConfig,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 120,
};
