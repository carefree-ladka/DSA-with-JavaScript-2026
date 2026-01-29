// Fenwick Tree (Binary Indexed Tree)
// Time: O(log n) update/query, Space: O(n)

class FenwickTree {
  constructor(n) {
    this.tree = Array(n + 1).fill(0);
    this.n = n;
  }
  
  update(i, delta) {
    while (i <= this.n) {
      this.tree[i] += delta;
      i += i & -i;
    }
  }
  
  query(i) {
    let sum = 0;
    while (i > 0) {
      sum += this.tree[i];
      i -= i & -i;
    }
    return sum;
  }
  
  rangeQuery(left, right) {
    return this.query(right) - this.query(left - 1);
  }
}

// Test
const ft = new FenwickTree(5);
ft.update(1, 3);
ft.update(2, 2);
ft.update(3, 5);
console.log(ft.query(3)); // 10
console.log(ft.rangeQuery(2, 3)); // 7
ft.update(2, 3);
console.log(ft.rangeQuery(2, 3)); // 10
