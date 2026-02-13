import { useQuery } from '@tanstack/react-query';

export function LuckyNumber() {
  const { data } = useQuery({
    queryKey: ['luckyNumber'],
    queryFn: () => {
      return Promise.resolve(Math.random());
    },
  });

  return <div>Lucky Number is: {data}</div>;
}
