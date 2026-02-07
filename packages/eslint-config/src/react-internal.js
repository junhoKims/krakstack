import globals from 'globals';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import { config as libraryConfig } from './library.js';

/**
 * @type {import("eslint").Linter.Config[]}
 */
export const config = defineConfig([
  ...libraryConfig,
  {
    name: 'Config react plugin',
    plugins: {
      ...pluginReact.configs.flat.recommended.plugins,
      ...pluginReactHooks.configs.flat.recommended.plugins,
    },
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReactHooks.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    },
  },
  {
    name: 'Config LanguageOption For React',
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.serviceworker,
      },
    },
  },
]);
