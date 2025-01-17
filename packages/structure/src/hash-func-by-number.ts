const GOLD_RATE = 0.618033;

/**
 * 숫자타입인 `key`를 받아 황금비를 이용해 해시값을 반환하는 함수
 *
 * @example
 * hashFuncByNumber(0) // 12
 * hashFuncByNumber(1) // 5
 */
export const hashFuncByNumber = (key: number, tableSize = 100000000) => {
  const rest = (key * GOLD_RATE) % 1;
  return Number((rest * tableSize).toFixed(0));
};
