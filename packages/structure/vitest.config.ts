import path from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';
import { libraryConfig } from '@krakstack/vitest-config';

export default mergeConfig(
  libraryConfig,
  defineConfig({
    test: {
      setupFiles: ['./tests/setup-tests.ts'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
);
