// 0-1 BFS
// Time: O(V + E), Space: O(V)

function zeroOneBFS(graph, start, end) {
  const dist = new Map();
  const deque = [[start, 0]];
  dist.set(start, 0);
  
  while (deque.length) {
    const [node, d] = deque.shift();
    
    if (node === end) return d;
    
    for (let [neighbor, weight] of graph[node] || []) {
      const newDist = d + weight;
      
      if (!dist.has(neighbor) || newDist < dist.get(neighbor)) {
        dist.set(neighbor, newDist);
        
        if (weight === 0) {
          deque.unshift([neighbor, newDist]);
        } else {
          deque.push([neighbor, newDist]);
        }
      }
    }
  }
  
  return dist.get(end) ?? -1;
}

// Test
const graph = {
  0: [[1, 0], [2, 1]],
  1: [[3, 1]],
  2: [[3, 0]],
  3: []
};
console.log(zeroOneBFS(graph, 0, 3)); // 1
