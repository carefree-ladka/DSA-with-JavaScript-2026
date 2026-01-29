// Course Schedule
// Time: O(V + E), Space: O(V + E)

function canFinish(numCourses, prerequisites) {
  const adj = Array.from({ length: numCourses }, () => []);
  for (const [course, pre] of prerequisites) adj[pre].push(course);
  
  const visited = Array(numCourses).fill(0);
  
  function hasCycle(node) {
    if (visited[node] === 1) return true;
    if (visited[node] === 2) return false;
    
    visited[node] = 1;
    for (let neighbor of adj[node]) {
      if (hasCycle(neighbor)) return true;
    }
    visited[node] = 2;
    return false;
  }
  
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }
  
  return true;
}

// Test
console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false
