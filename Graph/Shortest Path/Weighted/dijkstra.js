// Dijkstra's Algorithm
// Time: O((V + E) log V), Space: O(V)

function dijkstra(graph, start) {
  const dist = {};
  const visited = new Set();
  const pq = [[0, start]];
  
  for (let node in graph) dist[node] = Infinity;
  dist[start] = 0;
  
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, node] = pq.shift();
    
    if (visited.has(node)) continue;
    visited.add(node);
    
    for (let [neighbor, weight] of graph[node] || []) {
      const newDist = d + weight;
      if (newDist < dist[neighbor]) {
        dist[neighbor] = newDist;
        pq.push([newDist, neighbor]);
      }
    }
  }
  
  return dist;
}

// Test
const graph = {
  'A': [['B', 4], ['C', 2]],
  'B': [['A', 4], ['C', 1], ['D', 5]],
  'C': [['A', 2], ['B', 1], ['D', 8]],
  'D': [['B', 5], ['C', 8]]
};
console.log(dijkstra(graph, 'A')); // {A: 0, B: 3, C: 2, D: 8}
