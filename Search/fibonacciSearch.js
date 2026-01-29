// Fibonacci Search
// Time: O(log n), Space: O(1)

function fibonacciSearch(arr, target) {
  const n = arr.length;
  let fib2 = 0, fib1 = 1, fib = fib1 + fib2;
  
  while (fib < n) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib1 + fib2;
  }
  
  let offset = -1;
  
  while (fib > 1) {
    const i = Math.min(offset + fib2, n - 1);
    
    if (arr[i] < target) {
      fib = fib1;
      fib1 = fib2;
      fib2 = fib - fib1;
      offset = i;
    } else if (arr[i] > target) {
      fib = fib2;
      fib1 = fib1 - fib2;
      fib2 = fib - fib1;
    } else {
      return i;
    }
  }
  
  if (fib1 && offset + 1 < n && arr[offset + 1] === target) return offset + 1;
  return -1;
}

// Test
console.log(fibonacciSearch([10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100], 85)); // 8
console.log(fibonacciSearch([10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100], 55)); // -1
