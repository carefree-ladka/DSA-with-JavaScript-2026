const topoSortKahn = (n, edges) => {
  const adj = Array.from({ length: n }, () => []);
  const indegree = Array(n).fill(0);

  for (const [u, v] of edges) {
    adj[u].push(v);
    indegree[v]++;
  }

  const queue = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (const nei of adj[node]) {
      indegree[nei]--;
      if (indegree[nei] === 0) {
        queue.push(nei);
      }
    }
  }

  return result.length === n ? result : []; // empty → cycle
};

// Test Case
const n = 4;
const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
];

console.log(topoSortKahn(n, edges)); // [ 0, 1, 2, 3 ]
