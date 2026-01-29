// My Calendar II
// Time: O(n) per book, Space: O(n)

class MyCalendarTwo {
  constructor() {
    this.events = [];
    this.overlaps = [];
  }
  
  book(start, end) {
    for (let [s, e] of this.overlaps) {
      if (start < e && end > s) return false;
    }
    
    for (let [s, e] of this.events) {
      if (start < e && end > s) {
        this.overlaps.push([Math.max(start, s), Math.min(end, e)]);
      }
    }
    
    this.events.push([start, end]);
    return true;
  }
}

// Test
const calendar = new MyCalendarTwo();
console.log(calendar.book(10, 20)); // true
console.log(calendar.book(50, 60)); // true
console.log(calendar.book(10, 40)); // true
console.log(calendar.book(5, 15)); // false
