// Pow(x, n)
// Time: O(log n), Space: O(log n)

function myPow(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2 === 0) return myPow(x * x, n / 2);
  return x * myPow(x, n - 1);
}

// Test
console.log(myPow(2.00000, 10)); // 1024.00000
console.log(myPow(2.10000, 3)); // 9.26100
console.log(myPow(2.00000, -2)); // 0.25000
