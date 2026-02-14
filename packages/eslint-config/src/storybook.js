import { defineConfig } from 'eslint/config';
import storybookPlugin from 'eslint-plugin-storybook';

export const config = defineConfig([
  ...storybookPlugin.configs['flat/recommended'],
  {
    // https://github.com/storybookjs/eslint-plugin-storybook?tab=readme-ov-file#installation
    name: 'Config storybook',
    ignores: ['!.storybook'],
  },
  {
    // https://github.com/storybookjs/eslint-plugin-storybook?tab=readme-ov-file#overridingdisabling-rules-1
    name: 'disabling storybook rules',
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {},
  },
]);
