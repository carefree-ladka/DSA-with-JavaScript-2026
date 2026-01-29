// My Calendar I
// Time: O(n) per book, Space: O(n)

class MyCalendar {
  constructor() {
    this.events = [];
  }
  
  book(start, end) {
    for (let [s, e] of this.events) {
      if (start < e && end > s) return false;
    }
    this.events.push([start, end]);
    return true;
  }
}

// Test
const calendar = new MyCalendar();
console.log(calendar.book(10, 20)); // true
console.log(calendar.book(15, 25)); // false
console.log(calendar.book(20, 30)); // true
