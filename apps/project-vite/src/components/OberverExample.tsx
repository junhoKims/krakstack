import { Publish } from '@/patterns/Publish';
import { Subscriber } from '@/patterns/Subscriber';
import { createSubject } from '@/patterns/ObserverCache';

export function ObserverExample() {
  const subject = createSubject<number>();
  return (
    <div>
      <h3>Observer Example</h3>
      <div>
        <Publish subject={subject} />
        <Subscriber name="A" subject={subject} />
        <Subscriber name="B" subject={subject} />
      </div>
    </div>
  );
}
