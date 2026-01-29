// Implement Stack using Queues
// Time: O(n) push, O(1) pop, Space: O(n)

class MyStack {
  constructor() {
    this.queue = [];
  }
  
  push(x) {
    this.queue.push(x);
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }
  
  pop() {
    return this.queue.shift();
  }
  
  top() {
    return this.queue[0];
  }
  
  empty() {
    return this.queue.length === 0;
  }
}

// Test
const stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top()); // 2
console.log(stack.pop()); // 2
console.log(stack.empty()); // false
