// Maximum Product Subarray - LeetCode #152
// Pattern: Modified Kadane's Algorithm

function maxProduct(nums) {
  let maxSoFar = nums[0];
  let minSoFar = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [maxSoFar, minSoFar] = [minSoFar, maxSoFar];
    }

    maxSoFar = Math.max(nums[i], maxSoFar * nums[i]);
    minSoFar = Math.min(nums[i], minSoFar * nums[i]);

    result = Math.max(result, maxSoFar);
  }

  return result;
}

// Test Cases
function runTests() {
  console.log("Maximum Product Subarray Tests:");
  console.log(maxProduct([2, 3, -2, 4])); // 6
  console.log(maxProduct([-2, 0, -1])); // 0
  console.log(maxProduct([-2, 3, -4])); // 24
}

runTests();
