// Top K Frequent Elements - LeetCode #347
// Pattern: Frequency Counting + Bucket Sort

function topKFrequent(nums, k) {
  const freqMap = new Map();

  // Count frequencies
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Bucket sort by frequency
  const buckets = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (let [num, freq] of freqMap) {
    buckets[freq].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }

  return result.slice(0, k);
}

// Test Cases
function runTests() {
  console.log("Top K Frequent Tests:");
  console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
  console.log(topKFrequent([1], 1)); // [1]
  console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)); // [-1,2]
}

runTests();
