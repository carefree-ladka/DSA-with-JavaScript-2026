// Climbing Stairs
// Time: O(n), Space: O(1)

function climbStairs(n) {
  if (n <= 2) return n;
  let prev = 1, curr = 2;
  
  for (let i = 3; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  
  return curr;
}

// Test
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8
