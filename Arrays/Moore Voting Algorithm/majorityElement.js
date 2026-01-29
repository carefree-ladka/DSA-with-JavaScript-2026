// Majority Element - LeetCode #169
// Pattern: Moore Voting Algorithm

function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

// Test Cases
function runTests() {
  console.log("Majority Element Tests:");
  console.log(majorityElement([3, 2, 3])); // 3
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
  console.log(majorityElement([1])); // 1
}

runTests();
