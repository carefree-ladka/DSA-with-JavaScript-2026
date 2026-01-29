// Burst Balloons
// Time: O(n^3), Space: O(n^2)

function maxCoins(nums) {
  const arr = [1, ...nums, 1];
  const n = arr.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  
  for (let len = 2; len < n; len++) {
    for (let left = 0; left < n - len; left++) {
      const right = left + len;
      for (let i = left + 1; i < right; i++) {
        dp[left][right] = Math.max(
          dp[left][right],
          dp[left][i] + dp[i][right] + arr[left] * arr[i] * arr[right]
        );
      }
    }
  }
  
  return dp[0][n - 1];
}

// Test
console.log(maxCoins([3,1,5,8])); // 167
console.log(maxCoins([1,5])); // 10
