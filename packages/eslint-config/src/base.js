import process from 'node:process';
import typescriptEslint from 'typescript-eslint';
import globals from 'globals';
import turboPlugin from 'eslint-plugin-turbo';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';

/**
 * @type {import("eslint").Linter.Config[]}
 */
export const config = defineConfig([
  {
    name: 'base/eslint Config',
    ...js.configs.recommended,
    rules: {
      ...js.configs.recommended.rules,
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
    },
  },
  {
    name: 'base/prettier Config',
    ...eslintConfigPrettier,
    ...eslintPluginPrettierRecommended,
  },
  {
    name: 'base/eslint-plugin-import resolver Config',
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
  },
  {
    name: 'base/eslint-plugin-import Config',
    files: ['**/*.{js,mjs,cjs}'],
    ...importPlugin.flatConfigs.recommended,
    rules: {
      ...importPlugin.flatConfigs.recommended.rules,
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
    name: 'base/typescript Config',
    files: ['**/*.{ts,tsx,d.cts,d.ts,d.mts}'],
    extends: [
      typescriptEslint.configs.strictTypeChecked,
      typescriptEslint.configs.stylisticTypeChecked,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    rules: {
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/prefer-reduce-type-parameter': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true,
        },
      ],
    },
  },
  {
    name: 'Config turbo plugin',
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': [
        'warn',
        {
          allowList: ['NEXT_PUBLIC_*'],
        },
      ],
    },
  },
  {
    name: 'Config LanguageOption',
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  {
    name: 'Config Vitest globals',
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.vitest,
      },
    },
  },
]);
