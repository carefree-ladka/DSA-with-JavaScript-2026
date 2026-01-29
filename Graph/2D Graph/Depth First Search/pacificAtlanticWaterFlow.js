// Pacific Atlantic Water Flow
// Time: O(m * n), Space: O(m * n)

function pacificAtlantic(heights) {
  const m = heights.length, n = heights[0].length;
  const pacific = Array.from({ length: m }, () => Array(n).fill(false));
  const atlantic = Array.from({ length: m }, () => Array(n).fill(false));
  
  function dfs(i, j, visited) {
    visited[i][j] = true;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    for (const [di, dj] of dirs) {
      const ni = i + di, nj = j + dj;
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && !visited[ni][nj] && heights[ni][nj] >= heights[i][j]) {
        dfs(ni, nj, visited);
      }
    }
  }
  
  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific);
    dfs(i, n - 1, atlantic);
  }
  
  for (let j = 0; j < n; j++) {
    dfs(0, j, pacific);
    dfs(m - 1, j, atlantic);
  }
  
  const result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) result.push([i, j]);
    }
  }
  
  return result;
}

// Test
console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])); // [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
