// Binary Search
// Time: O(log n), Space: O(1)

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}

// Test
console.log(binarySearch([1, 2, 4, 5, 7, 9], 7)); // 4
console.log(binarySearch([1, 2, 4, 5, 7, 9], 3)); // -1
