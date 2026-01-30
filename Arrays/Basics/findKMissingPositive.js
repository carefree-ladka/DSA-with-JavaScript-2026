// Find K Missing Positive Numbers
// Time: O(n + k), Space: O(k)

function findKMissingPositive(nums, k) {
  let i = 0;
  while (i < nums.length) {
    const correctIdx = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[correctIdx]) {
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
    } else {
      i++;
    }
  }
  
  const missing = [];
  const extraNums = new Set();
  
  for (let i = 0; i < nums.length && missing.length < k; i++) {
    if (nums[i] !== i + 1) {
      missing.push(i + 1);
      extraNums.add(nums[i]);
    }
  }
  
  let candidate = nums.length + 1;
  while (missing.length < k) {
    if (!extraNums.has(candidate)) {
      missing.push(candidate);
    }
    candidate++;
  }
  
  return missing;
}

// Test
console.log(findKMissingPositive([3, -1, 4, 5, 5], 3)); // [1, 2, 6]
console.log(findKMissingPositive([2, 3, 4], 3)); // [1, 5, 6]
