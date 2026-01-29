// Range Minimum Query (Segment Tree)
// Time: O(log n) update/query, Space: O(n)

class RMQ {
  constructor(arr) {
    this.n = arr.length;
    this.tree = Array(4 * this.n).fill(Infinity);
    this.build(arr, 0, 0, this.n - 1);
  }
  
  build(arr, node, start, end) {
    if (start === end) {
      this.tree[node] = arr[start];
      return;
    }
    
    const mid = Math.floor((start + end) / 2);
    this.build(arr, 2 * node + 1, start, mid);
    this.build(arr, 2 * node + 2, mid + 1, end);
    this.tree[node] = Math.min(this.tree[2 * node + 1], this.tree[2 * node + 2]);
  }
  
  query(left, right) {
    return this.queryHelper(0, 0, this.n - 1, left, right);
  }
  
  queryHelper(node, start, end, left, right) {
    if (right < start || left > end) return Infinity;
    if (left <= start && end <= right) return this.tree[node];
    
    const mid = Math.floor((start + end) / 2);
    return Math.min(
      this.queryHelper(2 * node + 1, start, mid, left, right),
      this.queryHelper(2 * node + 2, mid + 1, end, left, right)
    );
  }
}

// Test
const rmq = new RMQ([1, 3, 2, 7, 9, 11]);
console.log(rmq.query(1, 3)); // 2
console.log(rmq.query(0, 5)); // 1
