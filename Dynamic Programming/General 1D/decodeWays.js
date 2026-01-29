// Decode Ways
// Time: O(n), Space: O(1)

function numDecodings(s) {
  if (s[0] === '0') return 0;
  let prev = 1, curr = 1;
  
  for (let i = 1; i < s.length; i++) {
    let temp = 0;
    if (s[i] !== '0') temp = curr;
    if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] <= '6')) temp += prev;
    prev = curr;
    curr = temp;
  }
  
  return curr;
}

// Test
console.log(numDecodings("12")); // 2
console.log(numDecodings("226")); // 3
console.log(numDecodings("06")); // 0
