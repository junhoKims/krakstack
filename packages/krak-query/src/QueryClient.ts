/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { HashQueryKey, IQueryObserver, QueryData, QueryKey } from './types.js';
import { hashKey } from './utils/index.js';

type IListener = (queryKey: QueryKey) => void;

export class QueryClient {
  cache: Map<HashQueryKey, any>;
  listeners: Set<IListener>;

  constructor() {
    this.cache = new Map<HashQueryKey, any>();
    this.listeners = new Set<IListener>();
  }

  subscribe(listener: IListener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  get(queryKey: QueryKey) {
    const hash = hashKey(queryKey);

    if (!this.cache.has(hash)) {
      this.set(queryKey, { status: 'pending' });
    }

    return this.cache.get(hash);
  }

  set(queryKey: QueryKey, query: QueryData) {
    const hash = hashKey(queryKey);
    this.cache.set(hash, { ...this.cache.get(hash), ...query });

    this.listeners.forEach((listener) => {
      listener(queryKey);
    });
  }

  async obtain({ queryKey, queryFn }: IQueryObserver) {
    try {
      const data = await queryFn(queryKey);
      this.set(queryKey, { status: 'success', data });
    } catch (error) {
      this.set(queryKey, { status: 'error', error });
    }
  }
}
