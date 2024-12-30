import { config as baseConfig } from './base.js';

/**
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  ...baseConfig,
  {
    name: 'Additional Rules',
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      '@typescript-eslint/only-throw-error': 'off',
    },
  },
];
