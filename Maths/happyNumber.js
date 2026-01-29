// Happy Number
// Time: O(log n), Space: O(log n)

function isHappy(n) {
  const seen = new Set();
  
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    let sum = 0;
    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  
  return n === 1;
}

// Test
console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
