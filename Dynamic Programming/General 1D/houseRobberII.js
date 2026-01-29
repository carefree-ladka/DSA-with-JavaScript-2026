// House Robber II
// Time: O(n), Space: O(1)

function rob(nums) {
  if (nums.length === 1) return nums[0];
  
  function robRange(start, end) {
    let prev = 0, curr = 0;
    for (let i = start; i < end; i++) {
      [prev, curr] = [curr, Math.max(curr, prev + nums[i])];
    }
    return curr;
  }
  
  return Math.max(robRange(0, nums.length - 1), robRange(1, nums.length));
}

// Test
console.log(rob([2,3,2])); // 3
console.log(rob([1,2,3,1])); // 4
