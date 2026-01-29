// Quad Tree
// Time: O(log n) query, Space: O(n)

class Node {
  constructor(isLeaf, val, topLeft = null, topRight = null, bottomLeft = null, bottomRight = null) {
    this.isLeaf = isLeaf;
    this.val = val;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }
}

class QuadTree {
  construct(grid) {
    return this.build(grid, 0, 0, grid.length);
  }
  
  build(grid, x, y, length) {
    if (this.allSame(grid, x, y, length)) {
      return new Node(true, grid[x][y] === 1);
    }
    
    const half = Math.floor(length / 2);
    return new Node(
      false,
      true,
      this.build(grid, x, y, half),
      this.build(grid, x, y + half, half),
      this.build(grid, x + half, y, half),
      this.build(grid, x + half, y + half, half)
    );
  }
  
  allSame(grid, x, y, length) {
    const val = grid[x][y];
    for (let i = x; i < x + length; i++) {
      for (let j = y; j < y + length; j++) {
        if (grid[i][j] !== val) return false;
      }
    }
    return true;
  }
}

// Test
const qt = new QuadTree();
const grid = [[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]];
const root = qt.construct(grid);
console.log(root.isLeaf); // false
console.log(root.topLeft.isLeaf); // true
