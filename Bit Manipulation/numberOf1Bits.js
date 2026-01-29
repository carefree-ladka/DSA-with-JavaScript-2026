// Number of 1 Bits
// Time: O(1), Space: O(1)

function hammingWeight(n) {
  let count = 0;
  while (n) {
    count++;
    n &= n - 1;
  }
  return count;
}

// Test
console.log(hammingWeight(11)); // 3
console.log(hammingWeight(128)); // 1
console.log(hammingWeight(2147483645)); // 30
