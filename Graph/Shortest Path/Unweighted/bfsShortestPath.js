// BFS Shortest Path (Unweighted)
// Time: O(V + E), Space: O(V)

function bfsShortestPath(graph, start, end) {
  const queue = [[start, 0]];
  const visited = new Set([start]);
  
  while (queue.length) {
    const [node, dist] = queue.shift();
    
    if (node === end) return dist;
    
    for (let neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  
  return -1;
}

// Test
const graph = {
  0: [1, 2],
  1: [0, 3, 4],
  2: [0, 5],
  3: [1],
  4: [1],
  5: [2]
};
console.log(bfsShortestPath(graph, 0, 5)); // 2
console.log(bfsShortestPath(graph, 0, 4)); // 2
