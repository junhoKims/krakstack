import { useState } from 'react';
import type { ISubject } from '@/patterns/ObserverCache';

interface PublishProps {
  subject: ISubject<number>;
}

export function Publish({ subject }: PublishProps) {
  const [count, setCount] = useState(0);

  function handlePublish() {
    const nextCount = count + 1;

    setCount(nextCount);
    subject.notify(nextCount);
  }

  console.log('@Publish');

  return (
    <button type="button" onClick={handlePublish}>
      Publish: {count}
    </button>
  );
}
