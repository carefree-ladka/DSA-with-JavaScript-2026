// Maximum Population Year
// Time: O(n), Space: O(1)

function maximumPopulation(logs) {
  const years = Array(101).fill(0);
  
  for (let [birth, death] of logs) {
    years[birth - 1950]++;
    years[death - 1950]--;
  }
  
  let maxPop = 0, maxYear = 1950, currPop = 0;
  
  for (let i = 0; i < 101; i++) {
    currPop += years[i];
    if (currPop > maxPop) {
      maxPop = currPop;
      maxYear = 1950 + i;
    }
  }
  
  return maxYear;
}

// Test
console.log(maximumPopulation([[1993,1999],[2000,2010]])); // 1993
console.log(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]])); // 1960
