// Find max in array
export function findMax(arr, index = 0) {
  if (index === arr.length - 1) return arr[index];
  return Math.max(arr[index], findMax(arr, index + 1));
}

// Check if array is sorted
export function isSorted(arr, index = 0) {
  if (index === arr.length - 1) return true;
  return arr[index] <= arr[index + 1] && isSorted(arr, index + 1);
}

// Binary search (recursive)
export function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;

  return arr[mid] > target
    ? binarySearch(arr, target, left, mid - 1)
    : binarySearch(arr, target, mid + 1, right);
}

// Sum of array
export function sumArray(arr, index = 0) {
  return index === arr.length ? 0 : arr[index] + sumArray(arr, index + 1);
}

// Product of array
export function productArray(arr, index = 0) {
  return index === arr.length ? 1 : arr[index] * productArray(arr, index + 1);
}

// First occurrence in array
export function firstOccurrence(arr, target, index = 0) {
  if (index === arr.length) return -1;
  return arr[index] === target
    ? index
    : firstOccurrence(arr, target, index + 1);
}

// Last occurrence in array
export function lastOccurrence(arr, target, index = arr.length - 1) {
  if (index < 0) return -1;
  return arr[index] === target ? index : lastOccurrence(arr, target, index - 1);
}

// Find all indices of a number
export function findAllIndices(arr, target, index = 0, result = []) {
  if (index === arr.length) return result;
  if (arr[index] === target) result.push(index);
  return findAllIndices(arr, target, index + 1, result);
}

// Remove duplicates from sorted array
export function removeDuplicates(arr, index = 0, result = []) {
  if (index === arr.length) return result;
  if (result.length === 0 || arr[index] !== result[result.length - 1]) {
    result.push(arr[index]);
  }
  return removeDuplicates(arr, index + 1, result);
}

// Recursive flatten array
export function flattenArray(arr) {
  const result = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      element.forEach(flatten);
    } else {
      result.push(element);
    }
  }

  flatten(arr);
  return result;
}
