# `@krakstack/tailwind-config`

tailwind 설정 및 프리셋을 관리하는 저장소

## TODOS

할 일

- [x] tailwind 프리셋 생성
- [x] tailwind css 설정

## 사용

- `tailwind.config.js` 에서
```
import { base, shadcnUi } from '@krakstack/tailwind-config/presets';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [base, shadcnUi],
};
```

- `*.css` 에서
```
@import '@krakstack/tailwind-config/src/styles/base.css';
```