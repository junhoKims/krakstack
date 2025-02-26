# react

Welcome to the 'react' section of the documentation 🎉

provides react-based functions and hooks written in typescript.

(supports react version 18 or higher)

## Usage

You can check it in the left sidebar.

import the module as follows.

```tsx
import { useDebounceEffect } from '@krakstack/utils/react'

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

## Have a question? 🐛

if have a question or want to report a bug?

Please ask your question at this [link](https://github.com/junhoKims/krakstack/issues). Thank you 💚
