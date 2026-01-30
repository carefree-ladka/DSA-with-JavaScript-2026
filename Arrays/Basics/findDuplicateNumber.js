// Find the Duplicate Number (Cyclic Sort)
// Time: O(n), Space: O(1)

function findDuplicate(nums) {
  let i = 0;
  while (i < nums.length) {
    const correctIdx = nums[i] - 1;
    if (nums[i] !== nums[correctIdx]) {
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
    } else {
      i++;
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return nums[i];
  }
  return -1;
}

// Test
console.log(findDuplicate([1,3,4,2,2])); // 2
console.log(findDuplicate([3,1,3,4,2])); // 3
