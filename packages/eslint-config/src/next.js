import nextVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextPlugin from '@next/eslint-plugin-next';
import { config as reactInternalConfig } from './react-internal.js';

export const config = defineConfig([
  globalIgnores(['.next/**', 'out/**', 'next-env.d.ts']),
  ...reactInternalConfig,
  ...nextVitals,
  {
    name: 'next/@next/eslint-plugin-next Config',
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
]);
