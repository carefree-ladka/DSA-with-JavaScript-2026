// Wiggle Sort II
// Time: O(n) average, Space: O(n)

function wiggleSort(nums) {
  const n = nums.length;
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor((n + 1) / 2);
  
  let left = mid - 1, right = n - 1, i = 0;
  
  while (i < n) {
    nums[i++] = sorted[left--];
    if (i < n) nums[i++] = sorted[right--];
  }
}

// Test
const arr1 = [1,5,1,1,6,4];
wiggleSort(arr1);
console.log(arr1); // [1,6,1,5,1,4]

const arr2 = [1,3,2,2,3,1];
wiggleSort(arr2);
console.log(arr2); // [2,3,1,3,1,2]
