// Rotting Oranges
// Time: O(m * n), Space: O(m * n)

function orangesRotting(grid) {
  const m = grid.length, n = grid[0].length;
  const queue = [];
  let fresh = 0, minutes = 0;
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
      if (grid[i][j] === 1) fresh++;
    }
  }
  
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  
  while (queue.length && fresh > 0) {
    const size = queue.length;
    for (let k = 0; k < size; k++) {
      const [i, j] = queue.shift();
      for (const [di, dj] of dirs) {
        const ni = i + di, nj = j + dj;
        if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] === 1) {
          grid[ni][nj] = 2;
          fresh--;
          queue.push([ni, nj]);
        }
      }
    }
    minutes++;
  }
  
  return fresh === 0 ? minutes : -1;
}

// Test
console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])); // 4
