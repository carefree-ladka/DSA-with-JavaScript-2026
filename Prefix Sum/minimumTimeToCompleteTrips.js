// Minimum Time to Complete Trips
// Time: O(n log(min * totalTrips)), Space: O(1)

function minimumTime(time, totalTrips) {
  let left = 1, right = Math.min(...time) * totalTrips;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let trips = 0;
    
    for (let t of time) {
      trips += Math.floor(mid / t);
      if (trips >= totalTrips) break;
    }
    
    if (trips >= totalTrips) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  
  return left;
}

// Test
console.log(minimumTime([1,2,3], 5)); // 3
console.log(minimumTime([2], 1)); // 2
