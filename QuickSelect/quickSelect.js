// QuickSelect Algorithm
// Time: O(n) average, O(n²) worst, Space: O(1)

function quickSelect(arr, k) {
  return quickSelectHelper(arr, 0, arr.length - 1, k - 1);
}

function quickSelectHelper(arr, left, right, k) {
  if (left === right) return arr[left];

  const pivotIndex = partition(arr, left, right);

  if (k === pivotIndex) return arr[k];
  else if (k < pivotIndex)
    return quickSelectHelper(arr, left, pivotIndex - 1, k);
  else return quickSelectHelper(arr, pivotIndex + 1, right, k);
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

// Test
console.log(quickSelect([3, 2, 1, 5, 6, 4], 2)); // 2
console.log(quickSelect([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 3
