// Next Greater Element II (Circular Array)
// Time: O(n), Space: O(n)

function nextGreaterElements(nums) {
  const n = nums.length;
  const result = Array(n).fill(-1);
  const stack = [];
  
  for (let i = 0; i < 2 * n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
      result[stack.pop()] = nums[i % n];
    }
    if (i < n) stack.push(i);
  }
  
  return result;
}

// Test
console.log(nextGreaterElements([1,2,1])); // [2,-1,2]
console.log(nextGreaterElements([1,2,3,4,3])); // [2,3,4,-1,4]
