// GCD (Euclidean algorithm)
export function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// LCM using GCD
export function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Count zeros in a number
export function countZeros(n) {
  if (n === 0) return 1;
  if (n < 10) return 0;
  return (n % 10 === 0 ? 1 : 0) + countZeros(Math.floor(n / 10));
}

// Josephus problem
export function josephus(n, k) {
  return n === 1 ? 0 : (josephus(n - 1, k) + k) % n;
}

// Convert number to binary
export function toBinary(n) {
  return n === 0 ? '' : toBinary(Math.floor(n / 2)) + (n % 2);
}

// Decimal to base-k
export function toBaseK(n, k) {
  if (n === 0) return '';
  const digit = n % k;
  return toBaseK(Math.floor(n / k), k) + (digit < 10 ? digit : String.fromCharCode(55 + digit));
}

// Fibonacci sequence
export function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// Check if number is prime (helper for other problems)
export function isPrime(n, divisor = 2) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  if (divisor * divisor > n) return true;
  return n % divisor !== 0 && isPrime(n, divisor + 2);
}

// Sum of natural numbers
export function sumNatural(n) {
  return n <= 0 ? 0 : n + sumNatural(n - 1);
}

// Product of digits
export function productOfDigits(n) {
  return n < 10 ? n : (n % 10) * productOfDigits(Math.floor(n / 10));
}