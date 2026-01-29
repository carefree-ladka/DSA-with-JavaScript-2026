// Stamping the Grid
// Time: O(m * n), Space: O(m * n)

function possibleToStamp(grid, stampHeight, stampWidth) {
  const m = grid.length, n = grid[0].length;
  const prefix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      prefix[i][j] = grid[i - 1][j - 1] + prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1];
    }
  }
  
  const diff = Array.from({ length: m + 2 }, () => Array(n + 2).fill(0));
  
  for (let i = 1; i <= m - stampHeight + 1; i++) {
    for (let j = 1; j <= n - stampWidth + 1; j++) {
      const sum = prefix[i + stampHeight - 1][j + stampWidth - 1] - prefix[i - 1][j + stampWidth - 1] - 
                  prefix[i + stampHeight - 1][j - 1] + prefix[i - 1][j - 1];
      if (sum === 0) {
        diff[i][j]++;
        diff[i + stampHeight][j]--;
        diff[i][j + stampWidth]--;
        diff[i + stampHeight][j + stampWidth]++;
      }
    }
  }
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      diff[i][j] += diff[i - 1][j] + diff[i][j - 1] - diff[i - 1][j - 1];
      if (grid[i - 1][j - 1] === 0 && diff[i][j] === 0) return false;
    }
  }
  
  return true;
}

// Test
console.log(possibleToStamp([[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]], 4, 3)); // true
