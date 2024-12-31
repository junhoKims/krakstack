import path from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';
import { reactInternalConfig } from '@krakstack/vitest-config';

export default mergeConfig(
  reactInternalConfig,
  defineConfig({
    test: {
      coverage: {
        exclude: ['**/contexts.?(c|m)[jt]s?(x)'],
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
);
