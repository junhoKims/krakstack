import { createContext, useContext } from 'react';

/**
 * 영역 내 Provider 존재 여부와 상관없이 확정된 타입을 가지는 Context 생성 함수
 *
 * @example
 * const [useUser, UserProvider] = createRequiredContext<{
 *   name: string;
 * }>();
 *
 * const User = () => {
 *  const user = useRequiredContext(); // { name: string }
 *  return <div>{user.name}</div>;
 * }
 */
export const createRequiredContext = <T>() => {
  const context = createContext<T | null>(null);

  const useRequiredContext = (): T => {
    const contextValue = useContext(context);

    if (contextValue === null) {
      throw new Error(`"${context.name}" context value is null'`);
    }

    return contextValue;
  };

  return [useRequiredContext, context.Provider] as const;
};
