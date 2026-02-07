import reactRefresh from 'eslint-plugin-react-refresh';

/**
 * @type {import('eslint/config').ConfigArray}
 */
export const config = [
  {
    name: 'react-refresh/next/Config react-refresh plugin',
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactRefresh.configs.next.rules,
    },
  },
];
