// Range Sum Query - Mutable (Fenwick Tree)
// Time: O(log n) update/query, Space: O(n)

class NumArray {
  constructor(nums) {
    this.nums = nums;
    this.tree = Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
      this.updateTree(i + 1, nums[i]);
    }
  }
  
  update(index, val) {
    const delta = val - this.nums[index];
    this.nums[index] = val;
    this.updateTree(index + 1, delta);
  }
  
  updateTree(i, delta) {
    while (i < this.tree.length) {
      this.tree[i] += delta;
      i += i & -i;
    }
  }
  
  sumRange(left, right) {
    return this.queryTree(right + 1) - this.queryTree(left);
  }
  
  queryTree(i) {
    let sum = 0;
    while (i > 0) {
      sum += this.tree[i];
      i -= i & -i;
    }
    return sum;
  }
}

// Test
const numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0, 2)); // 9
numArray.update(1, 2);
console.log(numArray.sumRange(0, 2)); // 8
