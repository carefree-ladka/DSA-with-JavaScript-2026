// Binary Search - First Occurrence
// Time: O(log n), Space: O(1)

function findFirstOccurrence(arr, target) {
  let left = 0, right = arr.length - 1, result = -1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result;
}

// Test
console.log(findFirstOccurrence([1, 2, 2, 2, 3, 4, 5], 2)); // 1
console.log(findFirstOccurrence([1, 2, 3, 4, 5], 6)); // -1
