# `@krakstack/ui`

`react`에서 사용가능한 헤드리스 기반 UI를 제공하는 패키지

## TODOS

할 일

- [x] ESLint, Typescript 설정 구성
- [x] `tailwindcss` 설정 구성
- [x] `storybook` 설정 구성
- [ ] `Button` 컴포넌트 구현
- [ ] npm 패키지 배포
- [ ] vercel CI/CD 연동

## 사용

설치 

- `react`, `react-dom`, `@types/react` 등의 최소 18버전 이상의 패키지가 필요합니다.

```
pnpm add @krakstack/ui
```

사용

```
import { DividerBase } from '@krakstack/ui/base';

...
  return (
    <DividerBase />
  )
```