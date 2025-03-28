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
    getAbsolutePath('@storybook/addon-a11y'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {
      builder: {},
    },
  },
  webpackFinal: (config) => {
    /**
     * Storybook에서 별칭(alias)를 인식할 수 있도록 설정
     * @see https://storybook.js.org/docs/builders/webpack#typescript-modules-are-not-resolved-within-storybook
     */
    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };
    }

    /**
     * tsconfig module이 "NodeNext"인 경우, .js 확장자가 tsx, jsx까지 포함해 인식하도록 설정
     */
    if (config.resolve) {
      config.resolve.extensionAlias = {
        '.js': ['.tsx', '.jsx', '.ts', '.js'],
      };
    }

    /**
     * svg를 컴포넌트로 처리하기 위해 svgr/webpack을 설정
     * @see https://react-svgr.com/docs/next/
     */
    if (config.module?.rules) {
      const fileLoaderRule = config.module.rules.find((rule) => {
        if (typeof rule !== 'string' && rule && rule.test instanceof RegExp) {
          return rule.test.test('.svg');
        }
      });

      config.module.rules.push(
        {
          ...(typeof fileLoaderRule === 'object' ? fileLoaderRule : {}),
          test: /\.svg$/i,
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                icon: true,
                memo: true,
                svgProps: { role: 'img' },
                exportType: 'named',
                svgoConfig: {
                  plugins: [
                    {
                      name: 'preset-default',
                      params: {
                        overrides: {
                          removeViewBox: false,
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        }
      );

      if (fileLoaderRule && typeof fileLoaderRule !== 'string') {
        fileLoaderRule.exclude = /\.svg$/i;
      }
    }

    return config;
  },
};

export default config;

/**
 * svg를 컴포넌트 처리
 * `@svgr/webpack` 라이브러리 사용
 * https://react-svgr.com/docs/next/
 */
// export const setSvgUseSvgr = (config: Configuration) => {
//   if (config.module?.rules) {
//     const fileLoaderRule = config.module.rules.find((rule) => {
//       if (typeof rule !== 'string' && rule && rule.test instanceof RegExp) {
//         return rule.test.test('.svg');
//       }
//     });

//     config.module.rules.push(
//       {
//         ...(typeof fileLoaderRule === 'object' ? fileLoaderRule : {}),
//         test: /\.svg$/i,
//         resourceQuery: /url/,
//       },
//       {
//         test: /\.svg$/i,
//         issuer: /\.[jt]sx?$/,
//         use: [
//           {
//             loader: '@svgr/webpack',
//             options: {
//               svgProps: { role: 'img' },
//               svgoConfig: { removeViewBox: false },
//               memo: true,
//             },
//           },
//         ],
//       }
//     );

//     if (fileLoaderRule && typeof fileLoaderRule !== 'string') {
//       fileLoaderRule.exclude = /\.svg$/i;
//     }
//   }
// };
