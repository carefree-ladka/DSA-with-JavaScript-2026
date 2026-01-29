// Breadth First Search (BFS)
// Time: O(V + E), Space: O(V)

function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  const result = [];
  
  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    
    for (let neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  
  return result;
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
console.log(bfs(graph, 0)); // [0, 1, 2, 3, 4, 5]
