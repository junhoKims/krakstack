import './svgr.d.ts';
import './img.d.ts';

/** 전역으로 사용할 수 있는 ValueOf 제네릭 타입 */
declare global {
  /**
   * ValueOf<T>: 객체 T의 모든 값의 유니온 타입을 반환
   *
   * @example
   * const example = { large : 'large, medium: 'medium' };
   * type ExampleValues = ValueOf<typeof example>; // '=> large' | 'medium'
   */
  export type ValueOf<T> = T[keyof T];
  /**
   * 객체 T의 모든 키의 유니온 타입을 반환
   *
   * @example
   * const example = { a: 'one', b: 'two' };
   * type ExampleKeys = KeyOf<typeof example>; // => 'a' | 'b'
   */
  export type KeyOf<T> = keyof T;
  /**
   * 객체 T의 모든 키의 null 타입을 제외시킨 타입을 반환
   *
   * @example
   * type Example = { a: string | null, b: number | null };
   * type AfterExample = ExcludeNull<Example>; // => { a: string; b: number }
   */
  export type ExcludeNull<T> = { [P in keyof T]: Exclude<T[P], null> };
  /**
   * `Object.entries`의 반환 타입
   *
   * @example
   * const example = { a: 'one', b: 'two' };
   * const entries = Object.entries(example) as ObjectEntries<typeof example>; // => [['a', string], ['b', string]]
   */
  export type ObjectEntries<T extends { [K in keyof T]: T[K] }> = { [K in keyof T]: [K, T[K]] }[keyof T][];
  /**
   * `Object.keys`의 결과가 타입을 보장하도록 만들어주는 타입
   *
   * @example
   * const example = { a: 'one', b: 'two' };
   * type ExampleKeys = ObjectKeys<typeof example>; // => 'a' | 'b'
   */
  export type ObjectKeys<T> = T extends Record<infer R, unknown> ? R : never;
}
