// Describe the Painting
// Time: O(n log n), Space: O(n)

function splitPainting(segments) {
  const events = new Map();
  
  for (let [start, end, color] of segments) {
    events.set(start, (events.get(start) || 0) + color);
    events.set(end, (events.get(end) || 0) - color);
  }
  
  const positions = [...events.keys()].sort((a, b) => a - b);
  const result = [];
  let mix = 0;
  
  for (let i = 0; i < positions.length - 1; i++) {
    mix += events.get(positions[i]);
    if (mix > 0) {
      result.push([positions[i], positions[i + 1], mix]);
    }
  }
  
  return result;
}

// Test
console.log(splitPainting([[1,4,5],[4,7,7],[1,7,9]])); // [[1,4,14],[4,7,16]]
