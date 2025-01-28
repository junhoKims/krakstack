# `@krakstack/utils`

A utility package that can be used in various environments

## Features

Commons:

- `isEmpty` - Utility function to check for empty arrays, objects, or strings
- `isNil` - Utility function to check for null or undefined
- `omit` - Utility function to remove specific key-value pairs from an object
- `pick` - Utility function to extract specific key-value pairs from an object
- `sum` - Utility function that returns the sum of given numbers
- `objectKeys` - Extended Object.keys function with accurate return type inference
- `getIsClient` - Utility function to check client environment
- `getIsServer` - Utility function to check server environment
- `withComma` - Formatting utility function to add thousand separators to numbers
- `dateUtils` - Date manipulation and formatting utilities based on dayjs

React:

- `ErrorBoundary` - Error Boundary component for React error handling
- `useErrorBoundary` - Hook containing functionality to explicitly expose or reset Error Boundary
- `combineRef` - Function that assigns all received refs to an element
- `createRequiredContext` - Utility function to create Context that enforces Provider usage
- `safeForwardRef` - Utility function to prevent props type errors in forwardRef
- `useDebounceState` - useState Hook with debounce functionality
- `useDebounceEffect` - Effect Hook with debounce functionality
- `useIsomorphicLayoutEffect` - Layout Effect Hook that works on both client and server
- `useOnViewport` - Hook that returns whether a specific element exists within the viewport

## TODOS

To-do list

- [x] Configure ESLint, Typescript
- [x] Configure bundling with rollup
- [x] Deploy npm package
- [ ] Develop documentation

## Usage

Installation 

- Requires minimum version 18 of packages such as `react`, `react-dom`, `@types/react`

```
pnpm add @krakstack/utils
```

Usage

```
import { isClient } from '@krakstack/utils/commons';

if (isClient()) {
  // Client code
}
```