// Unique Paths
// Time: O(m * n), Space: O(n)

function uniquePaths(m, n) {
  const dp = Array(n).fill(1);
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1];
    }
  }
  
  return dp[n - 1];
}

// Test
console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3
