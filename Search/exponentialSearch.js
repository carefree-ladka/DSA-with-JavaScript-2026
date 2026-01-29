// Exponential Search
// Time: O(log n), Space: O(1)

function exponentialSearch(arr, target) {
  if (arr[0] === target) return 0;
  
  let i = 1;
  while (i < arr.length && arr[i] <= target) i *= 2;
  
  return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, arr.length - 1));
}

function binarySearch(arr, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Test
console.log(exponentialSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)); // 6
console.log(exponentialSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)); // -1
