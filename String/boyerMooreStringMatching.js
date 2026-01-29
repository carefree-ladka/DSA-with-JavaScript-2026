// Boyer-Moore String Matching
// Time: O(n/m) best, O(n*m) worst, Space: O(m)

function boyerMoore(text, pattern) {
  const m = pattern.length, n = text.length;
  const badChar = buildBadCharTable(pattern);
  const result = [];
  let s = 0;
  
  while (s <= n - m) {
    let j = m - 1;
    while (j >= 0 && pattern[j] === text[s + j]) j--;
    
    if (j < 0) {
      result.push(s);
      s += s + m < n ? m - badChar.get(text[s + m]) || m : 1;
    } else {
      s += Math.max(1, j - (badChar.get(text[s + j]) || -1));
    }
  }
  
  return result;
}

function buildBadCharTable(pattern) {
  const table = new Map();
  for (let i = 0; i < pattern.length; i++) {
    table.set(pattern[i], i);
  }
  return table;
}

// Test
console.log(boyerMoore("ababcabcabababd", "ababd")); // [10]
console.log(boyerMoore("aabaacaadaabaaba", "aaba")); // [0,9,12]
