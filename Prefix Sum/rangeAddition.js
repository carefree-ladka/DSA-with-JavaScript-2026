// Range Addition
// Time: O(n + k), Space: O(n)

function getModifiedArray(length, updates) {
  const diff = Array(length + 1).fill(0);
  
  for (let [start, end, inc] of updates) {
    diff[start] += inc;
    diff[end + 1] -= inc;
  }
  
  const result = Array(length);
  result[0] = diff[0];
  for (let i = 1; i < length; i++) {
    result[i] = result[i - 1] + diff[i];
  }
  
  return result;
}

// Test
console.log(getModifiedArray(5, [[1,3,2],[2,4,3],[0,2,-2]])); // [-2,0,3,5,3]
