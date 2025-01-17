/**
 * 배열을 이용한 Queue 클래스
 */
export class Queue<T> {
  items: T[];
  rear = 0;
  front = 0;

  constructor(items: T[] = []) {
    this.items = items;
    this.rear = items.length;
  }

  push(item: T) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }

  size() {
    return this.rear - this.front;
  }

  first() {
    return this.items[this.front];
  }
}
