import type { ISubject } from '@/patterns/ObserverCache';
import { useEffect, useState } from 'react';

interface SubscriberProps {
  name: string;
  subject: ISubject<number>;
}

export function Subscriber({ name, subject }: SubscriberProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    subject.subscribe(setValue);
  }, [subject]);

  console.log('@Subscriber');

  return (
    <div>
      <p>
        {name} 수신값: {value}
      </p>
    </div>
  );
}
