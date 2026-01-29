// Maximum Depth of N-ary Tree
// Time: O(n), Space: O(h)

function maxDepth(root) {
  if (!root) return 0;
  
  let max = 0;
  for (let child of root.children) {
    max = Math.max(max, maxDepth(child));
  }
  
  return max + 1;
}

// Test
class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

const root = new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)]);
console.log(maxDepth(root)); // 3
