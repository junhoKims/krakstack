import { BinarySearchTree } from '@/binary-search-tree.js';

describe('BinarySearchTree', () => {
  test('BinarySearchTree 클래스를 생성할 수 있다', () => {
    const bst = new BinarySearchTree();
    expect(bst).toBeDefined();
  });

  test('insert 메서드를 통해 노드를 삽입할 수 있다', () => {
    const bst = new BinarySearchTree();
    bst.insert(10);
    expect(bst.root?.value).toBe(10);
  });

  test('search 메서드를 통해 노드를 검색할 수 있다', () => {
    const bst = new BinarySearchTree();
    bst.insert(10);
    expect(bst.search(10)?.value).toBe(10);
    expect(bst.search(20)).toBe(null);
  });
});
