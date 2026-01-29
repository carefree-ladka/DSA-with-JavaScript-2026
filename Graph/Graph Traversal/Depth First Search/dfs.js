// Depth First Search (DFS)
// Time: O(V + E), Space: O(V)

function dfs(graph, start) {
  const visited = new Set();
  const result = [];
  
  function dfsHelper(node) {
    visited.add(node);
    result.push(node);
    
    for (let neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        dfsHelper(neighbor);
      }
    }
  }
  
  dfsHelper(start);
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
console.log(dfs(graph, 0)); // [0, 1, 3, 4, 2, 5]
