// Generate Parentheses
// Time: O(4^n / sqrt(n)), Space: O(n)

function generateParenthesis(n) {
  const result = [];

  function backtrack(path, open, close) {
    if (path.length === 2 * n) {
      result.push(path);
      return;
    }

    if (open < n) backtrack(path + "(", open + 1, close);
    if (close < open) backtrack(path + ")", open, close + 1);
  }

  backtrack("", 0, 0);
  return result;
}

// Test
console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
