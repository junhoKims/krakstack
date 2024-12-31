# `@krak/utils`

다양한 환경에서 사용할 수 있는 유틸리티 함수가 담겨있는 패키지

## 기능

Commons:

- `isEmpty` - 빈배열, 빈객체, 빈문자열 여부를 확인하는 유틸 함수
- `isNil` - null 또는 undefined 여부를 확인하는 유틸 함수
- `getIsClient` - 클라이언트 환경 여부를 확인하는 유틸 함수
- `getIsServer` - 서버 환경 여부를 확인하는 유틸 함수
- `withComma` - 숫자에 천단위 콤마를 추가하는 포맷팅 유틸 함수
- `dateUtils` - dayjs 기반의 날짜 조작 및 포맷팅 유틸 함수

React:

- `createRequiredContext` - Provider 필수 사용을 강제하는 Context 생성 유틸 함수
- `ErrorBoundary` - React 에러 처리를 위한 Error Boundary 컴포넌트
- `useErrorBoundary` - Error Boundary를 명시적으로 노출 또는 리셋시킬 수 있는 기능이 담긴 Hook

## TODOS

할 일

- [x] ESLint, Typescript 구성
- [x] rollup으로 번들링되도록 구성
- [ ] npm 패키지 배포
- [ ] 문서 개발

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