import reactRefresh from 'eslint-plugin-react-refresh';

/**
 * @type {import('eslint/config').ConfigArray}
 */
export const config = [
  {
    name: 'react-refresh/vite/Config react-refresh plugin',
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactRefresh.configs.vite.rules,
    },
  },
];
