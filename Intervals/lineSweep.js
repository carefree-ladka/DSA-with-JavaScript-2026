// Line Sweep Algorithm Template
// Time: O(n log n), Space: O(n)

function lineSweep(intervals) {
  const events = [];
  
  for (let [start, end] of intervals) {
    events.push([start, 1]);
    events.push([end, -1]);
  }
  
  events.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  
  let active = 0, maxActive = 0;
  
  for (let [time, type] of events) {
    active += type;
    maxActive = Math.max(maxActive, active);
  }
  
  return maxActive;
}

// Test
console.log(lineSweep([[1,3],[2,6],[8,10],[15,18]])); // 2
console.log(lineSweep([[1,4],[2,5],[3,6]])); // 3
