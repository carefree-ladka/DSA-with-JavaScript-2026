// First Unique Character in a Stream
// Time: O(1) per operation, Space: O(n)

class FirstUnique {
  constructor(nums) {
    this.queue = [];
    this.count = new Map();
    for (let num of nums) this.add(num);
  }
  
  showFirstUnique() {
    while (this.queue.length && this.count.get(this.queue[0]) > 1) {
      this.queue.shift();
    }
    return this.queue.length ? this.queue[0] : -1;
  }
  
  add(value) {
    this.count.set(value, (this.count.get(value) || 0) + 1);
    if (this.count.get(value) === 1) this.queue.push(value);
  }
}

// Test
const fu = new FirstUnique([2,3,5]);
console.log(fu.showFirstUnique()); // 2
fu.add(5);
console.log(fu.showFirstUnique()); // 2
fu.add(2);
console.log(fu.showFirstUnique()); // 3
