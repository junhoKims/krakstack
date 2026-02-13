/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { QueryClient } from './QueryClient.js';
import type { IQueryObserver } from './types.js';
import { hashKey } from './utils/index.js';

export function createObserver(queryClient: QueryClient, options: IQueryObserver) {
  return {
    async observer(notify: () => void) {
      const unsubscribe = queryClient.subscribe((queryKey) => {
        if (hashKey(queryKey) === hashKey(options.queryKey)) {
          notify();
        }
      });

      await queryClient.obtain(options);
      return unsubscribe;
    },
    getSnapshot() {
      return queryClient.get(options.queryKey);
    },
  };
}
