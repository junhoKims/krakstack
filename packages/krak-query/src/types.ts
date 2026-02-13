/* eslint-disable @typescript-eslint/no-explicit-any */
export type QueryKey = string[];

export type HashQueryKey = QueryKey[number];

export type QueryData = any;

export interface IQueryObserver {
  queryKey: QueryKey;
  queryFn: (queryKey: QueryKey) => Promise<QueryData>;
}
