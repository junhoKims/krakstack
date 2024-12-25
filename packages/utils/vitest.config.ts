import path from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';
import { reactInternalConfig } from '@krak/vitest-config';

export default mergeConfig(
  reactInternalConfig,
  defineConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
);
