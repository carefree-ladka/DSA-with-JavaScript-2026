// Maximum Subarray - LeetCode #53
// Pattern: Kadane's Algorithm

function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Test Cases
function runTests() {
  console.log("Maximum Subarray Tests:");
  console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
  console.log(maxSubArray([1])); // 1
  console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
}

runTests();
