import * as path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

function getAbsolutePath(value: string) {
  return path.dirname(require.resolve(path.join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {
      builder: {},
    },
  },
  webpackFinal: (config) => {
    // https://storybook.js.org/docs/builders/webpack#typescript-modules-are-not-resolved-within-storybook
    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };
    }

    if (config.resolve) {
      config.resolve.extensionAlias = {
        '.js': ['.tsx', '.jsx', '.ts', '.js'],
      };
    }

    return config;
  },
};

export default config;
