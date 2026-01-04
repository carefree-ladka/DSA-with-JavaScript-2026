const factorial = (n, acc = 1) => {
  if (n === 0) return acc;
  return factorial(n - 1, acc * n);
};

console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800
