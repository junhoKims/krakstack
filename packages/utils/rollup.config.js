import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineRollupConfig } from '@krakstack/rollup-config';

export default defineRollupConfig({
  entry: 'src',
  exclude: [/types\.[t|j]sx?$/],
  packageDir: dirname(fileURLToPath(import.meta.url)),
  postcssOptions: {
    extract: resolve('dist/styles/styles-utils.css'),
    config: {
      path: dirname(resolve('./postcss.config.cjs')),
    },
  },
});
