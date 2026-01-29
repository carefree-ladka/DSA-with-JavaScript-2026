// Meeting Rooms II
// Time: O(n log n), Space: O(n)

function minMeetingRooms(intervals) {
  const starts = intervals.map(i => i[0]).sort((a, b) => a - b);
  const ends = intervals.map(i => i[1]).sort((a, b) => a - b);
  
  let rooms = 0, maxRooms = 0, endPtr = 0;
  
  for (let start of starts) {
    if (start < ends[endPtr]) {
      rooms++;
    } else {
      endPtr++;
    }
    maxRooms = Math.max(maxRooms, rooms);
  }
  
  return maxRooms;
}

// Test
console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // 2
console.log(minMeetingRooms([[7,10],[2,4]])); // 1
