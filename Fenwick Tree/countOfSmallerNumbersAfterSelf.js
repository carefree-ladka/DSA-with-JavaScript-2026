// Count of Smaller Numbers After Self
// Time: O(n log n), Space: O(n)

function countSmaller(nums) {
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  const map = new Map();
  sorted.forEach((num, i) => map.set(num, i + 1));
  
  const tree = Array(sorted.length + 1).fill(0);
  const result = [];
  
  function update(i) {
    while (i < tree.length) {
      tree[i]++;
      i += i & -i;
    }
  }
  
  function query(i) {
    let sum = 0;
    while (i > 0) {
      sum += tree[i];
      i -= i & -i;
    }
    return sum;
  }
  
  for (let i = nums.length - 1; i >= 0; i--) {
    const idx = map.get(nums[i]);
    result.unshift(query(idx - 1));
    update(idx);
  }
  
  return result;
}

// Test
console.log(countSmaller([5,2,6,1])); // [2,1,1,0]
console.log(countSmaller([-1])); // [0]
