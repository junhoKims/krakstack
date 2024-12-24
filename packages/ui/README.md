# `@krak/ui`

`react`에서 사용가능한 헤드리스 기반 UI를 제공하는 패키지

## TODOS

할 일

- [x] ESLint, Typescript 설정 구성
- [ ] `tailwindcss` 설정 구성
- [ ] `storybook` 설정 구성
- [ ] `Button` 컴포넌트 구현

## 사용

설치 

- `react`, `react-dom`, `@types/react` 등의 최소 18버전 이상의 패키지가 필요합니다.

```
pnpm add @krak/ui
```

사용

```
import { DividerBase } from '@krak/ui/base';

...
  return (
    <DividerBase />
  )
```