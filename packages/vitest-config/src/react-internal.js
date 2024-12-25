import { configDefaults, defineConfig } from 'vitest/config';
import { COVERAGE_EXCLUDES, EXCLUDES } from './constants.js';

export const config = defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: [...configDefaults.exclude, ...EXCLUDES],
    coverage: {
      enabled: false,
      extension: ['.js', '.cjs', '.mjs', '.ts', '.cts', '.mts', '.tsx', '.jsx'],
      exclude: [...(configDefaults.coverage.exclude ?? []), ...COVERAGE_EXCLUDES],
    },
  },
});
