// Count Days Spent Together
// Time: O(1), Space: O(1)

function countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  const months = [31,28,31,30,31,30,31,31,30,31,30,31];
  
  function toDays(date) {
    const [month, day] = date.split('-').map(Number);
    let days = day;
    for (let i = 0; i < month - 1; i++) days += months[i];
    return days;
  }
  
  const start = Math.max(toDays(arriveAlice), toDays(arriveBob));
  const end = Math.min(toDays(leaveAlice), toDays(leaveBob));
  
  return Math.max(0, end - start + 1);
}

// Test
console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19")); // 3
console.log(countDaysTogether("10-01", "10-31", "11-01", "12-31")); // 0
