/* eslint-disable @typescript-eslint/no-empty-object-type */
import { forwardRef } from 'react';

export type SafeForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

/**
 * 내부 props가 추론되지 않는 문제를 수정한 forwardRef
 */
export const safeForwardRef = forwardRef as SafeForwardRef;
