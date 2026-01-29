// Brightest Position on Street
// Time: O(n log n), Space: O(n)

function brightestPosition(lights) {
  const events = [];
  
  for (let [pos, range] of lights) {
    events.push([pos - range, 1]);
    events.push([pos + range + 1, -1]);
  }
  
  events.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  
  let brightness = 0, maxBrightness = 0, result = 0;
  
  for (let [pos, change] of events) {
    brightness += change;
    if (brightness > maxBrightness) {
      maxBrightness = brightness;
      result = pos;
    }
  }
  
  return result;
}

// Test
console.log(brightestPosition([[-3,2],[1,2],[3,3]])); // -1
console.log(brightestPosition([[1,0],[0,1]])); // 1
