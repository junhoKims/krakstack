import { defineConfig } from 'vitest/config';
import { COVERAGE_EXCLUDES } from '@krakstack/vitest-config';

export default defineConfig({
  test: {
    projects: ['packages/*'],
    coverage: {
      include: ['packages/**/src/**/*.{js,cjs,mjs,ts,cts,mts,tsx,jsx}'],
      exclude: [...COVERAGE_EXCLUDES],
    },
  },
});
