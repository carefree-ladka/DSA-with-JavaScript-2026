// Kth Smallest Element in an Array
// Time: O(n) average, Space: O(1)

function findKthSmallest(nums, k) {
  return quickSelect(nums, 0, nums.length - 1, k - 1);
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
console.log(findKthSmallest([7,10,4,3,20,15], 3)); // 7
console.log(findKthSmallest([3,2,1,5,6,4], 2)); // 2
