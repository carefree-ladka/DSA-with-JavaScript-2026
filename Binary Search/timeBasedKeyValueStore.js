// Time Based Key-Value Store
// Time: set O(1), get O(log n), Space: O(n)

class TimeMap {
  constructor() {
    this.map = new Map();
  }

  set(key, value, timestamp) {
    if (!this.map.has(key)) this.map.set(key, []);
    this.map.get(key).push([timestamp, value]);
  }

  get(key, timestamp) {
    const values = this.map.get(key) || [];
    let left = 0,
      right = values.length - 1,
      result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (values[mid][0] <= timestamp) {
        result = values[mid][1];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }
}

// Test
const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1)); // "bar"
console.log(timeMap.get("foo", 3)); // "bar"
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 4)); // "bar2"
console.log(timeMap.get("foo", 5)); // "bar2"
