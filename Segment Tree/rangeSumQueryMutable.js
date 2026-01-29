// Range Sum Query - Mutable (Segment Tree)
// Time: O(log n) update/query, Space: O(n)

class NumArray {
  constructor(nums) {
    this.n = nums.length;
    this.nums = nums;
    this.tree = Array(4 * this.n).fill(0);
    if (this.n > 0) this.build(0, 0, this.n - 1);
  }
  
  build(node, start, end) {
    if (start === end) {
      this.tree[node] = this.nums[start];
      return;
    }
    
    const mid = Math.floor((start + end) / 2);
    this.build(2 * node + 1, start, mid);
    this.build(2 * node + 2, mid + 1, end);
    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
  }
  
  update(index, val) {
    this.updateHelper(0, 0, this.n - 1, index, val);
  }
  
  updateHelper(node, start, end, index, val) {
    if (start === end) {
      this.nums[index] = val;
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
  
  sumRange(left, right) {
    return this.queryHelper(0, 0, this.n - 1, left, right);
  }
  
  queryHelper(node, start, end, left, right) {
    if (right < start || left > end) return 0;
    if (left <= start && end <= right) return this.tree[node];
    
    const mid = Math.floor((start + end) / 2);
    return this.queryHelper(2 * node + 1, start, mid, left, right) +
           this.queryHelper(2 * node + 2, mid + 1, end, left, right);
  }
}

// Test
const numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0, 2)); // 9
numArray.update(1, 2);
console.log(numArray.sumRange(0, 2)); // 8
