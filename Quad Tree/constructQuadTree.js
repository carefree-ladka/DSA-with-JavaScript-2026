// Construct Quad Tree
// Time: O(n² log n), Space: O(log n)

class Node {
  constructor(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft || null;
    this.topRight = topRight || null;
    this.bottomLeft = bottomLeft || null;
    this.bottomRight = bottomRight || null;
  }
}

function construct(grid) {
  return build(grid, 0, 0, grid.length);
}

function build(grid, x, y, length) {
  if (allSame(grid, x, y, length)) {
    return new Node(grid[x][y] === 1, true);
  }
  
  const half = Math.floor(length / 2);
  const node = new Node(true, false);
  node.topLeft = build(grid, x, y, half);
  node.topRight = build(grid, x, y + half, half);
  node.bottomLeft = build(grid, x + half, y, half);
  node.bottomRight = build(grid, x + half, y + half, half);
  return node;
}

function allSame(grid, x, y, length) {
  const val = grid[x][y];
  for (let i = x; i < x + length; i++) {
    for (let j = y; j < y + length; j++) {
      if (grid[i][j] !== val) return false;
    }
  }
  return true;
}

// Test
const grid = [[0,1],[1,0]];
const root = construct(grid);
console.log(root.isLeaf); // false
console.log(root.topLeft.val); // false
