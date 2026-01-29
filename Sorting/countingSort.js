// Counting Sort
// Time: O(n + k), Space: O(k) where k is range

function countingSort(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  const count = Array(range).fill(0);
  const output = Array(arr.length);
  
  for (let num of arr) count[num - min]++;
  for (let i = 1; i < range; i++) count[i] += count[i - 1];
  
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }
  
  return output;
}

// Test
console.log(countingSort([4, 2, 2, 8, 3, 3, 1])); // [1, 2, 2, 3, 3, 4, 8]
console.log(countingSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
