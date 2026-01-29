// Number of Connected Components in an Undirected Graph
// Time: O(V + E), Space: O(V + E)

function countComponents(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  
  const visited = new Set();
  let count = 0;
  
  function dfs(node) {
    visited.add(node);
    for (let neighbor of adj[node]) {
      if (!visited.has(neighbor)) dfs(neighbor);
    }
  }
  
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      count++;
      dfs(i);
    }
  }
  
  return count;
}

// Test
console.log(countComponents(5, [[0,1],[1,2],[3,4]])); // 2
console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4]])); // 1
