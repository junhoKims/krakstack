import type { PostCSSPluginConf } from 'rollup-plugin-postcss';
import type { RollupOptions } from 'rollup';

interface DefineRollupConfigOption {
  /** 번들 경로 */
  entry: string;
  /** 번들 출력 경로 */
  output: string;
  /** 번들에 제외할 경로 */
  exclude: RegExp[];
  /** package.json 디렉토리 경로 */
  packageDir: string;
  /** postcss 옵션 */
  postcssOptions?: PostCSSPluginConf;
}

/**
 * rollup을 통한 `esm`, `cjs` 방식 번들 설정 생성
 */
export declare const defineRollupConfig: (options: DefineRollupConfigOption) => RollupOptions[] | RollupOptions;
