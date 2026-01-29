// Minimum Interval to Include Each Query
// Time: O(n log n + q log q), Space: O(n + q)

function minInterval(intervals, queries) {
  intervals.sort((a, b) => a[0] - b[0]);
  const sortedQueries = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);
  const result = Array(queries.length).fill(-1);
  const minHeap = [];
  let i = 0;
  
  for (const [q, idx] of sortedQueries) {
    while (i < intervals.length && intervals[i][0] <= q) {
      const [l, r] = intervals[i];
      minHeap.push([r - l + 1, r]);
      i++;
    }
    
    while (minHeap.length && minHeap[0][1] < q) {
      minHeap.shift();
    }
    
    minHeap.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    if (minHeap.length) result[idx] = minHeap[0][0];
  }
  
  return result;
}

// Test
console.log(minInterval([[1,4],[2,4],[3,6],[4,4]], [2,3,4,5])); // [3,3,1,4]
console.log(minInterval([[2,3],[2,5],[1,8],[20,25]], [2,19,5,22])); // [2,-1,4,6]
