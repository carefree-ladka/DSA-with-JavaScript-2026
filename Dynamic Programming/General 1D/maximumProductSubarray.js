// Maximum Product Subarray
// Time: O(n), Space: O(1)

function maxProduct(nums) {
  let maxProd = nums[0], minProd = nums[0], result = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    const temp = maxProd;
    maxProd = Math.max(nums[i], maxProd * nums[i], minProd * nums[i]);
    minProd = Math.min(nums[i], temp * nums[i], minProd * nums[i]);
    result = Math.max(result, maxProd);
  }
  
  return result;
}

// Test
console.log(maxProduct([2,3,-2,4])); // 6
console.log(maxProduct([-2,0,-1])); // 0
