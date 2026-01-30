// Cyclic Sort Template
// Time: O(n), Space: O(1)

function cyclicSort(nums) {
  let i = 0;
  while (i < nums.length) {
    const correctIdx = nums[i] - 1;
    if (nums[i] !== nums[correctIdx]) {
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
    } else {
      i++;
    }
  }
  return nums;
}

// Test
console.log(cyclicSort([3, 1, 5, 4, 2])); // [1, 2, 3, 4, 5]
console.log(cyclicSort([2, 6, 4, 3, 1, 5])); // [1, 2, 3, 4, 5, 6]
