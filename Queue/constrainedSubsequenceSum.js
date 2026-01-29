// Constrained Subsequence Sum (Monotonic Queue)
// Time: O(n), Space: O(k)

function constrainedSubsetSum(nums, k) {
  const deque = [];
  
  for (let i = 0; i < nums.length; i++) {
    nums[i] += deque.length ? Math.max(0, nums[deque[0]]) : 0;
    
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
    
    if (deque[0] === i - k) deque.shift();
  }
  
  return Math.max(...nums);
}

// Test
console.log(constrainedSubsetSum([10,2,-10,5,20], 2)); // 37
console.log(constrainedSubsetSum([-1,-2,-3], 1)); // -1
