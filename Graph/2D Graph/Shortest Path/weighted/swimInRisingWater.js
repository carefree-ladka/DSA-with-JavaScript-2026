// Swim in Rising Water
// Time: O(N^2 log N), Space: O(N^2)

function swimInWater(grid) {
  const n = grid.length;
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const minHeap = [[grid[0][0], 0, 0]];
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  
  while (minHeap.length) {
    minHeap.sort((a, b) => a[0] - b[0]);
    const [time, i, j] = minHeap.shift();
    
    if (i === n - 1 && j === n - 1) return time;
    if (visited[i][j]) continue;
    visited[i][j] = true;
    
    for (const [di, dj] of dirs) {
      const ni = i + di, nj = j + dj;
      if (ni >= 0 && ni < n && nj >= 0 && nj < n && !visited[ni][nj]) {
        minHeap.push([Math.max(time, grid[ni][nj]), ni, nj]);
      }
    }
  }
}

// Test
console.log(swimInWater([[0,2],[1,3]])); // 3
console.log(swimInWater([[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]])); // 16
