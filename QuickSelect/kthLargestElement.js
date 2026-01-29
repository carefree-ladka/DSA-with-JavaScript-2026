// Kth Largest Element in an Array
// Time: O(n) average, Space: O(1)

function findKthLargest(nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

function quickSelect(arr, left, right, k) {
  if (left === right) return arr[left];
  
  const pivotIndex = partition(arr, left, right);
  
  if (k === pivotIndex) return arr[k];
  else if (k < pivotIndex) return quickSelect(arr, left, pivotIndex - 1, k);
  else return quickSelect(arr, pivotIndex + 1, right, k);
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
console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4
