const threeSum = (nums = []) => {
  nums.sort((a, b) => a - b);
  const result = [];
  const target = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);
        while (j < nums.length && nums[j] === nums[j + 1]) j++;
        while (k < nums.length && nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < target) j++;
      else k--;
    }
  }

  return result;
};

// Test Cases:
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0])); // []
console.log(threeSum([0, 0, 0])); // [ [ 0, 0, 0 ] ]
