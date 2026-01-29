// Single Number
// Time: O(n), Space: O(1)

function singleNumber(nums) {
  let result = 0;
  for (let num of nums) result ^= num;
  return result;
}

// Test
console.log(singleNumber([2,2,1])); // 1
console.log(singleNumber([4,1,2,1,2])); // 4
console.log(singleNumber([1])); // 1
