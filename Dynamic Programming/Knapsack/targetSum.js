// Target Sum
// Time: O(n * sum), Space: O(sum)

function findTargetSumWays(nums, target) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (Math.abs(target) > sum || (sum + target) % 2 !== 0) return 0;
  
  const subsetSum = (sum + target) / 2;
  const dp = Array(subsetSum + 1).fill(0);
  dp[0] = 1;
  
  for (let num of nums) {
    for (let i = subsetSum; i >= num; i--) {
      dp[i] += dp[i - num];
    }
  }
  
  return dp[subsetSum];
}

// Test
console.log(findTargetSumWays([1,1,1,1,1], 3)); // 5
console.log(findTargetSumWays([1], 1)); // 1
