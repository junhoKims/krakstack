# `@krak/typescript-config`

모노레포에서 사용할 내부 TypeScript 설정 프리셋

## TODOS

할 일

- [x] 각 케이스에 맞는 프리셋 구현

## 사용

라이브러리에서 타입스크립트 프리셋 적용

```
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@krak/typescript-config/base.json"
}
```

`react`가 포함된 라이브러리나 앱에서 타입스크립트 프리셋 적용

```
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@krak/typescript-config/react-internal.json"
}
```