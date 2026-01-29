// Contiguous Array
// Time: O(n), Space: O(n)

function findMaxLength(nums) {
  const map = new Map([[0, -1]]);
  let sum = 0, maxLen = 0;
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 1 ? 1 : -1;
    
    if (map.has(sum)) {
      maxLen = Math.max(maxLen, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  
  return maxLen;
}

// Test
console.log(findMaxLength([0,1])); // 2
console.log(findMaxLength([0,1,0])); // 2
