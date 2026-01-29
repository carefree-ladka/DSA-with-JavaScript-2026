// Queue Reconstruction by Height
// Time: O(n²), Space: O(n)

function reconstructQueue(people) {
  people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
  
  const result = [];
  for (let person of people) {
    result.splice(person[1], 0, person);
  }
  
  return result;
}

// Test
console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]));
// [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
