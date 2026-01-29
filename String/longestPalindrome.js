// Longest Palindrome
// Time: O(n), Space: O(1)

function longestPalindrome(s) {
  const count = new Map();
  for (let char of s) count.set(char, (count.get(char) || 0) + 1);
  
  let length = 0, hasOdd = false;
  for (let freq of count.values()) {
    if (freq % 2 === 0) {
      length += freq;
    } else {
      length += freq - 1;
      hasOdd = true;
    }
  }
  
  return length + (hasOdd ? 1 : 0);
}

// Test
console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("a")); // 1
