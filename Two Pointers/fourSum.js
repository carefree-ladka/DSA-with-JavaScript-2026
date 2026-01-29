const fourSum = (nums = [], target) => {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let k = j + 1;
      let l = nums.length - 1;

      while (k < l) {
        const S = nums[i] + nums[j] + nums[k] + nums[l];
        if (S === target) {
          result.push([nums[i], nums[j], nums[k], nums[l]]);
          while (k < l && nums[k] === nums[k + 1]) k++;
          while (k < l && nums[l] === nums[l - 1]) l--;
          k++;
          l--;
        } else if (S < target) k++;
        else l--;
      }
    }
  }

  return result;
};

// Test Cases:
console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]
console.log(fourSum([2, 2, 2, 2, 2], 8)); // [ [ 2, 2, 2, 2 ] ]
