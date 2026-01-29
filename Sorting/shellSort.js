// Shell Sort
// Time: O(n log n) to O(n²), Space: O(1)

function shellSort(arr) {
  const n = arr.length;
  
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
  }
  
  return arr;
}

// Test
console.log(shellSort([12, 34, 54, 2, 3])); // [2, 3, 12, 34, 54]
console.log(shellSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
