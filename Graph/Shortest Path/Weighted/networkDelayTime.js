// Network Delay Time
// Time: O(E log V), Space: O(V + E)

function networkDelayTime(times, n, k) {
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, w] of times) adj[u].push([v, w]);
  
  const dist = Array(n + 1).fill(Infinity);
  dist[k] = 0;
  const minHeap = [[0, k]];
  
  while (minHeap.length) {
    minHeap.sort((a, b) => a[0] - b[0]);
    const [time, node] = minHeap.shift();
    
    if (time > dist[node]) continue;
    
    for (const [neighbor, weight] of adj[node]) {
      const newTime = time + weight;
      if (newTime < dist[neighbor]) {
        dist[neighbor] = newTime;
        minHeap.push([newTime, neighbor]);
      }
    }
  }
  
  const maxTime = Math.max(...dist.slice(1));
  return maxTime === Infinity ? -1 : maxTime;
}

// Test
console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2)); // 2
console.log(networkDelayTime([[1,2,1]], 2, 1)); // 1
