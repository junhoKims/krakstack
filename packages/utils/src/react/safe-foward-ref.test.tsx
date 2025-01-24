import { createRef, forwardRef } from 'react';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';
import { safeForwardRef } from '@/react/safe-foward-ref.js';

describe('safeForwardRef', () => {
  let container: HTMLDivElement;
  let root: ReturnType<typeof createRoot>;
  let inputRef: React.RefObject<HTMLInputElement | null>;

  beforeEach(() => {
    container = document.createElement('div');
    root = createRoot(container);
    inputRef = createRef<HTMLInputElement>();
  });

  describe('ref 기능', () => {
    const Comp = safeForwardRef<HTMLInputElement>((_, ref) => <input ref={ref} placeholder="placeholder" />);

    test('`safeForwardRef` 감싼 컴포넌트에 ref 전달하면 ref가 정상적으로 작동한다', () => {
      expect(inputRef.current).toEqual(null);

      act(() => {
        root.render(<Comp ref={inputRef} />);
      });

      expect(inputRef.current?.placeholder).toEqual('placeholder');
    });
  });

  describe('`safeForwardRef` 감싼 컴포넌트 제네릭 타입 추론', () => {
    const TableComp = <T,>(
      _: { data: T[]; renderRow: (item: T) => void },
      ref?: React.ForwardedRef<HTMLTableElement>
    ) => <table ref={ref} />;

    const ForwardRefTable = forwardRef(TableComp);
    const SafeForwardRefTable = safeForwardRef(TableComp);

    test('forwardRef 컴포넌트는 제네릭 타입을 추론하지 못한다', () => {
      act(() => {
        console.log('sinf');
        root.render(
          <ForwardRefTable
            data={[1, 2, 3]}
            renderRow={(item) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              return <div>{item}</div>;
            }}
          />
        );
      });
    });

    test('safeForwardRef 컴포넌트는 제네릭 타입을 추론한다', () => {
      act(() => {
        root.render(
          <SafeForwardRefTable
            data={[1, 2, 3]}
            renderRow={(item) => {
              return <div>{item}</div>;
            }}
          />
        );
      });
    });
  });
});
