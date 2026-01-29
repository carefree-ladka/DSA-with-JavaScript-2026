// Coin Change II
// Time: O(n * amount), Space: O(amount)

function change(amount, coins) {
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }
  
  return dp[amount];
}

// Test
console.log(change(5, [1,2,5])); // 4
console.log(change(3, [2])); // 0
console.log(change(10, [10])); // 1
