// Prim's Algorithm (MST)
// Time: O((V + E) log V), Space: O(V)

function primMST(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  for (let [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }
  
  const visited = new Set([0]);
  const pq = graph[0].map(([v, w]) => [w, 0, v]);
  let mstCost = 0;
  const mstEdges = [];
  
  while (visited.size < n && pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [weight, u, v] = pq.shift();
    
    if (visited.has(v)) continue;
    
    visited.add(v);
    mstCost += weight;
    mstEdges.push([u, v, weight]);
    
    for (let [neighbor, w] of graph[v]) {
      if (!visited.has(neighbor)) {
        pq.push([w, v, neighbor]);
      }
    }
  }
  
  return { cost: mstCost, edges: mstEdges };
}

// Test
const edges = [[0,1,4], [0,2,2], [1,2,1], [1,3,5], [2,3,8]];
console.log(primMST(4, edges)); // {cost: 7, edges: [[0,2,2], [2,1,1], [1,3,5]]}
