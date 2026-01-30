// Smallest Missing Positive After Operations
// Time: O(n), Space: O(1)

function findSmallestInteger(nums, value) {
  const n = nums.length;
  const freq = Array(n).fill(0);
  
  for (let num of nums) {
    const mod = ((num % n) + n) % n;
    freq[mod]++;
  }
  
  for (let i = 0; i < n; i++) {
    if (freq[i] === 0) return i;
  }
  
  return n;
}

// Test
console.log(findSmallestInteger([1,-10,7,13,6,8], 5)); // 4
console.log(findSmallestInteger([1,-10,7,13,6,8], 7)); // 2
