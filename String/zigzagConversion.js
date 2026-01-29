// Zigzag Conversion
// Time: O(n), Space: O(n)

function convert(s, numRows) {
  if (numRows === 1) return s;
  
  const rows = Array(Math.min(numRows, s.length)).fill('');
  let currRow = 0, goingDown = false;
  
  for (let char of s) {
    rows[currRow] += char;
    if (currRow === 0 || currRow === numRows - 1) goingDown = !goingDown;
    currRow += goingDown ? 1 : -1;
  }
  
  return rows.join('');
}

// Test
console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
