// Meeting Rooms
// Time: O(n log n), Space: O(1)

function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) return false;
  }
  
  return true;
}

// Test
console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // false
console.log(canAttendMeetings([[7,10],[2,4]])); // true
