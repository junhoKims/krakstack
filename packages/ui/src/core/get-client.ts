/**
 * 클라이언트 환경 여부 리턴 함수
 */
export const getClient = () => {
  return typeof window !== 'undefined' ? true : false;
};
