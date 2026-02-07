import path from 'path';
import { defineProject, mergeConfig } from 'vitest/config';
import { reactInternalConfig } from '@krakstack/vitest-config';

export default mergeConfig(
  reactInternalConfig,
  defineProject({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
);
