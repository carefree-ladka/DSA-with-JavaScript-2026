// Bellman-Ford Algorithm
// Time: O(V * E), Space: O(V)

function bellmanFord(n, edges, start) {
  const dist = Array(n).fill(Infinity);
  dist[start] = 0;
  
  for (let i = 0; i < n - 1; i++) {
    for (let [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }
  
  for (let [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      return null;
    }
  }
  
  return dist;
}

// Test
const edges = [[0,1,4], [0,2,2], [1,2,1], [1,3,5], [2,3,8]];
console.log(bellmanFord(4, edges, 0)); // [0, 3, 2, 8]
