// Employee Free Time
// Time: O(n log n), Space: O(n)

function employeeFreeTime(schedule) {
  const intervals = [];
  for (let employee of schedule) {
    intervals.push(...employee);
  }
  
  intervals.sort((a, b) => a[0] - b[0]);
  
  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      merged.push(intervals[i]);
    }
  }
  
  const freeTime = [];
  for (let i = 1; i < merged.length; i++) {
    freeTime.push([merged[i - 1][1], merged[i][0]]);
  }
  
  return freeTime;
}

// Test
console.log(employeeFreeTime([[[1,3],[4,6]], [[2,4]], [[2,5],[9,12]]])); // [[6,9]]
