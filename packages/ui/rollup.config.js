import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineRollupConfig } from '@krakstack/rollup-config';

export default defineRollupConfig({
  entry: 'src',
  packageDir: dirname(fileURLToPath(import.meta.url)),
  postcssOptions: {
    extract: resolve('dist/styles/styles-ui.css'),
    config: {
      path: dirname(resolve('./postcss.config.cjs')),
    },
  },
});
