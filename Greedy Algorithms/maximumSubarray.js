// Maximum Subarray
// Time: O(n), Space: O(1)

function maxSubArray(nums) {
  let maxSum = nums[0], currSum = 0;
  
  for (let num of nums) {
    currSum = Math.max(currSum + num, num);
    maxSum = Math.max(maxSum, currSum);
  }
  
  return maxSum;
}

// Test
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5,4,-1,7,8])); // 23
