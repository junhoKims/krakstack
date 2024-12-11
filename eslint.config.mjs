import { baseConfig } from '@krak/eslint-config';

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...baseConfig,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        allowDefaultProject: true,
      },
    },
  },
];
