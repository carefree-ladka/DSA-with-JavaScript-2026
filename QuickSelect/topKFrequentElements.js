// Top K Frequent Elements
// Time: O(n) average, Space: O(n)

function topKFrequent(nums, k) {
  const count = new Map();
  for (let num of nums) count.set(num, (count.get(num) || 0) + 1);
  
  const unique = [...count.keys()];
  
  function quickSelect(left, right, k) {
    if (left === right) return;
    
    const pivotIndex = partition(left, right);
    
    if (k === pivotIndex) return;
    else if (k < pivotIndex) quickSelect(left, pivotIndex - 1, k);
    else quickSelect(pivotIndex + 1, right, k);
  }
  
  function partition(left, right) {
    const pivot = count.get(unique[right]);
    let i = left;
    
    for (let j = left; j < right; j++) {
      if (count.get(unique[j]) > pivot) {
        [unique[i], unique[j]] = [unique[j], unique[i]];
        i++;
      }
    }
    [unique[i], unique[right]] = [unique[right], unique[i]];
    return i;
  }
  
  quickSelect(0, unique.length - 1, k - 1);
  return unique.slice(0, k);
}

// Test
console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
