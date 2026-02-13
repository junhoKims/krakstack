import { useQuery } from '@tanstack/react-query';

export function FortuneCookie() {
  console.log('fortune');
  const { data } = useQuery({
    queryKey: ['luckyNumber'],
    queryFn: () => {
      return Promise.resolve(Math.random());
    },
  });

  if (data && data > 0.5) {
    return <div>Today&#39;s your lucky day</div>;
  }

  return <div>Better stay home today</div>;
}
