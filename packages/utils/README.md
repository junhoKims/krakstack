# `@krak/utils`

다양한 환경에서 사용할 수 있는 유틸리티 함수가 모여 있는 패키지

## TODOS

할 일

- [x] ESLint, Typescript 구성
- [x] rollup으로 번들링되도록 구성
- [ ] npm 패키지 배포

## 사용

설치 

- `react`, `react-dom`, `@types/react` 등의 최소 18버전 이상의 패키지가 필요합니다.

```
pnpm add @krak/utils
```

사용

```
import { isClient } from '@krak/utils/commons';

if (isClient()) {
  // 클라이언트 코드
}
```