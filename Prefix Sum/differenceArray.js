// Difference Array Template
// Time: O(n + q), Space: O(n)

class DifferenceArray {
  constructor(arr) {
    this.n = arr.length;
    this.diff = Array(this.n + 1).fill(0);
    
    for (let i = 0; i < this.n; i++) {
      this.diff[i] = arr[i] - (i > 0 ? arr[i - 1] : 0);
    }
  }
  
  rangeUpdate(left, right, val) {
    this.diff[left] += val;
    this.diff[right + 1] -= val;
  }
  
  getArray() {
    const result = Array(this.n);
    result[0] = this.diff[0];
    for (let i = 1; i < this.n; i++) {
      result[i] = result[i - 1] + this.diff[i];
    }
    return result;
  }
}

// Test
const da = new DifferenceArray([1, 2, 3, 4, 5]);
da.rangeUpdate(1, 3, 2);
console.log(da.getArray()); // [1, 4, 5, 6, 5]
