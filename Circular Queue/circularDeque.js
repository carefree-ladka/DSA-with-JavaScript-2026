// Design Circular Deque
// Time: O(1) for all operations, Space: O(k)

class MyCircularDeque {
  constructor(k) {
    this.queue = Array(k);
    this.size = k;
    this.front = 0;
    this.rear = 0;
    this.count = 0;
  }
  
  insertFront(value) {
    if (this.isFull()) return false;
    this.front = (this.front - 1 + this.size) % this.size;
    this.queue[this.front] = value;
    this.count++;
    return true;
  }
  
  insertLast(value) {
    if (this.isFull()) return false;
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.size;
    this.count++;
    return true;
  }
  
  deleteFront() {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.size;
    this.count--;
    return true;
  }
  
  deleteLast() {
    if (this.isEmpty()) return false;
    this.rear = (this.rear - 1 + this.size) % this.size;
    this.count--;
    return true;
  }
  
  getFront() {
    return this.isEmpty() ? -1 : this.queue[this.front];
  }
  
  getRear() {
    return this.isEmpty() ? -1 : this.queue[(this.rear - 1 + this.size) % this.size];
  }
  
  isEmpty() {
    return this.count === 0;
  }
  
  isFull() {
    return this.count === this.size;
  }
}

// Test
const cd = new MyCircularDeque(3);
console.log(cd.insertLast(1)); // true
console.log(cd.insertLast(2)); // true
console.log(cd.insertFront(3)); // true
console.log(cd.insertFront(4)); // false
console.log(cd.getRear()); // 2
console.log(cd.isFull()); // true
