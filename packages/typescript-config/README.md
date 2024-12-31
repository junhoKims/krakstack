# `@krakstack/typescript-config`

모노레포에서 사용할 내부 TypeScript 설정 프리셋

## TODOS

할 일

- [x] 각 케이스에 맞는 프리셋 구현

## 사용

라이브러리에서 타입스크립트 프리셋 적용
- `base` -> 기본적인 ts 셋업
- `library` -> ui없거나 기본적인 기능이 담긴 라이브러리를 위한 ts 셋업
- `react-internal` -> react가 포함된 라이브러리 or 앱을 위한 ts 셋업
- `nextjs` -> nextjs 앱을 위한 ts 셋업

```
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@krakstack/typescript-config/base.json"
}
```

`react`가 포함된 라이브러리나 앱에서 타입스크립트 프리셋 적용

```
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@krakstack/typescript-config/react-internal.json"
}
```