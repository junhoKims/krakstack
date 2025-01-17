import { Queue } from '@/queue.js';

describe('Queue', () => {
  test('Queue 클래스를 생성할 수 있다', () => {
    const queueDefault = new Queue();
    expect(queueDefault).toBeDefined();

    const queueHasArray = new Queue([1, 2, 3]);
    expect(queueHasArray.size()).toBe(3);
    expect(queueHasArray.isEmpty()).toBe(false);
  });
});
