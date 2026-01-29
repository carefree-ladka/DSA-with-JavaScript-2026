// Multi-Source BFS
// Time: O(V + E), Space: O(V)

function multiSourceBFS(grid, sources) {
  const m = grid.length, n = grid[0].length;
  const queue = [...sources];
  const visited = new Set(sources.map(([i, j]) => `${i},${j}`));
  const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
  let level = 0;
  
  while (queue.length) {
    const size = queue.length;
    for (let k = 0; k < size; k++) {
      const [i, j] = queue.shift();
      
      for (const [di, dj] of dirs) {
        const ni = i + di, nj = j + dj;
        const key = `${ni},${nj}`;
        
        if (ni >= 0 && ni < m && nj >= 0 && nj < n && !visited.has(key) && grid[ni][nj] !== -1) {
          visited.add(key);
          queue.push([ni, nj]);
        }
      }
    }
    level++;
  }
  
  return level - 1;
}

// Test
const grid = [[0,0,0], [0,0,0], [0,0,0]];
const sources = [[0,0], [2,2]];
console.log(multiSourceBFS(grid, sources)); // 2
