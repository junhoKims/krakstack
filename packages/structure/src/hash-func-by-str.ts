const MERCENNE_PRIME = 31;

/**
 * 문자열타입인 `key`를 받아 메르센 소수를 이용해 해시값을 반환하는 함수
 *
 * @example
 * hashFuncByStr('hello') // 99162322
 * hashFuncByStr('hello world') // 20958916
 */
export const hashFuncByStr = (key: string, tableSize = 100000000) => {
  let hash = 0;

  for (let i = 0; i < key.length; i++) {
    hash = (hash * MERCENNE_PRIME + key.charCodeAt(i)) % tableSize;
  }

  return hash;
};
