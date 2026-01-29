// Reverse Integer
// Time: O(log n), Space: O(1)

function reverse(x) {
  let result = 0;
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  
  while (x) {
    result = result * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  
  result *= sign;
  return result < -2147483648 || result > 2147483647 ? 0 : result;
}

// Test
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
