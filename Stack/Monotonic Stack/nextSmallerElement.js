// Next Smaller Element
// Time: O(n), Space: O(n)

function nextSmallerElement(nums) {
  const result = Array(nums.length).fill(-1);
  const stack = [];
  
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      result[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  
  return result;
}

// Test
console.log(nextSmallerElement([4,5,2,10,8])); // [2,2,-1,8,-1]
console.log(nextSmallerElement([3,2,1])); // [2,1,-1]
