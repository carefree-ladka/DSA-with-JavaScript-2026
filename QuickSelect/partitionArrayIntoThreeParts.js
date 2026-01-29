// Partition Array into Three Parts with Equal Sum
// Time: O(n), Space: O(1)

function canThreePartsEqualSum(arr) {
  const total = arr.reduce((a, b) => a + b, 0);
  if (total % 3 !== 0) return false;
  
  const target = total / 3;
  let sum = 0, count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === target) {
      count++;
      sum = 0;
    }
  }
  
  return count >= 3;
}

// Test
console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1])); // true
console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1])); // false
