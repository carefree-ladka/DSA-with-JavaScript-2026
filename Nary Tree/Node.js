// N-ary Tree Node
// Basic node structure for N-ary tree

class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

// Test
const root = new Node(1, [
  new Node(3, [new Node(5), new Node(6)]),
  new Node(2),
  new Node(4),
]);
console.log(root);
