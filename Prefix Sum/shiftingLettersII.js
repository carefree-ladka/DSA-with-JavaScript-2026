// Shifting Letters II
// Time: O(n + q), Space: O(n)

function shiftingLetters(s, shifts) {
  const n = s.length;
  const diff = Array(n + 1).fill(0);
  
  for (let [start, end, direction] of shifts) {
    const val = direction === 1 ? 1 : -1;
    diff[start] += val;
    diff[end + 1] -= val;
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
console.log(shiftingLetters("abc", [[0,1,0],[1,2,1],[0,2,1]])); // "ace"
console.log(shiftingLetters("dztz", [[0,0,0],[1,1,1]])); // "catz"
