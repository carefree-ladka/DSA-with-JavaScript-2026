// Palindrome Partitioning
// Time: O(n * 2^n), Space: O(n)

function partition(s) {
  const result = [];

  function isPalindrome(str, l, r) {
    while (l < r) if (str[l++] !== str[r--]) return false;
    return true;
  }

  function backtrack(start, path) {
    if (start === s.length) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s, start, i)) {
        path.push(s.substring(start, i + 1));
        backtrack(i + 1, path);
        path.pop();
      }
    }
  }

  backtrack(0, []);
  return result;
}

// Test
console.log(partition("aab")); // [["a","a","b"],["aa","b"]]
