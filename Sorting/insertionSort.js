// Insertion Sort
// Time: O(n²), Space: O(1)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Test
console.log(insertionSort([12, 11, 13, 5, 6])); // [5, 6, 11, 12, 13]
console.log(insertionSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
