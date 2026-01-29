// Binary Search on Answer (Template)
// Time: O(n log(max-min)), Space: O(1)

function binarySearchOnAnswer(arr, target) {
  let left = Math.min(...arr), right = Math.max(...arr);
  let result = -1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (isPossible(arr, mid, target)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return result;
}

function isPossible(arr, mid, target) {
  // Custom logic based on problem
  return true;
}

// Example: Split Array Largest Sum
function splitArray(nums, k) {
  let left = Math.max(...nums), right = nums.reduce((a, b) => a + b, 0);
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let sum = 0, splits = 1;
    
    for (let num of nums) {
      if (sum + num > mid) {
        splits++;
        sum = num;
      } else {
        sum += num;
      }
    }
    
    if (splits <= k) right = mid;
    else left = mid + 1;
  }
  
  return left;
}

// Test
console.log(splitArray([7,2,5,10,8], 2)); // 18
