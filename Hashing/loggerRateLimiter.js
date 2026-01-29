// Logger Rate Limiter
// Time: O(1), Space: O(n)

class Logger {
  constructor() {
    this.map = new Map();
  }
  
  shouldPrintMessage(timestamp, message) {
    if (!this.map.has(message) || timestamp - this.map.get(message) >= 10) {
      this.map.set(message, timestamp);
      return true;
    }
    return false;
  }
}

// Test
const logger = new Logger();
console.log(logger.shouldPrintMessage(1, "foo")); // true
console.log(logger.shouldPrintMessage(2, "bar")); // true
console.log(logger.shouldPrintMessage(3, "foo")); // false
console.log(logger.shouldPrintMessage(11, "foo")); // true
