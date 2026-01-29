const maximumSubArray = (nums = [], k) => {
  let max = 0;
  let current = 0;

  for (let i = 0; i < k; i++) current += nums[i];

  max = current;

  for (let i = k; i < nums.length; i++) {
    current += nums[i] - nums[i - k];
    max = Math.max(max, current);
  }

  return max;
};

// Test Case:
console.log(maximumSubArray([1, 2, 3, 4, 5], 3)); // 12
