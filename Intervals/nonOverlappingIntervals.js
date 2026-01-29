// Non-overlapping Intervals - LeetCode #435
// Pattern: Greedy + Sort by end time

function eraseOverlapIntervals(intervals) {
  if (intervals.length <= 1) return 0;

  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) {
      count++;
    } else {
      end = intervals[i][1];
    }
  }

  return count;
}

// Test Cases
function runTests() {
  console.log("Non-overlapping Intervals Tests:");
  console.log(
    eraseOverlapIntervals([
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 3],
    ])
  ); // 1
  console.log(
    eraseOverlapIntervals([
      [1, 2],
      [1, 2],
      [1, 2],
    ])
  ); // 2
  console.log(
    eraseOverlapIntervals([
      [1, 2],
      [2, 3],
    ])
  ); // 0
}

runTests();
