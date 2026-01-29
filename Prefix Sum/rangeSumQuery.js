// Range Sum Query - Immutable
// Time: O(1) query, O(n) init, Space: O(n)

class NumArray {
  constructor(nums) {
    this.prefix = Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
      this.prefix[i + 1] = this.prefix[i] + nums[i];
    }
  }
  
  sumRange(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
  }
}

// Test
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // 1
console.log(numArray.sumRange(2, 5)); // -1
console.log(numArray.sumRange(0, 5)); // -3
