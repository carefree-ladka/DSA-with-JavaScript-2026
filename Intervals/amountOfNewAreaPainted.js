// Amount of New Area Painted Each Day
// Time: O(n * m), Space: O(m)

function amountPainted(paint) {
  const painted = new Set();
  const result = [];
  
  for (let [start, end] of paint) {
    let count = 0;
    for (let i = start; i < end; i++) {
      if (!painted.has(i)) {
        painted.add(i);
        count++;
      }
    }
    result.push(count);
  }
  
  return result;
}

// Test
console.log(amountPainted([[1,4],[4,7],[5,8]])); // [3,3,1]
console.log(amountPainted([[1,4],[5,8],[4,7]])); // [3,3,1]
