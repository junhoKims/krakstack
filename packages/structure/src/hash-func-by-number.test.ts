import { hashFuncByNumber } from './hash-func-by-number.js';

describe('hashFuncByNumber', () => {
  test('숫자를 인자로 넘기면 해당 숫자에 대한 해싱값을 리턴한다', () => {
    expect(hashFuncByNumber(-1)).toBe(-61803300);
    expect(hashFuncByNumber(0)).toBe(0);
    expect(hashFuncByNumber(1)).toBe(61803300);
  });

  test('해싱테이블 사이즈를 변경하면 다른 해싱값이 리턴된다', () => {
    expect(hashFuncByNumber(-1, 30000000)).toBe(-18540990);
    expect(hashFuncByNumber(0, 30000000)).toBe(0);
    expect(hashFuncByNumber(1, 30000000)).toBe(18540990);
  });
});
