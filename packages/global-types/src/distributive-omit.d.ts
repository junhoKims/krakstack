/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  /**
   * distribute 유니온 타입에서 작동하는 것을 보장하는 Omit 타입
   *
   * @example
   * type Union = {
   *   a: 'a';
   *   user: string;
   * } | {
   *   b: 'b';
   *   user: string;
   * }
   * type AfterUnion = DistributiveOmit<Union, 'user'>; // => { a: 'a' } | { b: 'b' }
   */
  export type DistributiveOmit<T, K extends PropertyKey> = T extends any ? Omit<T, K> : never;
}
