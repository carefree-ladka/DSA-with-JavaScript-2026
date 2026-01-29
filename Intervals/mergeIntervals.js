// Merge Intervals - LeetCode #56
// Pattern: Sort by start time + merge overlapping

function merge(intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    if (current[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      merged.push(current);
    }
  }

  return merged;
}

// Test Cases
function runTests() {
  console.log("Merge Intervals Tests:");
  console.log(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  ); // [[1,6],[8,10],[15,18]]
  console.log(
    merge([
      [1, 4],
      [4, 5],
    ])
  ); // [[1,5]]
  console.log(
    merge([
      [1, 4],
      [0, 4],
    ])
  ); // [[0,4]]
}

runTests();
