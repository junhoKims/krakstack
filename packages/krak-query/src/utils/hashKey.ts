import type { QueryKey } from '../types.js';

export function hashKey(queryKey: QueryKey) {
  return JSON.stringify(queryKey);
}
