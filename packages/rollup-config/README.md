# `@krak/rollup-config`

rollup 번들링을 설정 생성해주는 함수를 구현한 저장소

## TODOS

할 일

- [x] rollup에서 swc를 사용해 타입스크립트를 처리할 수 있도록 구성
- [x] rollup에서 번들된 코드를 minify하도록 구성
- [x] rollup으로 image를 번들링할 수 있도록 구성
- [x] rollup으로 svg를 컴포넌트로 번들링할 수 있도록 구성
- [x] rollup으로 json을 번들링할 수 있도록 구성

## 사용

```
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { defineRollupConfig } from '@krak/rollup-config';

export default defineRollupConfig({
  entry: 'src',
  packageDir: dirname(fileURLToPath(import.meta.url)),
});
```

### tailwindcss가 사용되었거나 postcss가 사용되었을 때

- postcss.config.{cjs, mjs, js}의 위치를 전달해주어야한다.
- 번들링된 하나의 .css 이름을 바꾸고 싶으면 `extract`를 작성한다.

```
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineRollupConfig } from '@krak/rollup-config';

export default defineRollupConfig({
  entry: 'src',
  packageDir: dirname(fileURLToPath(import.meta.url)),
  postcssOptions: {
    extract: resolve('dist/styles/styles-ui.css'),
    config: {
      path: dirname(resolve('./postcss.config.cjs')),
    },
  },
});
```