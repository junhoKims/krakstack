# `@types/global-types`

모노레포에서 사용할 전역 타입 선언

## TODOS

할 일

## 사용

> `tsconfig.json`에서 `types` 설정 없을 시

  - 추가적인 설정없이 바로 적용

> `tsconfig.json`에서 `types` 설정 수동 적용 시

  - types 옵션에 수동으로 모듈 작성 필요

```
{
  "compilerOptions": {
    "types": [
      "node",
      "react",
      "react-dom",
      "global-types"
    ]
  }
}
```
