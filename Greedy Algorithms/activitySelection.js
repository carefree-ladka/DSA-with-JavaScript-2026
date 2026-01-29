// Activity Selection Problem
// Time: O(n log n), Space: O(1)

function activitySelection(start, end) {
  const activities = start.map((s, i) => [s, end[i]]);
  activities.sort((a, b) => a[1] - b[1]);
  
  const selected = [0];
  let lastEnd = activities[0][1];
  
  for (let i = 1; i < activities.length; i++) {
    if (activities[i][0] >= lastEnd) {
      selected.push(i);
      lastEnd = activities[i][1];
    }
  }
  
  return selected;
}

// Test
console.log(activitySelection([1,3,0,5,8,5], [2,4,6,7,9,9])); // [0,1,3,4]
