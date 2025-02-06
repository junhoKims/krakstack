import { QueueLinkedList } from '@/queue-linked-list.js';

describe('QueueLinkedList', () => {
  test('QueueLinkedList 클래스를 생성할 수 있다', () => {
    const queueDefault = new QueueLinkedList();
    expect(queueDefault).toBeDefined();

    const q = new QueueLinkedList();
    expect(q.size).toBe(0);
    expect(q.isEmpty()).toBe(true);

    q.push(1);
    q.push(2);
    const popped = q.pop();
    expect(popped).toBe(1);
    expect(q.size).toBe(1);
  });
});
