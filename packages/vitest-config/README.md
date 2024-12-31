# `@krak/vitest-config`

모노레포에서 사용할 vitest 설정 프리셋

## TODOS

할 일

- [x] vitest 설정 구성
- [x] vitest 프리셋 구성
- [x] vitest/ui 구성

## 사용

애플리케이션의 package.json에 아래와 같이 커맨드 사용

테스트 실행
```
pnpm test
```

테스트 추적 실행
```
pnpm test:watch
```

테스트 통계(coverage) 실행
```
pnpm test:coverage
```

테스트 UI (use Vitest UI) 실행
```
pnpm test:ui
```

애플리케이션 `vitest.config.ts`에 적용하는 사례

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