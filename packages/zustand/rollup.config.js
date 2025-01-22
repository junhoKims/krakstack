import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { defineRollupConfig } from '@krakstack/rollup-config';

export default defineRollupConfig({
  entry: 'src',
  packageDir: dirname(fileURLToPath(import.meta.url)),
});
