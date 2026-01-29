// Previous Smaller Element
// Time: O(n), Space: O(n)

function previousSmallerElement(nums) {
  const result = Array(nums.length).fill(-1);
  const stack = [];
  
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) {
      stack.pop();
    }
    if (stack.length) result[i] = nums[stack[stack.length - 1]];
    stack.push(i);
  }
  
  return result;
}

// Test
console.log(previousSmallerElement([4,5,2,10,8])); // [-1,4,-1,2,2]
console.log(previousSmallerElement([3,2,1])); // [-1,-1,-1]
