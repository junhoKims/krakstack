declare global {
  /**
   * 선택하려는 key의 타입이 보장되는 Omit 타입
   *
   * @example
   * type Example = { a: string, b: number };
   * type AfterExample = SafeOmit<Example, 'a'>; // => { b: number }
   */
  export type SafeOmit<T, K extends keyof T> = Omit<T, K>;
}
