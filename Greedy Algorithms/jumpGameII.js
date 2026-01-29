// Jump Game II
// Time: O(n), Space: O(1)

function jump(nums) {
  let jumps = 0, currEnd = 0, farthest = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currEnd) {
      jumps++;
      currEnd = farthest;
    }
  }
  
  return jumps;
}

// Test
console.log(jump([2,3,1,1,4])); // 2
console.log(jump([2,3,0,1,4])); // 2
