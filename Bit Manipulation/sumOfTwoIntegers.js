// Sum of Two Integers
// Time: O(1), Space: O(1)

function getSum(a, b) {
  while (b !== 0) {
    const carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
}

// Test
console.log(getSum(1, 2)); // 3
console.log(getSum(2, 3)); // 5
console.log(getSum(-1, 1)); // 0
