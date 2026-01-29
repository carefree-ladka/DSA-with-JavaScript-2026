// Counting Bits
// Time: O(n), Space: O(1)

function countBits(n) {
  const result = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }
  return result;
}

// Test
console.log(countBits(2)); // [0,1,1]
console.log(countBits(5)); // [0,1,1,2,1,2]
