// Print numbers 1 to N
export function printNumbers(n) {
  if (n <= 0) return;
  printNumbers(n - 1);
  console.log(n);
}

// Print numbers N to 1
export function printReverse(n) {
  if (n <= 0) return;
  console.log(n);
  printReverse(n - 1);
}

// Factorial
export function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// Sum of digits
export function sumOfDigits(n) {
  return n === 0 ? 0 : (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// Count digits
export function countDigits(n) {
  return n === 0 ? 1 : n < 10 ? 1 : 1 + countDigits(Math.floor(n / 10));
}

// Reverse a string
export function reverseString(str) {
  return str.length <= 1 ? str : reverseString(str.slice(1)) + str[0];
}

// Check palindrome
export function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

// Power of a number
export function power(a, n) {
  if (n === 0) return 1;
  if (n === 1) return a;
  return n % 2 === 0 ? power(a * a, n / 2) : a * power(a, n - 1);
}