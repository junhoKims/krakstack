declare global {
  /**
   * 객체 T의 모든 키의 null 타입을 제외시킨 타입을 반환
   *
   * @example
   * type Example = { a: string | null, b: number | null };
   * type AfterExample = ExcludeNull<Example>; // => { a: string; b: number }
   */
  export type ExcludeNull<T> = { [P in keyof T]: Exclude<T[P], null> };
}
