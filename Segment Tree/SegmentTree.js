// Segment Tree
// Time: O(log n) update/query, Space: O(n)

class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = Array(4 * this.n).fill(0);
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
    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
  }
  
  update(index, val) {
    this.updateHelper(0, 0, this.n - 1, index, val);
  }
  
  updateHelper(node, start, end, index, val) {
    if (start === end) {
      this.tree[node] = val;
      return;
    }
    
    const mid = Math.floor((start + end) / 2);
    if (index <= mid) {
      this.updateHelper(2 * node + 1, start, mid, index, val);
    } else {
      this.updateHelper(2 * node + 2, mid + 1, end, index, val);
    }
    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
  }
  
  query(left, right) {
    return this.queryHelper(0, 0, this.n - 1, left, right);
  }
  
  queryHelper(node, start, end, left, right) {
    if (right < start || left > end) return 0;
    if (left <= start && end <= right) return this.tree[node];
    
    const mid = Math.floor((start + end) / 2);
    const leftSum = this.queryHelper(2 * node + 1, start, mid, left, right);
    const rightSum = this.queryHelper(2 * node + 2, mid + 1, end, left, right);
    return leftSum + rightSum;
  }
}

// Test
const st = new SegmentTree([1, 3, 5, 7, 9, 11]);
console.log(st.query(1, 3)); // 15
st.update(1, 10);
console.log(st.query(1, 3)); // 22
