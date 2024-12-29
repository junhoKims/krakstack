import { useState } from 'react';
import { describe, expect } from 'vitest';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { createRequiredContext } from './create-required-context.js';

interface Data {
  text: string;
}
interface WrapperProps {
  children: React.ReactNode;
}

describe('createRequiredContext', () => {
  test('Provider가 있을 때 context 값을 정상적으로 반환한다', () => {
    const [useDataContext, DataProvider] = createRequiredContext<Data>();
    const dataValue: Data = { text: 'test' };
    const wrapper = ({ children }: WrapperProps) => <DataProvider value={dataValue}>{children}</DataProvider>;

    const { result } = renderHook(useDataContext, { wrapper });
    expect(result.current).toEqual(dataValue);
  });

  test('Provider가 없을 때 context Hook을 호출하려고 하면 에러가 발생한다', () => {
    const [useDataContext] = createRequiredContext<Data>();
    expect(() => renderHook(useDataContext)).toThrow();
  });

  test('context 값이 변경되면 변경된 값을 반환해야 한다', () => {
    // given
    const TEXT_TEST_ID = 'text';
    const BUTTON_TEST_ID = 'update-data-button';
    const [useDataContext, DataProvider] = createRequiredContext<Data>();

    const DataComponent = () => {
      const context = useDataContext();
      return <div data-testid={TEXT_TEST_ID}>{context.text}</div>;
    };

    const DataContainer = () => {
      const [text, setText] = useState('initial');

      const handleClick = () => {
        setText('updated');
      };

      return (
        <DataProvider value={{ text }}>
          <DataComponent />
          <button data-testid={BUTTON_TEST_ID} onClick={handleClick}>
            button
          </button>
        </DataProvider>
      );
    };

    // when
    render(<DataContainer />);

    // then
    expect(screen.getByTestId(TEXT_TEST_ID).textContent).toBe('initial');

    fireEvent.click(screen.getByTestId(BUTTON_TEST_ID));
    expect(screen.getByTestId(TEXT_TEST_ID).textContent).toBe('updated');
  });
});
