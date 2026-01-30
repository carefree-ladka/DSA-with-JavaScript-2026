// Find All Numbers Disappeared in an Array
// Time: O(n), Space: O(1)

function findDisappearedNumbers(nums) {
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
    if (nums[i] !== i + 1) result.push(i + 1);
  }
  return result;
}

// Test
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // [5,6]
console.log(findDisappearedNumbers([1,1])); // [2]
