import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { baseConfig } from '@krak/eslint-config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...baseConfig,
  {
    files: ['**/*.{js,cjs,mjs,ts,d.ts}'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
  },
];
