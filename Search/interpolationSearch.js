// Interpolation Search
// Time: O(log log n) average, O(n) worst, Space: O(1)

function interpolationSearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right && target >= arr[left] && target <= arr[right]) {
    if (left === right) {
      return arr[left] === target ? left : -1;
    }
    
    const pos = left + Math.floor(((target - arr[left]) * (right - left)) / (arr[right] - arr[left]));
    
    if (arr[pos] === target) return pos;
    if (arr[pos] < target) left = pos + 1;
    else right = pos - 1;
  }
  
  return -1;
}

// Test
console.log(interpolationSearch([10, 20, 30, 40, 50], 30)); // 2
console.log(interpolationSearch([10, 20, 30, 40, 50], 25)); // -1
