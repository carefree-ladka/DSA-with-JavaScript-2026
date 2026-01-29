// Redundant Connection
// Time: O(E * α(V)), Space: O(V)

function findRedundantConnection(edges) {
  const parent = Array.from({ length: edges.length + 1 }, (_, i) => i);
  
  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }
  
  function union(x, y) {
    const rootX = find(x), rootY = find(y);
    if (rootX === rootY) return false;
    parent[rootX] = rootY;
    return true;
  }
  
  for (const [u, v] of edges) {
    if (!union(u, v)) return [u, v];
  }
}

// Test
console.log(findRedundantConnection([[1,2],[1,3],[2,3]])); // [2,3]
console.log(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]])); // [1,4]
