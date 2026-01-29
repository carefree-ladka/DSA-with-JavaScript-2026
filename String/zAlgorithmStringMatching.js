// Z Algorithm String Matching
// Time: O(n + m), Space: O(n + m)

function zAlgorithm(text, pattern) {
  const str = pattern + "$" + text;
  const z = Array(str.length).fill(0);
  let l = 0, r = 0;
  const result = [];
  
  for (let i = 1; i < str.length; i++) {
    if (i > r) {
      l = r = i;
      while (r < str.length && str[r] === str[r - l]) r++;
      z[i] = r - l;
      r--;
    } else {
      const k = i - l;
      if (z[k] < r - i + 1) {
        z[i] = z[k];
      } else {
        l = i;
        while (r < str.length && str[r] === str[r - l]) r++;
        z[i] = r - l;
        r--;
      }
    }
    
    if (z[i] === pattern.length) {
      result.push(i - pattern.length - 1);
    }
  }
  
  return result;
}

// Test
console.log(zAlgorithm("ababcabcabababd", "ababd")); // [10]
console.log(zAlgorithm("aabaacaadaabaaba", "aaba")); // [0,9,12]
