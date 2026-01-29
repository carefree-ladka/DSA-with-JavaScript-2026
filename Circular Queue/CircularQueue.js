// Circular Queue
// Time: O(1) for all operations, Space: O(k)

class MyCircularQueue {
  constructor(k) {
    this.queue = Array(k);
    this.size = k;
    this.front = 0;
    this.rear = -1;
    this.count = 0;
  }
  
  enQueue(value) {
    if (this.isFull()) return false;
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
    this.count++;
    return true;
  }
  
  deQueue() {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.size;
    this.count--;
    return true;
  }
  
  Front() {
    return this.isEmpty() ? -1 : this.queue[this.front];
  }
  
  Rear() {
    return this.isEmpty() ? -1 : this.queue[this.rear];
  }
  
  isEmpty() {
    return this.count === 0;
  }
  
  isFull() {
    return this.count === this.size;
  }
}

// Test
const cq = new MyCircularQueue(3);
console.log(cq.enQueue(1)); // true
console.log(cq.enQueue(2)); // true
console.log(cq.enQueue(3)); // true
console.log(cq.enQueue(4)); // false
console.log(cq.Rear()); // 3
console.log(cq.isFull()); // true
console.log(cq.deQueue()); // true
console.log(cq.enQueue(4)); // true
console.log(cq.Rear()); // 4
