// Next Greater Element
// Time: O(n), Space: O(n)

function nextGreaterElement(nums) {
  const result = Array(nums.length).fill(-1);
  const stack = [];
  
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      result[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  
  return result;
}

// Test
console.log(nextGreaterElement([4,5,2,10,8])); // [5,10,10,-1,-1]
console.log(nextGreaterElement([3,2,1])); // [-1,-1,-1]
