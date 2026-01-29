// Car Fleet
// Time: O(n log n), Space: O(n)

function carFleet(target, position, speed) {
  const cars = position.map((p, i) => [p, (target - p) / speed[i]]).sort((a, b) => b[0] - a[0]);
  let fleets = 0, prevTime = 0;
  
  for (const [pos, time] of cars) {
    if (time > prevTime) {
      fleets++;
      prevTime = time;
    }
  }
  
  return fleets;
}

// Test
console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3])); // 3
console.log(carFleet(10, [3], [3])); // 1
