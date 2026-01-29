// Selection Sort
// Time: O(n²), Space: O(1)

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

// Test
console.log(selectionSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]
console.log(selectionSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
