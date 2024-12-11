import globals from 'globals';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReact from 'eslint-plugin-react';
import { config as baseConfig } from './base.js';

/**
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  ...baseConfig,
  {
    name: 'Config react plugin',
    ...pluginReact.configs.flat.recommended,
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    name: 'Config react hook plugin',
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: 'useIsomorphicLayoutEffect',
        },
      ],
    },
  },
  {
    name: 'Config LanguageOption For React',
    languageOptions: {
      ecmaVersion: 'latest',
      ecmaFeatures: {
        jsx: true,
      },
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
];
