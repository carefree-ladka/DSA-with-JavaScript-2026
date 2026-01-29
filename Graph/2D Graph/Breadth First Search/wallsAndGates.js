// Walls and Gates
// Time: O(m * n), Space: O(m * n)

function wallsAndGates(rooms) {
  const m = rooms.length, n = rooms[0].length;
  const queue = [];
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 0) queue.push([i, j]);
    }
  }
  
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  
  while (queue.length) {
    const [i, j] = queue.shift();
    for (const [di, dj] of dirs) {
      const ni = i + di, nj = j + dj;
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && rooms[ni][nj] === 2147483647) {
        rooms[ni][nj] = rooms[i][j] + 1;
        queue.push([ni, nj]);
      }
    }
  }
}

// Test
const rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]];
wallsAndGates(rooms);
console.log(rooms); // [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
