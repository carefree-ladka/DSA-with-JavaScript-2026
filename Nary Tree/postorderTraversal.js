// N-ary Tree Postorder Traversal
// Time: O(n), Space: O(n)

function postorder(root) {
  const result = [];
  
  function dfs(node) {
    if (!node) return;
    for (let child of node.children) dfs(child);
    result.push(node.val);
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
console.log(postorder(root)); // [5,6,3,2,4,1]
