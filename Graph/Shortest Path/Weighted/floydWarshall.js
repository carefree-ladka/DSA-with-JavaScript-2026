// Floyd-Warshall Algorithm
// Time: O(V³), Space: O(V²)

function floydWarshall(graph) {
  const n = graph.length;
  const dist = graph.map(row => [...row]);
  
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }
  }
  
  return dist;
}

// Test
const INF = Infinity;
const graph = [
  [0, 4, INF, 2],
  [INF, 0, 1, INF],
  [INF, INF, 0, 8],
  [INF, 5, INF, 0]
];
console.log(floydWarshall(graph));
// [[0, 4, 5, 2], [Infinity, 0, 1, 9], [Infinity, Infinity, 0, 8], [Infinity, 5, 6, 0]]
