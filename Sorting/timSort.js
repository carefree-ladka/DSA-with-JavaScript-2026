// Tim Sort (Hybrid: Merge + Insertion)
// Time: O(n log n), Space: O(n)

const RUN = 32;

function timSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n; i += RUN) {
    insertionSortForTim(arr, i, Math.min(i + RUN - 1, n - 1));
  }
  
  for (let size = RUN; size < n; size = 2 * size) {
    for (let start = 0; start < n; start += 2 * size) {
      const mid = start + size - 1;
      const end = Math.min(start + 2 * size - 1, n - 1);
      if (mid < end) mergeForTim(arr, start, mid, end);
    }
  }
  
  return arr;
}

function insertionSortForTim(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

function mergeForTim(arr, l, m, r) {
  const left = arr.slice(l, m + 1);
  const right = arr.slice(m + 1, r + 1);
  let i = 0, j = 0, k = l;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) arr[k++] = left[i++];
    else arr[k++] = right[j++];
  }
  
  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];
}

// Test
console.log(timSort([5, 21, 7, 23, 19])); // [5, 7, 19, 21, 23]
console.log(timSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
