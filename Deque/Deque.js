// Deque (Double-Ended Queue)
// Time: O(1) for all operations, Space: O(n)

class Deque {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  
  addFront(item) {
    this.front--;
    this.items[this.front] = item;
  }
  
  addRear(item) {
    this.items[this.rear] = item;
    this.rear++;
  }
  
  removeFront() {
    if (this.isEmpty()) return null;
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  
  removeRear() {
    if (this.isEmpty()) return null;
    this.rear--;
    const item = this.items[this.rear];
    delete this.items[this.rear];
    return item;
  }
  
  peekFront() {
    return this.isEmpty() ? null : this.items[this.front];
  }
  
  peekRear() {
    return this.isEmpty() ? null : this.items[this.rear - 1];
  }
  
  isEmpty() {
    return this.rear - this.front === 0;
  }
  
  size() {
    return this.rear - this.front;
  }
}

// Test
const deque = new Deque();
deque.addRear(1);
deque.addRear(2);
deque.addFront(0);
console.log(deque.peekFront()); // 0
console.log(deque.peekRear()); // 2
console.log(deque.removeFront()); // 0
console.log(deque.removeRear()); // 2
