declare global {
  /**
   * `Object.keys`의 결과가 타입을 보장하도록 만들어주는 타입
   *
   * @example
   * const example = { a: 'one', b: 'two' };
   * type ExampleKeys = ObjectKeys<typeof example>; // => 'a' | 'b'
   */
  export type ObjectKeys<T> = T extends Record<infer R, unknown> ? R : never;
}
