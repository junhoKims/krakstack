# `@krak/vitest-config`

모노레포에서 사용할 vitest 설정 프리셋

## TODOS

할 일

- [x] vitest 설정 구성
- [x] vitest 프리셋 구성
- [x] vitest/ui 구성

## 사용

`vitest.config.ts`에서 적용

- `pnpm test`
- `pnpm test:watch`
- `pnpm test:coverage`
- `pnpm test:ui`

```
import { mergeConfig } from 'vite/config';
import { reactInternalConfig } from '@krak/vitest-config;

export default mergeConfig(reactInternalConfig, defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      eneabled: false,
    }
  }
}));
```