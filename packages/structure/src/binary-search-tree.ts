import { Node } from './node.js';

export class BinarySearchTree<T> {
  root: Node<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    let cur = this.root;

    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    while (cur) {
      if (value < cur.value) {
        if (cur.left) {
          cur = cur.left;
        } else {
          cur.left = new Node(value);
          break;
        }
      } else {
        if (cur.right) {
          cur = cur.right;
        } else {
          cur.right = new Node(value);
          break;
        }
      }
    }
  }

  search(value: T) {
    let cur = this.root;

    while (cur && cur.value !== value) {
      if (value < cur.value) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }

    return cur;
  }
}
