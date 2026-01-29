// Partition Equal Subset Sum
// Time: O(n * sum), Space: O(sum)

function canPartition(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  
  const target = sum / 2;
  const dp = Array(target + 1).fill(false);
  dp[0] = true;
  
  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }
  
  return dp[target];
}

// Test
console.log(canPartition([1,5,11,5])); // true
console.log(canPartition([1,2,3,5])); // false
