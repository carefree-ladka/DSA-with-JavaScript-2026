// Set Mismatch
// Time: O(n), Space: O(1)

function findErrorNums(nums) {
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
    if (nums[i] !== i + 1) {
      return [nums[i], i + 1];
    }
  }
  return [-1, -1];
}

// Test
console.log(findErrorNums([1,2,2,4])); // [2,3]
console.log(findErrorNums([1,1])); // [1,2]
