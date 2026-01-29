// Course Schedule II
// Time: O(V + E), Space: O(V + E)

function findOrder(numCourses, prerequisites) {
  const adj = Array.from({ length: numCourses }, () => []);
  const indegree = Array(numCourses).fill(0);
  
  for (const [course, pre] of prerequisites) {
    adj[pre].push(course);
    indegree[course]++;
  }
  
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }
  
  const result = [];
  
  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    
    for (const neighbor of adj[node]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) queue.push(neighbor);
    }
  }
  
  return result.length === numCourses ? result : [];
}

// Test
console.log(findOrder(2, [[1,0]])); // [0,1]
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])); // [0,1,2,3] or [0,2,1,3]
