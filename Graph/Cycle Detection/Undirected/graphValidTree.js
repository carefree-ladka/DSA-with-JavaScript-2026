// Graph Valid Tree
// Time: O(V + E), Space: O(V + E)

function validTree(n, edges) {
  if (edges.length !== n - 1) return false;
  
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  
  const visited = new Set();
  
  function dfs(node, parent) {
    visited.add(node);
    for (let neighbor of adj[node]) {
      if (neighbor === parent) continue;
      if (visited.has(neighbor)) return false;
      if (!dfs(neighbor, node)) return false;
    }
    return true;
  }
  
  return dfs(0, -1) && visited.size === n;
}

// Test
console.log(validTree(5, [[0,1],[0,2],[0,3],[1,4]])); // true
console.log(validTree(5, [[0,1],[1,2],[2,3],[1,3],[1,4]])); // false
