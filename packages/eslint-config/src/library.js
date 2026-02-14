import { defineConfig } from 'eslint/config';
import { config as baseConfig } from './base.js';

export const config = defineConfig([
  ...baseConfig,
  {
    name: 'library/Additional Rules',
    files: ['**/*.{ts,tsx,d.cts,d.ts,d.mts}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    },
  },
]);
