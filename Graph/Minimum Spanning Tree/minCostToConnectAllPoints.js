// Min Cost to Connect All Points
// Time: O(N^2 log N), Space: O(N^2)

function minCostConnectPoints(points) {
  const n = points.length;
  const visited = new Set();
  const minHeap = [[0, 0]];
  let cost = 0;
  
  while (visited.size < n) {
    minHeap.sort((a, b) => a[0] - b[0]);
    const [weight, i] = minHeap.shift();
    
    if (visited.has(i)) continue;
    visited.add(i);
    cost += weight;
    
    for (let j = 0; j < n; j++) {
      if (!visited.has(j)) {
        const dist = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
        minHeap.push([dist, j]);
      }
    }
  }
  
  return cost;
}

// Test
console.log(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]])); // 20
console.log(minCostConnectPoints([[3,12],[-2,5],[-4,1]])); // 18
