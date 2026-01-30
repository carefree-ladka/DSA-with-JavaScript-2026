// Find All Duplicates in an Array
// Time: O(n), Space: O(1)

function findDuplicates(nums) {
  let i = 0;
  while (i < nums.length) {
    const correctIdx = nums[i] - 1;
    if (nums[i] !== nums[correctIdx]) {
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
    } else {
      i++;
    }
  }
  
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) result.push(nums[i]);
  }
  return result;
}

// Test
console.log(findDuplicates([4,3,2,7,8,2,3,1])); // [2,3]
console.log(findDuplicates([1,1,2])); // [1]
