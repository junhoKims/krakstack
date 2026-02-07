declare global {
  /**
   * `Object.entries`의 반환 타입
   *
   * @example
   * const example = { a: 'one', b: 'two' };
   * const entries = Object.entries(example) as ObjectEntries<typeof example>; // => [['a', string], ['b', string]]
   */
  export type ObjectEntries<T extends { [K in keyof T]: T[K] }> = { [K in keyof T]: [K, T[K]] }[keyof T][];
}
