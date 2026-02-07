import { reactRefreshViteConfig } from '@krakstack/eslint-config/react-refresh';
import { reactInternalConfig } from '@krakstack/eslint-config';

export default [
  ...reactInternalConfig,
  ...reactRefreshViteConfig,
  {
    /**
     * public은 Node.js 모듈이 아니기 때문에 어떤 resolver로도 해석할 수 없음
     */
    name: 'project-vite/eslint-import-plugin public path ignore Config',
    rules: {
      'import/no-unresolved': ['error', { ignore: ['^\\/'] }],
    },
  },
];
