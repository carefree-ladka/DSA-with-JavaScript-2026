// Linear Search
// Time: O(n), Space: O(1)

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Test
console.log(linearSearch([4, 2, 7, 1, 9, 5], 7)); // 2
console.log(linearSearch([4, 2, 7, 1, 9, 5], 10)); // -1
