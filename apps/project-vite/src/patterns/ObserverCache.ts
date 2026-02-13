type Observer<TData> = (data: TData) => void;

export interface ISubject<TData> {
  subscribe: (observer: Observer<TData>) => () => void;
  notify: (data: TData) => void;
}

export function createSubject<TData>(): ISubject<TData> {
  const observers = new Set<Observer<TData>>();

  function subscribe(observer: Observer<TData>) {
    observers.add(observer);
    return () => observers.delete(observer);
  }

  function notify(data: TData) {
    observers.forEach((observer) => {
      observer(data);
    });
  }

  return { subscribe, notify };
}
