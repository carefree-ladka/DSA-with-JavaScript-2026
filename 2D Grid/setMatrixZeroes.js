// Set Matrix Zeroes
// Time: O(m * n), Space: O(1)

function setZeroes(matrix) {
  const m = matrix.length, n = matrix[0].length;
  let firstRow = false, firstCol = false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) firstCol = true;
  }

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) firstRow = true;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRow) {
    for (let j = 0; j < n; j++) matrix[0][j] = 0;
  }

  if (firstCol) {
    for (let i = 0; i < m; i++) matrix[i][0] = 0;
  }
}

// Test
const matrix1 = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix1);
console.log(matrix1); // [[1,0,1],[0,0,0],[1,0,1]]

const matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(matrix2);
console.log(matrix2); // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
