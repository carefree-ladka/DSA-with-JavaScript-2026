// String to Integer (atoi)
// Time: O(n), Space: O(1)

function myAtoi(s) {
  let i = 0, sign = 1, result = 0;
  
  while (s[i] === ' ') i++;
  
  if (s[i] === '+' || s[i] === '-') {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }
  
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    result = result * 10 + (s[i] - '0');
    if (result * sign > 2147483647) return 2147483647;
    if (result * sign < -2147483648) return -2147483648;
    i++;
  }
  
  return result * sign;
}

// Test
console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
