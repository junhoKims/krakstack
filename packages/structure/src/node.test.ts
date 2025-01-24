import { Node } from '@/node.js';

describe('Node', () => {
  it('Node 클래스를 생성할 수 있다', () => {
    const node1 = new Node(10);
    expect(node1).toBeDefined();
    expect(node1.value).toBe(10);
  });
});
