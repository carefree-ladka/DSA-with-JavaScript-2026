// Corporate Flight Bookings
// Time: O(n + m), Space: O(n)

function corpFlightBookings(bookings, n) {
  const result = Array(n).fill(0);
  
  for (let [first, last, seats] of bookings) {
    result[first - 1] += seats;
    if (last < n) result[last] -= seats;
  }
  
  for (let i = 1; i < n; i++) {
    result[i] += result[i - 1];
  }
  
  return result;
}

// Test
console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5)); // [10,55,45,25,25]
