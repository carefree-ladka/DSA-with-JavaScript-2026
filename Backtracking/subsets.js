// Subsets
// Time: O(2^n), Space: O(n)

function subsets(nums) {
  const result = [];

  function backtrack(start, path) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
}

// Test
console.log(subsets([1, 2, 3])); // [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
