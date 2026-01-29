// Remove Covered Intervals
// Time: O(n log n), Space: O(1)

function removeCoveredIntervals(intervals) {
  intervals.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
  
  let count = 0, prevEnd = 0;
  
  for (let [start, end] of intervals) {
    if (end > prevEnd) {
      count++;
      prevEnd = end;
    }
  }
  
  return count;
}

// Test
console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]])); // 2
console.log(removeCoveredIntervals([[1,4],[2,3]])); // 1
