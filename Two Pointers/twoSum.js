const twoSum = (nums = [], target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const currentSum = nums[left] + nums[right];
    if (currentSum === target) return [left, right];
    else if (currentSum < target) left++;
    else right--;
  }

  return [];
};

// Test Cases:
console.log(twoSum([2, 7, 11, 15], 9)); // [ 0, 1 ]
console.log(twoSum([3, 2, 4], 6)); // [] since nums are not sorted
