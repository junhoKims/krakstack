# `@krak/prettier-config`

모노레포에서 사용할 내부 Prettier 설정 프리셋

## TODOS

할 일

- [x] tailwindcss plugin 추가된 설정 프리셋 구현

## 사용

라이브러리에서 Prettier 프리셋 적용

- `base` -> 기본적인 prettier 셋업



```
// prettier.config.js
import { baseConfig } from '@krak/prettier-config';

/**
 * @type {import("prettier").Config}
 */
export default {
  ...baseConfig,
  semi: false,
}
```
