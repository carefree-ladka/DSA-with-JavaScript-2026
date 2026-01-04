import { PriorityQueue } from "./PriorityQueue.js";

class MedianFinder {
  constructor() {
    // Max heap for left half
    this.left = new PriorityQueue((a, b) => b - a);
    // Min heap for right half
    this.right = new PriorityQueue((a, b) => a - b);
  }

  addNum = (num) => {
    // Step 1: always push to left
    this.left.offer(num);

    // Step 2: move max from left → right
    this.right.offer(this.left.poll());

    // Step 3: balance sizes
    if (this.right.size() > this.left.size()) {
      this.left.offer(this.right.poll());
    }
  };

  findMedian = () => {
    if (this.left.size() > this.right.size()) {
      return this.left.peek();
    }
    return (this.left.peek() + this.right.peek()) / 2;
  };
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]

console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)

medianFinder.addNum(3); // arr[1, 2, 3]

console.log(medianFinder.findMedian()); // return 2.0
