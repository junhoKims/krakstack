# `@krakstack/eslint-config`

모노레포에서 사용할 내부 ESLint 설정 프리셋

## TODOS

할 일

- [x] `typescript-eslint` 설정 추가
- [x] `eslint-plugin-unused-imports` 설정 추가
- [ ] `eslint-import-resolver-typescript` 필요한지, 제거해도 되는지 확인

## 사용

단순 내부 설정 저장소 및 Root에서 ESLint 사용 시

```
import { baseConfig } from '@krakstack/eslint-config;

/**
 * @type {import('eslint').Linter.Config}
 */
export default baseConfig;
```

라이브러리에서 ESLint 사용

```
import { libraryConfig } from '@krakstack/eslint-config;

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  ...libraryConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
  }
]
```

`react`가 포함된 라이브러리 또는 앱에서 ESLint 사용

```
import { reactInternalConfig } from '@krakstack/eslint-config;

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  ...reactInternalConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
  }
]
```
