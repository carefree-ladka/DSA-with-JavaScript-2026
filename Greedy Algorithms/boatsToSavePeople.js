// Boats to Save People
// Time: O(n log n), Space: O(1)

function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0, right = people.length - 1, boats = 0;
  
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    boats++;
  }
  
  return boats;
}

// Test
console.log(numRescueBoats([1,2], 3)); // 1
console.log(numRescueBoats([3,2,2,1], 3)); // 3
console.log(numRescueBoats([3,5,3,4], 5)); // 4
