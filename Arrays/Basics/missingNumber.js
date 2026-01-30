// Missing Number (Cyclic Sort)
// Time: O(n), Space: O(1)

function missingNumber(nums) {
  let i = 0;
  while (i < nums.length) {
    const correctIdx = nums[i];
    if (nums[i] < nums.length && nums[i] !== nums[correctIdx]) {
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
    } else {
      i++;
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return nums.length;
}

// Test
console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([0,1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
