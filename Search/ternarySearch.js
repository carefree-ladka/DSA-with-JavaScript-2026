// Ternary Search
// Time: O(log₃ n), Space: O(1)

function ternarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid1 = left + Math.floor((right - left) / 3);
    const mid2 = right - Math.floor((right - left) / 3);
    
    if (arr[mid1] === target) return mid1;
    if (arr[mid2] === target) return mid2;
    
    if (target < arr[mid1]) right = mid1 - 1;
    else if (target > arr[mid2]) left = mid2 + 1;
    else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }
  
  return -1;
}

// Test
console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // 4
console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // -1
