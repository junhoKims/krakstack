/**
 * ### `getIsClient`
 *
 * 클라이언트 환경 여부 반환
 */
export const getIsClient = () => {
  return typeof globalThis.window !== "undefined";
};
