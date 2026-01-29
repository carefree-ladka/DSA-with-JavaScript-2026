// Kruskal's Algorithm (MST)
// Time: O(E log E), Space: O(V)

function kruskalMST(n, edges) {
  edges.sort((a, b) => a[2] - b[2]);
  
  const parent = Array.from({ length: n }, (_, i) => i);
  
  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }
  
  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX === rootY) return false;
    parent[rootX] = rootY;
    return true;
  }
  
  let mstCost = 0;
  const mstEdges = [];
  
  for (let [u, v, w] of edges) {
    if (union(u, v)) {
      mstCost += w;
      mstEdges.push([u, v, w]);
      if (mstEdges.length === n - 1) break;
    }
  }
  
  return { cost: mstCost, edges: mstEdges };
}

// Test
const edges = [[0,1,4], [0,2,2], [1,2,1], [1,3,5], [2,3,8]];
console.log(kruskalMST(4, edges)); // {cost: 7, edges: [[1,2,1], [0,2,2], [1,3,5]]}
