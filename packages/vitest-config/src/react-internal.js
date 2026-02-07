import { configDefaults, defineProject } from 'vitest/config';
import { EXCLUDES } from './constants.js';

export const config = defineProject({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['@testing-library/jest-dom/vitest'],
    exclude: [...configDefaults.exclude, ...EXCLUDES],
  },
});
