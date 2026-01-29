// Bucket Sort
// Time: O(n + k) average, Space: O(n + k)

function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) return arr;
  
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = Array.from({ length: bucketCount }, () => []);
  
  for (let num of arr) {
    const idx = Math.floor((num - min) / bucketSize);
    buckets[idx].push(num);
  }
  
  const result = [];
  for (let bucket of buckets) {
    bucket.sort((a, b) => a - b);
    result.push(...bucket);
  }
  
  return result;
}

// Test
console.log(bucketSort([0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434])); // [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897]
console.log(bucketSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
