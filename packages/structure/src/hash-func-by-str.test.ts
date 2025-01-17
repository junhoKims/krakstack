import { hashFuncByStr } from '@/logics/hash-func-by-str.js';

describe('hashFuncByStr', () => {
  test('문자열을 인자로 넘기면 해당 문자열에 대한 해싱값을 리턴한다', () => {
    expect(hashFuncByStr('hello')).toBe(99162322);
    expect(hashFuncByStr('hello world')).toBe(20958916);
  });

  test('해싱테이블 사이즈를 변경하면 다른 해싱값이 리턴된다', () => {
    expect(hashFuncByStr('hello', 30000000)).toBe(9162322);
    expect(hashFuncByStr('hello world', 30000000)).toBe(10958916);
  });
});
