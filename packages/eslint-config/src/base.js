import process from 'node:process';
import typescriptEslint from 'typescript-eslint';
import globals from 'globals';
import unusedImports from 'eslint-plugin-unused-imports';
import turboPlugin from 'eslint-plugin-turbo';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';

export const config = defineConfig([
  globalIgnores(['dist/**/*', 'build/**/*']),
  {
    name: 'base/eslint Config',
    ...js.configs.recommended,
    rules: {
      ...js.configs.recommended.rules,
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
    },
  },
  {
    name: 'base/languageOption Config',
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
    name: 'base/eslint-plugin-import Config',
    ...importPlugin.flatConfigs.recommended,
    rules: {
      ...importPlugin.flatConfigs.recommended.rules,
      'import/no-named-as-default': 'off',
    },
  },
  ...typescriptEslint.config({
    name: 'base/typescript-eslint Config',
    files: ['**/*.{ts,tsx,d.cts,d.ts,d.mts}'],
    extends: [
      typescriptEslint.configs.strictTypeChecked,
      typescriptEslint.configs.stylisticTypeChecked,
      importPlugin.flatConfigs.typescript,
    ],
    rules: {
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/prefer-reduce-type-parameter': 'off',
      '@typescript-eslint/only-throw-error': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true,
        },
      ],
    },
  }),
  {
    name: 'base/eslint-plugin-import resolver Config',
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
  },
  {
    name: 'base/Config unused import plugin',
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
    name: 'base/eslint-plugin-turbo Config',
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
    name: 'base/vitest Config',
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.vitest,
      },
    },
  },
  {
    name: 'base/prettier plugin recommended',
    ...eslintPluginPrettierRecommended,
  },
]);
