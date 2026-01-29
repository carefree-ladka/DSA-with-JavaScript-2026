// Previous Greater Element
// Time: O(n), Space: O(n)

function previousGreaterElement(nums) {
  const result = Array(nums.length).fill(-1);
  const stack = [];
  
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop();
    }
    if (stack.length) result[i] = nums[stack[stack.length - 1]];
    stack.push(i);
  }
  
  return result;
}

// Test
console.log(previousGreaterElement([4,5,2,10,8])); // [-1,-1,5,-1,10]
console.log(previousGreaterElement([3,2,1])); // [-1,3,2]
