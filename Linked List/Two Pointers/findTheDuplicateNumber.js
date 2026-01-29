// Find the Duplicate Number
// Time: O(n), Space: O(1)

function findDuplicate(nums) {
  let slow = nums[0], fast = nums[0];
  
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  
  return slow;
}

// Test
console.log(findDuplicate([1,3,4,2,2])); // 2
console.log(findDuplicate([3,1,3,4,2])); // 3
