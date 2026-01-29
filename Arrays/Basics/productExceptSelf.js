// Product of Array Except Self - LeetCode #238
// Pattern: Prefix/Suffix Products

function productExceptSelf(nums) {
  const result = new Array(nums.length);

  // Left pass
  result[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Right pass
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
}

// Test Cases
function runTests() {
  console.log("Product Except Self Tests:");
  console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
  console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
}

runTests();
