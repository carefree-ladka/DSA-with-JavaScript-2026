// Permutations
// Time: O(n!), Space: O(n)

function permute(nums) {
  const result = [];

  function backtrack(path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let num of nums) {
      if (path.includes(num)) continue;
      path.push(num);
      backtrack(path);
      path.pop();
    }
  }

  backtrack([]);
  return result;
}

// Test
console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
