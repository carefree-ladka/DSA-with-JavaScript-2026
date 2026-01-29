// Remove all occurrences of a character
export function removeChar(str, char, index = 0) {
  if (index === str.length) return '';
  return (str[index] === char ? '' : str[index]) + removeChar(str, char, index + 1);
}

// Replace characters recursively
export function replaceChar(str, oldChar, newChar, index = 0) {
  if (index === str.length) return '';
  const currentChar = str[index] === oldChar ? newChar : str[index];
  return currentChar + replaceChar(str, oldChar, newChar, index + 1);
}

// Recursive string compression
export function compressString(str, index = 0, result = '', count = 1) {
  if (index === str.length) {
    return result + (count > 1 ? count : '');
  }
  
  if (index === str.length - 1 || str[index] !== str[index + 1]) {
    const compressed = str[index] + (count > 1 ? count : '');
    return compressString(str, index + 1, result + compressed, 1);
  }
  
  return compressString(str, index + 1, result, count + 1);
}

// Check balanced parentheses (without stack)
export function isBalanced(str, index = 0, count = 0) {
  if (index === str.length) return count === 0;
  if (count < 0) return false;
  
  if (str[index] === '(') {
    return isBalanced(str, index + 1, count + 1);
  } else if (str[index] === ')') {
    return isBalanced(str, index + 1, count - 1);
  }
  
  return isBalanced(str, index + 1, count);
}

// Generate all subsequences
export function generateSubsequences(str, index = 0, current = '', result = []) {
  if (index === str.length) {
    result.push(current);
    return result;
  }
  
  // Include current character
  generateSubsequences(str, index + 1, current + str[index], result);
  // Exclude current character
  generateSubsequences(str, index + 1, current, result);
  
  return result;
}

// Count vowels in string
export function countVowels(str, index = 0) {
  if (index === str.length) return 0;
  const vowels = 'aeiouAEIOU';
  return (vowels.includes(str[index]) ? 1 : 0) + countVowels(str, index + 1);
}

// Reverse words in a sentence
export function reverseWords(str) {
  const words = str.split(' ');
  
  function reverse(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return arr;
    [arr[start], arr[end]] = [arr[end], arr[start]];
    return reverse(arr, start + 1, end - 1);
  }
  
  return reverse(words).join(' ');
}

// Check if string is a rotation of another
export function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).includes(s2);
}