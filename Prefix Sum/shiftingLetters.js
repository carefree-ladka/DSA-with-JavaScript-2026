// Shifting Letters
// Time: O(n), Space: O(n)

function shiftingLetters(s, shifts) {
  const n = s.length;
  const diff = Array(n + 1).fill(0);
  
  for (let i = 0; i < n; i++) {
    diff[0] += shifts[i];
    diff[i + 1] -= shifts[i];
  }
  
  let result = '';
  let shift = 0;
  
  for (let i = 0; i < n; i++) {
    shift += diff[i];
    const code = ((s.charCodeAt(i) - 97 + shift % 26) % 26 + 26) % 26;
    result += String.fromCharCode(code + 97);
  }
  
  return result;
}

// Test
console.log(shiftingLetters("abc", [3,5,9])); // "rpl"
console.log(shiftingLetters("aaa", [1,2,3])); // "gfd"
