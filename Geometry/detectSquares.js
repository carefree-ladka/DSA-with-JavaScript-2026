// Detect Squares
// Time: O(n) per count, Space: O(n)

class DetectSquares {
  constructor() {
    this.points = new Map();
  }
  
  add(point) {
    const key = `${point[0]},${point[1]}`;
    this.points.set(key, (this.points.get(key) || 0) + 1);
  }
  
  count(point) {
    const [x1, y1] = point;
    let result = 0;
    
    for (const [key, cnt] of this.points) {
      const [x3, y3] = key.split(',').map(Number);
      if (Math.abs(x1 - x3) !== Math.abs(y1 - y3) || x1 === x3 || y1 === y3) continue;
      
      const key2 = `${x1},${y3}`;
      const key4 = `${x3},${y1}`;
      result += cnt * (this.points.get(key2) || 0) * (this.points.get(key4) || 0);
    }
    
    return result;
  }
}

// Test
const ds = new DetectSquares();
ds.add([3, 10]);
ds.add([11, 2]);
ds.add([3, 2]);
console.log(ds.count([11, 10])); // 1
console.log(ds.count([14, 8])); // 0
ds.add([11, 2]);
console.log(ds.count([11, 10])); // 2
