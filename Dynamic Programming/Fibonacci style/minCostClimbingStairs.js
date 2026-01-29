// Min Cost Climbing Stairs
// Time: O(n), Space: O(1)

function minCostClimbingStairs(cost) {
  let prev = 0, curr = 0;
  
  for (let i = 2; i <= cost.length; i++) {
    [prev, curr] = [curr, Math.min(curr + cost[i - 1], prev + cost[i - 2])];
  }
  
  return curr;
}

// Test
console.log(minCostClimbingStairs([10,15,20])); // 15
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])); // 6
