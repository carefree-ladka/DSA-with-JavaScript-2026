// Quad Tree Intersection
// Time: O(n), Space: O(log n)

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

function intersect(quadTree1, quadTree2) {
  if (quadTree1.isLeaf) {
    return quadTree1.val ? quadTree1 : quadTree2;
  }
  if (quadTree2.isLeaf) {
    return quadTree2.val ? quadTree2 : quadTree1;
  }
  
  const topLeft = intersect(quadTree1.topLeft, quadTree2.topLeft);
  const topRight = intersect(quadTree1.topRight, quadTree2.topRight);
  const bottomLeft = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
  const bottomRight = intersect(quadTree1.bottomRight, quadTree2.bottomRight);
  
  if (topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf &&
      topLeft.val === topRight.val && topRight.val === bottomLeft.val && bottomLeft.val === bottomRight.val) {
    return new Node(topLeft.val, true);
  }
  
  return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
}

// Test
const node1 = new Node(true, true);
const node2 = new Node(false, true);
const result = intersect(node1, node2);
console.log(result.val); // true
console.log(result.isLeaf); // true
