// Car Pooling
// Time: O(n log n), Space: O(n)

function carPooling(trips, capacity) {
  const events = [];
  
  for (let [passengers, start, end] of trips) {
    events.push([start, passengers]);
    events.push([end, -passengers]);
  }
  
  events.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  
  let current = 0;
  for (let [time, change] of events) {
    current += change;
    if (current > capacity) return false;
  }
  
  return true;
}

// Test
console.log(carPooling([[2,1,5],[3,3,7]], 4)); // false
console.log(carPooling([[2,1,5],[3,3,7]], 5)); // true
