// Kth Largest Element in a Stream
// Time: O(log k) per add, Space: O(k)

class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.minHeap = [];
    for (let num of nums) this.add(num);
  }
  
  add(val) {
    if (this.minHeap.length < this.k) {
      this.minHeap.push(val);
      this.minHeap.sort((a, b) => a - b);
    } else if (val > this.minHeap[0]) {
      this.minHeap[0] = val;
      this.minHeap.sort((a, b) => a - b);
    }
    return this.minHeap[0];
  }
}

// Test
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3)); // 4
console.log(kthLargest.add(5)); // 5
console.log(kthLargest.add(10)); // 5
console.log(kthLargest.add(9)); // 8
console.log(kthLargest.add(4)); // 8
