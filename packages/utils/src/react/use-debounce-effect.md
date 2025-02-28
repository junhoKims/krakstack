# useDebounceEffect

`deboucne` 기능이 적용된 Effect Hook

## arguments

| 이름 | 타입 | 설명 |
| --- | --- | --- |
| func | T | 확인할 값 |
| deps | React.DependencyList = [] | 의존성 배열 |
| delay | number = 1000 | 디바운스 지연 시간 |

## example

```tsx
const Comp = () => {
  const [count, setCount] = useState(0);

  useDebounceEffect(() => {
    console.log('debounce');
  }, [count], 200);

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        증가
      </button>
    </div>
  );
};
```
