// Implement strStr (Naive String Matching)
// Time: O(n * m), Space: O(1)

function strStr(haystack, needle) {
  if (!needle) return 0;
  
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = 0;
    while (j < needle.length && haystack[i + j] === needle[j]) j++;
    if (j === needle.length) return i;
  }
  
  return -1;
}

// Test
console.log(strStr("hello", "ll")); // 2
console.log(strStr("aaaaa", "bba")); // -1
console.log(strStr("", "")); // 0
