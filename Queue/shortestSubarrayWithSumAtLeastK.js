// Shortest Subarray with Sum at Least K (Monotonic Queue)
// Time: O(n), Space: O(n)

function shortestSubarray(nums, k) {
  const n = nums.length;
  const prefix = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];
  
  const deque = [];
  let minLen = Infinity;
  
  for (let i = 0; i <= n; i++) {
    while (deque.length && prefix[i] - prefix[deque[0]] >= k) {
      minLen = Math.min(minLen, i - deque.shift());
    }
    
    while (deque.length && prefix[i] <= prefix[deque[deque.length - 1]]) {
      deque.pop();
    }
    
    deque.push(i);
  }
  
  return minLen === Infinity ? -1 : minLen;
}

// Test
console.log(shortestSubarray([1], 1)); // 1
console.log(shortestSubarray([1,2], 4)); // -1
console.log(shortestSubarray([2,-1,2], 3)); // 3
