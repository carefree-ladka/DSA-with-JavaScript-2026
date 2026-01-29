// Minimum Platforms
// Time: O(n log n), Space: O(1)

function minPlatforms(arrival, departure) {
  arrival.sort((a, b) => a - b);
  departure.sort((a, b) => a - b);
  
  let platforms = 0, maxPlatforms = 0;
  let i = 0, j = 0;
  
  while (i < arrival.length) {
    if (arrival[i] <= departure[j]) {
      platforms++;
      maxPlatforms = Math.max(maxPlatforms, platforms);
      i++;
    } else {
      platforms--;
      j++;
    }
  }
  
  return maxPlatforms;
}

// Test
console.log(minPlatforms([900,940,950,1100,1500,1800], [910,1200,1120,1130,1900,2000])); // 3
