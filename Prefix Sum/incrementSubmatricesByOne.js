// Increment Submatrices by One
// Time: O(n + q), Space: O(n²)

function rangeAddQueries(n, queries) {
  const diff = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  
  for (let [r1, c1, r2, c2] of queries) {
    diff[r1][c1]++;
    diff[r1][c2 + 1]--;
    diff[r2 + 1][c1]--;
    diff[r2 + 1][c2 + 1]++;
  }
  
  const result = Array.from({ length: n }, () => Array(n).fill(0));
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[i][j] = diff[i][j];
      if (i > 0) result[i][j] += result[i - 1][j];
      if (j > 0) result[i][j] += result[i][j - 1];
      if (i > 0 && j > 0) result[i][j] -= result[i - 1][j - 1];
    }
  }
  
  return result;
}

// Test
console.log(rangeAddQueries(3, [[1,1,2,2],[0,0,1,1]])); // [[1,1,0],[1,2,1],[0,1,1]]
