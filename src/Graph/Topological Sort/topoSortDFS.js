const topoSortDFS = (n, edges) => {
  const adj = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    adj[u].push(v);
  }

  const visited = Array(n).fill(false);
  const stack = [];

  const dfs = (node) => {
    visited[node] = true;

    for (const nei of adj[node]) {
      if (!visited[nei]) {
        dfs(nei);
      }
    }

    stack.push(node);
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) dfs(i);
  }

  return stack.reverse();
};

// Test Case
const n = 4;
const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
];

console.log(topoSortDFS(n, edges)); // [ 0, 1, 2, 3 ]
