// Data Stream as Disjoint Intervals
// Time: O(n) per addNum, Space: O(n)

class SummaryRanges {
  constructor() {
    this.intervals = [];
  }
  
  addNum(value) {
    const newInterval = [value, value];
    const merged = [];
    let i = 0;
    
    while (i < this.intervals.length && this.intervals[i][1] < newInterval[0] - 1) {
      merged.push(this.intervals[i++]);
    }
    
    while (i < this.intervals.length && this.intervals[i][0] <= newInterval[1] + 1) {
      newInterval[0] = Math.min(newInterval[0], this.intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], this.intervals[i][1]);
      i++;
    }
    
    merged.push(newInterval);
    
    while (i < this.intervals.length) {
      merged.push(this.intervals[i++]);
    }
    
    this.intervals = merged;
  }
  
  getIntervals() {
    return this.intervals;
  }
}

// Test
const sr = new SummaryRanges();
sr.addNum(1);
console.log(sr.getIntervals()); // [[1,1]]
sr.addNum(3);
console.log(sr.getIntervals()); // [[1,1],[3,3]]
sr.addNum(7);
console.log(sr.getIntervals()); // [[1,1],[3,3],[7,7]]
sr.addNum(2);
console.log(sr.getIntervals()); // [[1,3],[7,7]]
