// Candy Distribution
// Time: O(n), Space: O(n)

function candy(ratings) {
  const n = ratings.length;
  const candies = Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  
  return candies.reduce((a, b) => a + b, 0);
}

// Test
console.log(candy([1,0,2])); // 5
console.log(candy([1,2,2])); // 4
