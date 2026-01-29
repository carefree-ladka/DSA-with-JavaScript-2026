// Longest Increasing Path in a Matrix
// Time: O(m * n), Space: O(m * n)

function longestIncreasingPath(matrix) {
  const m = matrix.length, n = matrix[0].length;
  const memo = Array.from({ length: m }, () => Array(n).fill(0));
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  
  function dfs(i, j) {
    if (memo[i][j]) return memo[i][j];
    
    let maxLen = 1;
    for (const [di, dj] of dirs) {
      const ni = i + di, nj = j + dj;
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni][nj] > matrix[i][j]) {
        maxLen = Math.max(maxLen, 1 + dfs(ni, nj));
      }
    }
    
    memo[i][j] = maxLen;
    return maxLen;
  }
  
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result = Math.max(result, dfs(i, j));
    }
  }
  
  return result;
}

// Test
console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]])); // 4
console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]])); // 4
