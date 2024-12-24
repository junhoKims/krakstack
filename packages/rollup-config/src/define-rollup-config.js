import path from 'node:path';
import { readFile } from 'node:fs/promises';
import preserveDirectives from 'rollup-preserve-directives';
import { defineRollupSwcOption, swc } from 'rollup-plugin-swc3';
import postcss from 'rollup-plugin-postcss';
import { globSync } from 'glob';
import svgr from '@svgr/rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import { isFileExcluded } from './utils/is-file-excluded.js';

/**
 * rollup을 통한 `esm`, `cjs` 방식 번들 설정 생성
 *
 * @param {object} options
 * @param {string | undefined} options.entry 번들 경로
 * @param {string | undefined} options.output 번들 출력 경로
 * @param {RegExp[] | undefined} options.exclude 번들에 제외할 경로
 * @param {string} options.packageDir package.json 디렉토리 경로
 * @param {import('rollup-plugin-postcss').PostCSSPluginConf | undefined} options.postcssOptions postcss 옵션
 * @returns {import('rollup').RollupOptions | import('rollup').RollupOptions[]}
 */
export const defineRollupConfig = async ({
  entry = 'src',
  output = 'dist',
  exclude = [],
  packageDir,
  postcssOptions,
}) => {
  const packagePath = path.join(packageDir, 'package.json');
  const packageJSON = JSON.parse(await readFile(new URL(packagePath, import.meta.url), 'utf8'));
  /**
   * module 방식에 따라 번들 설정 생성
   *
   * @param {object} options
   * @param {string} options.input 번들 경로
   * @param {'es' | 'cjs'} options.format 모듈 해석 방식
   * @returns {import('rollup').RollupOptions}
   */
  const bundle = (input, format) => {
    return {
      input: Object.fromEntries(
        globSync(`${input}/**/*.{js,jsx,ts,tsx}`).reduce((acc, file) => {
          const excluded = isFileExcluded(path.join(packageDir, file), exclude);
          if (excluded) return acc;

          return [
            ...acc,
            [path.relative('src', file.slice(0, file.length - path.extname(file).length)), `${packageDir}/${file}`],
          ];
        }, [])
      ),
      output: {
        format,
        dir: path.dirname(`${output}/[name]`),
        entryFileNames: (chunkInfo) => {
          const fileExtension = `.${chunkInfo.facadeModuleId.split('/').pop()?.split('.')?.pop() || 'js'}`;
          const moduleExtension = format === 'es' ? '.mjs' : '.cjs';
          const isMaintainExtension = ['.d.ts', '.d.cts', '.d.mts'].includes(fileExtension);
          return isMaintainExtension ? `[name]${fileExtension}` : `[name]${moduleExtension}`;
        },

        preserveModules: true,
      },
      external: (source) => {
        const dependencies = Object.keys(packageJSON.dependencies || {});
        const peerDependencies = Object.keys(packageJSON.peerDependencies || {});
        return [...dependencies, ...peerDependencies].some((externalPkg) => source.startsWith(externalPkg));
      },
      plugins: [
        commonjs(),
        nodeResolve(),
        json(),
        image({ dom: true }),
        postcss({
          minimize: true,
          extract: `styles/styles.css`,
          ...postcssOptions,
        }),
        svgr({
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
        }),
        swc(
          defineRollupSwcOption({
            tsconfig: packageDir + '/tsconfig.build.json',
            minify: process.env.NODE_ENV === 'production',
            jsc: {
              target: 'esnext',
              parser: {
                syntax: 'typescript',
                tsx: true,
                decorators: false,
              },
            },
          })
        ),
        preserveDirectives(),
      ],
    };
  };

  return [bundle(entry, 'es'), bundle(entry, 'cjs')];
};
