const sumOfDigits = (n) =>
  n === 0 ? 0 : (n % 10) + sumOfDigits(Math.floor(n / 10));

console.log(sumOfDigits(12345)); // 15
console.log(sumOfDigits(45678)); // 30
