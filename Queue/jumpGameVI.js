// Jump Game VI (Monotonic Queue)
// Time: O(n), Space: O(k)

function maxResult(nums, k) {
  const n = nums.length;
  const deque = [0];
  
  for (let i = 1; i < n; i++) {
    nums[i] += nums[deque[0]];
    
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    deque.push(i);
    
    if (deque[0] === i - k) deque.shift();
  }
  
  return nums[n - 1];
}

// Test
console.log(maxResult([1,-1,-2,4,-7,3], 2)); // 7
console.log(maxResult([10,-5,-2,4,0,3], 3)); // 17
