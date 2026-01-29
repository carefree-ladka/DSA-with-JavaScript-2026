// N-ary Tree Level Order Traversal
// Time: O(n), Space: O(n)

function levelOrder(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length) {
    const level = [];
    const size = queue.length;
    
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      queue.push(...node.children);
    }
    result.push(level);
  }
  
  return result;
}

// Test
class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

const root = new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)]);
console.log(levelOrder(root)); // [[1],[3,2,4],[5,6]]
