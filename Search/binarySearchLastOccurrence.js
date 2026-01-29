// Binary Search - Last Occurrence
// Time: O(log n), Space: O(1)

function findLastOccurrence(arr, target) {
  let left = 0, right = arr.length - 1, result = -1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result;
}

// Test
console.log(findLastOccurrence([1, 2, 2, 2, 3, 4, 5], 2)); // 3
console.log(findLastOccurrence([1, 2, 3, 4, 5], 6)); // -1
