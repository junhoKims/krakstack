import tseslint from 'typescript-eslint';
import globals from 'globals';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';
import js from '@eslint/js';

/**
 * eslint 프리셋 base.js와 동일
 *
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    files: ['**/*.{js,cjs,mjs,ts,d.ts}'],
  },
  {
    name: 'Config ESLint',
    ...js.configs.recommended,
    rules: {
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
    },
  },
  {
    name: 'Config Prettier',
    ...eslintPluginPrettierRecommended,
  },
  ...tseslint.config({
    name: 'Config Typescript',
    files: ['**/*.{ts,tsx,d.cts,d.ts,d.mts}'],
    extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
    rules: {
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    },
  }),
  {
    name: 'Config ignore patterns',
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'storybook-static'],
  },
  {
    name: 'Config import plugin',
    ...importPlugin.flatConfigs.recommended,
    rules: {
      'import/no-named-as-default': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'never',
          warnOnUnassignedImports: true,
          groups: ['builtin', 'external', 'internal', 'object', ['parent', 'sibling', 'index'], 'type', 'unknown'],
          pathGroups: [
            {
              pattern: 'react*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '{.,..,@,*}/**/*.+(css|sass|less|scss|pcss|styl|svg)',
              group: 'unknown',
              position: 'after',
            },
          ],
          alphabetize: {
            order: 'desc',
          },
          pathGroupsExcludedImportTypes: ['type'],
        },
      ],
    },
  },
  {
    name: 'Config unused import plugin',
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    name: 'Config LanguageOption',
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
  },
];
