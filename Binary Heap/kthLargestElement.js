import { PriorityQueue } from "./PriorityQueue.js";

const kthLargest = (nums = [], k) => {
  if (k > nums.length) return -1;

  const minHeap = new PriorityQueue((a, b) => a - b);

  for (const num of nums) {
    minHeap.offer(num);
    if (minHeap.size() > k) minHeap.poll();
  }

  return minHeap.peek();
};

console.log(kthLargest([8, 22, 1, 3, 11, 12], 3)); // 11
console.log(kthLargest([8, 22, 1, 3, 11, 12], 30)); // -1
