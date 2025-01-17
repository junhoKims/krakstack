export class Node<T> {
  left: Node<T> | null;
  right: Node<T> | null;
  value: T;

  constructor(value: T) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
