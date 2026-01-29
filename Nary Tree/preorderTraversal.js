// N-ary Tree Preorder Traversal
// Time: O(n), Space: O(n)

function preorder(root) {
  const result = [];
  
  function dfs(node) {
    if (!node) return;
    result.push(node.val);
    for (let child of node.children) dfs(child);
  }
  
  dfs(root);
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
console.log(preorder(root)); // [1,3,5,6,2,4]
