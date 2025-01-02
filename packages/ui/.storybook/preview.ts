import type { Preview } from '@storybook/react';
import '../src/styles/main.css';

const config: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default config;
