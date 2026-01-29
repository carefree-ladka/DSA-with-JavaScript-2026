// Palindromic Substrings
// Time: O(n^2), Space: O(1)

function countSubstrings(s) {
  let count = 0;
  
  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }
  
  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }
  
  return count;
}

// Test
console.log(countSubstrings("abc")); // 3
console.log(countSubstrings("aaa")); // 6
