declare global {
  /**
   * ValueOf<T>: 객체 T의 모든 값의 유니온 타입을 반환
   *
   * @example
   * const example = { large : 'large, medium: 'medium' };
   * type ExampleValues = ValueOf<typeof example>; // '=> large' | 'medium'
   */
  export type ValueOf<T> = T[keyof T];
}
