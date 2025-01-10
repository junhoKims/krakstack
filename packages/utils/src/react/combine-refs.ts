/**
 * ### `combineRefs`
 *
 * props로 받은 ref와 내부에서 쓰일 ref를 합쳐서 적용해주는 함수
 *
 * @example
 * const internalRef = useRef<HTMLDivElement>(null);
 * <div ref={combineRefs(externalRef, internalRef)} />
 */
export const combineRefs = <T>(...refs: React.ForwardedRef<T>[]) => {
  return (node: T) => {
    refs.forEach((ref) => {
      if (ref && typeof ref !== 'function') {
        ref.current = node;
      }
    });
  };
};
