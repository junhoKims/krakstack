declare global {
  /**
   * 객체 T의 모든 키의 유니온 타입을 반환
   *
   * @example
   * const example = { a: 'one', b: 'two' };
   * type ExampleKeys = KeyOf<typeof example>; // => 'a' | 'b'
   */
  export type KeyOf<T> = keyof T;
}
