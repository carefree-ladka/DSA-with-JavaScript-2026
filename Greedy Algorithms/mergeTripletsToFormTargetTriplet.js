// Merge Triplets to Form Target Triplet
// Time: O(n), Space: O(1)

function mergeTriplets(triplets, target) {
  const [t1, t2, t3] = target;
  let found = [false, false, false];
  
  for (const [a, b, c] of triplets) {
    if (a <= t1 && b <= t2 && c <= t3) {
      if (a === t1) found[0] = true;
      if (b === t2) found[1] = true;
      if (c === t3) found[2] = true;
    }
  }
  
  return found[0] && found[1] && found[2];
}

// Test
console.log(mergeTriplets([[2,5,3],[1,8,4],[1,7,5]], [2,7,5])); // true
console.log(mergeTriplets([[3,4,5],[4,5,6]], [3,2,5])); // false
