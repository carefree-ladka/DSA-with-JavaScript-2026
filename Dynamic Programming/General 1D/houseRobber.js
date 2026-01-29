// House Robber
// Time: O(n), Space: O(1)

function rob(nums) {
  let prev = 0, curr = 0;
  
  for (let num of nums) {
    [prev, curr] = [curr, Math.max(curr, prev + num)];
  }
  
  return curr;
}

// Test
console.log(rob([1,2,3,1])); // 4
console.log(rob([2,7,9,3,1])); // 12
