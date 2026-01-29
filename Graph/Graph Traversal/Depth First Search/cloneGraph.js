// Clone Graph
// Time: O(V + E), Space: O(V)

function cloneGraph(node) {
  if (!node) return null;
  const map = new Map();
  
  function dfs(node) {
    if (map.has(node)) return map.get(node);
    
    const clone = { val: node.val, neighbors: [] };
    map.set(node, clone);
    
    for (let neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    
    return clone;
  }
  
  return dfs(node);
}

// Test
const node1 = { val: 1, neighbors: [] };
const node2 = { val: 2, neighbors: [] };
node1.neighbors = [node2];
node2.neighbors = [node1];
console.log(cloneGraph(node1));
